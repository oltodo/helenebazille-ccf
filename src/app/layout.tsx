import clsx from "clsx";
import type { Metadata } from "next";
import { Source_Serif_4, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sans = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const title = localFont({
  src: "../assets/fonts/Pistilli-Roman.otf",
  variable: "--font-title",
});

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
    <html
      lang="en"
      className={process.env.MAINTENANCE && "bg-primary text-onPrimary"}
    >
      <body
        className={clsx(
          serif.className,
          serif.variable,
          sans.variable,
          title.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
