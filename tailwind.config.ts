import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const colors = {
  core: {
    terracotta: {
      darkest: "#851F1D",
      light: "#EB7751",
      base: "#B84933",
      dark: "#B8390F",
    },
    sand: {
      darkest: "#CC6D00",
      light: "#FFE3C2",
      base: "#FFDAAD",
      dark: "#FFD197",
    },
    gunmetal: {
      light: "#4F4740",
      base: "#36312C",
    },
  },
  terracotta: {
    light: "#b85956",
    base: "#C3726F",
    dark: "#B75652",
  },
  highland: "#6f8f72",
  sand: "#f2e6d7",

  white: "#fff",
};

const config: Config = {
  theme: {
    colors: {
      terracottaDarkest: colors.core.terracotta.darkest,
      terracottaLight: colors.core.terracotta.light,
      terracottaDark: colors.core.terracotta.dark,
      gunmetalLight: colors.core.gunmetal.light,
      primaryContainer: colors.terracotta.light,

      terracotta: colors.core.terracotta.base,

      onBackground: colors.core.gunmetal.base,

      sandDarkest: colors.core.sand.darkest,
      gunmetal: colors.core.gunmetal.base,
      sandLight: colors.core.sand.light,
      background: colors.core.sand.base,

      sandDark: colors.core.sand.dark,
      primary: colors.terracotta.base,
      onPrimaryContainer: colors.sand,
      sand: colors.core.sand.base,
      transparent: "transparent",
      secondary: colors.highland,
      onPrimary: colors.sand,
    },
    extend: {
      keyframes: {
        wiggle: {
          from: { transform: "scale(0.5)" },
          to: { transform: "scale(1.5)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s linear",
      },
      screens: {
        xs: "512px",
      },
    },
    fontFamily: {
      serif: ["var(--font-serif)"],
      title: ["var(--font-title)"],
      sans: ["var(--font-sans)"],
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("def", ":where(&)");
    }),
  ],
  darkMode: "class",
};
export default config;
