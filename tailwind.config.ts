import type { Config } from "tailwindcss";

type OpacityFunction = { opacityValue?: number };

function withOpacity(variableName: string) {
  return ({ opacityValue }: OpacityFunction): string => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        colors: {
          primary: {
            customColor: 'rgb(var(--color-primary) / <alpha-value>)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
