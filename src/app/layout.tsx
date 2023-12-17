import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hélène Bazille - Conseil Conjugal et Familial",
  description:
    "Je m’appelle Hélène Bazille, je suis conseillère conjugale et familiale. Je démarre mon activité à Mornant le 5 janvier 2024. Je vous accueille le lundi et le vendredi pour des consultations de conseil conjugal et familial, dans mon cabinet qui se situe au centre-ville.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
