import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, error: "Aucun fichier reçu." },
        { status: 400 }
      );
    }

    // Autoriser uniquement les photos et vidéos
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      return NextResponse.json(
        {
          success: false,
          error: "Seules les photos et vidéos sont autorisées.",
        },
        { status: 400 }
      );
    }

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
      return NextResponse.json(
        {
          success: false,
          error: "GOOGLE_DRIVE_FOLDER_ID manquant.",
        },
        { status: 500 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadedFile = await drive.files.create({
      requestBody: {
        name: `${Date.now()}-${file.name}`,
        parents: [folderId],
      },

      media: {
        mimeType: file.type,
        body: Readable.from(buffer),
      },

      fields: "id,name,mimeType,size",
    });

    return NextResponse.json({
      success: true,
      message: "Fichier envoyé sur Google Drive.",
      file: uploadedFile.data,
    });
  } catch (error) {
    console.error("Erreur upload Google Drive :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible d'envoyer le fichier sur Google Drive.",
      },
      { status: 500 }
    );
  }
}