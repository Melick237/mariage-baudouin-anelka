import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { error: "Code d'autorisation Google manquant." },
        { status: 400 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
      return NextResponse.json(
        {
          error: "Aucun refresh token reçu.",
          message: "Relance l'autorisation Google.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Google Drive est autorisé.",
      refresh_token: tokens.refresh_token,
    });
  } catch (error) {
    console.error("Erreur OAuth Google:", error);

    return NextResponse.json(
      { error: "Erreur pendant l'autorisation Google Drive." },
      { status: 500 }
    );
  }
}