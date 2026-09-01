import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — sampled from the logo. Replaces the old paper/oxblood/gold set.
        cream: "#FDFAF0", // default page ground, text on dark
        linen: "#F4EDDD", // alternating warm sections
        "stripe-ground": "#FBF3E6", // base behind the striped fabric texture
        ink: "#1A1512", // headlines, body dark, photo scrims
        graphite: "#4A413A", // body copy
        mute: "#8A7F76", // labels, captions, "before" state copy
        "mute-soft": "#6E645C", // footer legal line
        brand: "#8B0D00", // primary red — logo, CTAs, accents, marquee
        "brand-hover": "#A81205", // CTA hover
        "brand-deep": "#5E0900", // link hover, secondary hover
        "dark-base": "#240A06", // fallback behind the stripe overlay
        salmon: "#E8A08F", // accent numerals on dark panels
        "salmon-deep": "#C9705F", // secondary salmon accent
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.2em",
        tight: "-0.038em",
      },
      maxWidth: {
        shell: "1440px",
        text: "1180px",
        narrow: "940px",
      },
      keyframes: {
        marq: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        slowpan: {
          "0%": { transform: "scale(1.08)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1.08)" },
        },
        cue: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(110%)" },
        },
        heroIn: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "none" },
        },
        drift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "marq-36": "marq 36s linear infinite",
        "marq-42": "marq 42s linear infinite",
        slowpan: "slowpan 28s ease-in-out infinite",
        cue: "cue 2.4s cubic-bezier(0.6,0,0.4,1) infinite",
        drift: "drift 24s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
