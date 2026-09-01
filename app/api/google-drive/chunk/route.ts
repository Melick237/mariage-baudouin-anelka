import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const uploadUrl = request.headers.get("x-upload-url");
    const contentRange = request.headers.get("x-content-range");
    const contentType =
      request.headers.get("x-file-type") || "application/octet-stream";

    if (!uploadUrl || !contentRange) {
      return NextResponse.json(
        {
          success: false,
          error: "Informations de session manquantes.",
        },
        { status: 400 }
      );
    }

    // Sécurité : accepter uniquement une URL de session Google Drive
    let parsedUrl: URL;

    try {
      parsedUrl = new URL(uploadUrl);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "URL d'upload invalide.",
        },
        { status: 400 }
      );
    }

    if (
      parsedUrl.protocol !== "https:" ||
      parsedUrl.hostname !== "www.googleapis.com"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Destination d'upload non autorisée.",
        },
        { status: 400 }
      );
    }

    const chunk = await request.arrayBuffer();

    if (chunk.byteLength === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Morceau vide.",
        },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(uploadUrl, {
      method: "PUT",

      headers: {
        "Content-Type": contentType,
        "Content-Length": String(chunk.byteLength),
        "Content-Range": contentRange,
      },

      body: Buffer.from(chunk),
    });

    /*
      308 = morceau reçu, upload pas encore terminé
      200/201 = fichier terminé
    */
    if (
      googleResponse.status !== 308 &&
      !googleResponse.ok
    ) {
      const errorText = await googleResponse.text();

      console.error(
        "Erreur Google Drive chunk :",
        googleResponse.status,
        errorText
      );

      return NextResponse.json(
        {
          success: false,
          error: `Google Drive a refusé le morceau (${googleResponse.status}).`,
        },
        { status: googleResponse.status }
      );
    }

    const range = googleResponse.headers.get("range");

    let file = null;

    if (googleResponse.status === 200 || googleResponse.status === 201) {
      try {
        file = await googleResponse.json();
      } catch {
        // Pas grave si Google ne retourne aucun JSON
      }
    }

    return NextResponse.json({
      success: true,
      complete:
        googleResponse.status === 200 ||
        googleResponse.status === 201,
      status: googleResponse.status,
      range,
      file,
    });
  } catch (error) {
    console.error("Erreur chunk upload :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible d'envoyer ce morceau.",
      },
      { status: 500 }
    );
  }
}