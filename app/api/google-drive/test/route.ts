import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
      return NextResponse.json(
        { success: false, error: "GOOGLE_DRIVE_FOLDER_ID manquant" },
        { status: 500 }
      );
    }

    const folder = await drive.files.get({
      fileId: folderId,
      fields: "id,name,mimeType",
    });

    return NextResponse.json({
      success: true,
      message: "Connexion Google Drive réussie 🎉",
      folder: folder.data,
    });
  } catch (error) {
    console.error("Erreur Google Drive :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible d'accéder au dossier Google Drive.",
      },
      { status: 500 }
    );
  }
}