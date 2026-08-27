export async function POST(request: Request) {
  try {
    const body = await request.json();

    const googleUrl = process.env.GOOGLE_RSVP_URL?.trim();

    if (!googleUrl) {
      return Response.json(
        {
          success: false,
          error: "GOOGLE_RSVP_URL manquante dans .env.local",
        },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(googleUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: JSON.stringify({
        name: body.name ?? "",
        presence26: body.presence26 ?? "",
        presence28: body.presence28 ?? "",
        accommodation: body.accommodation ?? "",
        guests: body.guests ?? "",
        message: body.message ?? "",
      }),
      redirect: "follow",
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    let googleResult: {
      success?: boolean;
      error?: string;
    } = {};

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      console.error("Réponse Google non JSON :", responseText);
    }

    if (!googleResponse.ok) {
      return Response.json(
        {
          success: false,
          error: `Erreur Google Apps Script : ${googleResponse.status}`,
        },
        { status: 500 }
      );
    }

    if (googleResult.success === false) {
      return Response.json(
        {
          success: false,
          error: googleResult.error || "Erreur Apps Script",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur RSVP :", error);

    return Response.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Impossible d'enregistrer la réponse.",
      },
      { status: 500 }
    );
  }
}