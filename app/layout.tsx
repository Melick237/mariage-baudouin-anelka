import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: "Baudouin & Anelka | 24 & 28 novembre 2026",

  description:
    "Nous avons la joie de vous inviter à célébrer notre mariage les 24 et 28 novembre 2026 à Yaoundé.",

  openGraph: {
    title: "Baudouin & Anelka",
    description:
      "24 & 28 novembre 2026 · Dote · Mairie · Église · Soirée",
    url: "https://example.com",
    siteName: "Baudouin & Anelka",
    images: [
      {
        url: "/images/og-mariage.jpg",
        width: 1200,
        height: 630,
        alt: "Baudouin et Anelka",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Baudouin & Anelka",
    description:
      "24 & 28 novembre 2026 · Nous avons la joie de vous inviter à célébrer notre mariage.",
    images: ["/images/og-mariage.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}