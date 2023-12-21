import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const colors = {
  white: "#fff",
  terracotta: {
    light: "#C3726F",
    base: "#b85956",
    dark: "#B75652",
  },
  sand: "#f2e6d7",
  gunmetal: "#292f36",
  highland: "#6f8f72",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: colors.sand,
      onBackground: colors.gunmetal,
      primary: colors.terracotta.base,
      onPrimary: colors.sand,
      primaryContainer: colors.terracotta.light,
      onPrimaryContainer: colors.sand,
      secondary: colors.highland,
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
      title: ["var(--font-title)"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: colors.sand,
              foreground: colors.gunmetal,
            },
            primary: {
              DEFAULT: colors.terracotta.base,
              foreground: colors.sand,
            },
            secondary: {
              DEFAULT: colors.gunmetal,
              foreground: colors.sand,
            },
          },
        },
      },
    }),
  ],
};
export default config;
