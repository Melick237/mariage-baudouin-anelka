import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://mariage-baudouin-anelka.vercel.app"
  ),

  title: "Anelka & Baudouin | 26 & 28 novembre 2026",

  description:
    "Nous avons la joie de vous inviter à célébrer notre mariage les 26 et 28 novembre 2026 à Yaoundé.",

  openGraph: {
    title: "Anelka & Baudouin | Mariage",
    description:
      "26 & 28 novembre 2026 · Dote · Mairie · Église · Soirée",
    url: "https://mariage-baudouin-anelka.vercel.app",
    siteName: "Anelka & Baudouin",
    images: [
      {
        url: "/images/og-mariage.jpg",
        width: 1200,
        height: 630,
        alt: "Mariage Anelka et Baudouin",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anelka & Baudouin | Mariage",
    description:
      "26 & 28 novembre 2026 · Dote · Mairie · Église · Soirée",
    images: ["/images/og-mariage.jpg"],
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