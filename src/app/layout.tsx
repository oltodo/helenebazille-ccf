import clsx from "clsx";
import type { Metadata } from "next";
import { Source_Serif_4, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

import MaintenancePage from "@/components/MaintenancePage";

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
      className={clsx(
        process.env.MAINTENANCE === "1" && "bg-primary text-onPrimary",
        serif.className,
        serif.variable,
        sans.variable,
        title.variable,
      )}
    >
      <body></body>
      {process.env.MAINTENANCE === "1" ? <MaintenancePage /> : <>{children}</>}

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FMWF8V92J1"
      ></Script>
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
