import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E8",
        bone: "#EBE3D5",
        linen: "#FBF8F3",
        ink: "#171310",
        graphite: "#3C3530",
        mute: "#7A6F66",
        oxblood: "#6E1F26",
        "oxblood-deep": "#521218",
        ember: "#B4462F",
        gold: "#C39A4B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        shell: "1240px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        rise: "rise 0.7s cubic-bezier(0.2,0.7,0.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
