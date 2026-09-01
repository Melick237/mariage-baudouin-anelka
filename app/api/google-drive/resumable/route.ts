import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, type, size } = body;

    if (!name || !type || !size) {
      return NextResponse.json(
        {
          success: false,
          error: "Informations du fichier manquantes.",
        },
        { status: 400 }
      );
    }

    const isImage = type.startsWith("image/");
    const isVideo = type.startsWith("video/");

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

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error("Impossible d'obtenir le token Google.");
    }

    const safeName = `${Date.now()}-${name}`;

    const googleResponse = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${accessToken.token}`,
          "Content-Type": "application/json; charset=UTF-8",
          "X-Upload-Content-Type": type,
          "X-Upload-Content-Length": String(size),
        },

        body: JSON.stringify({
          name: safeName,
          mimeType: type,
          parents: [folderId],
        }),
      }
    );

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text();

      console.error("Erreur création session Google :", errorText);

      return NextResponse.json(
        {
          success: false,
          error: "Impossible de préparer l'envoi vers Google Drive.",
        },
        { status: 500 }
      );
    }

    const uploadUrl = googleResponse.headers.get("location");

    if (!uploadUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Google n'a pas retourné de session d'upload.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      uploadUrl,
    });
  } catch (error) {
    console.error("Erreur resumable upload :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible de préparer l'upload.",
      },
      { status: 500 }
    );
  }
}