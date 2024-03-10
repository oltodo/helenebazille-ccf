import type { Metadata } from "next";

import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import clsx from "clsx/lite";

import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const title = localFont({
  src: "../assets/fonts/Pistilli-Roman.otf",
  variable: "--font-title",
});

export const metadata: Metadata = {
  description:
    "Je m’appelle Hélène Bazille, je suis conseillère conjugale et familiale. Je vous accueille le lundi et le vendredi, de 8h à 20h, pour des consultations de conseil conjugal et familial, dans mon cabinet qui se situe dans le centre de Mornant ou en téléconsultation.",
  title: "Hélène Bazille - Conseil Conjugal et Familial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={clsx(serif.className, serif.variable, title.variable)}
      lang="en"
    >
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FMWF8V92J1"
        async
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FMWF8V92J1');
        `}
      </Script>
    </html>
  );
}
