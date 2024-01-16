import type { Config } from "tailwindcss";
import { colors } from "@repo/tokens/colors";
import { fonts } from "@repo/tokens/fonts";
import { radii } from "@repo/tokens/radii";
import { spacing } from "@repo/tokens/spacing";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.tsx" // diz ao TW q todos os componentes terminados em .tsx devem ser considerados para estilizações!
  ],

  // CARÁTER AGNÓSTICO: Aqui, informamos que o TW deverá considerar SOMENTE os temas que definimos para projeto!
  // Ver documentação tailwind para seguir o formato correto dos valores.
  theme: {
    colors: {...colors, current: "currentColor"}, // p/ que q tb o "stroke-current"no componente Progress Circle importado do TW funcione.
    spacing,
    borderRadius: radii,
    fontWeight: fonts.fontWeights,
    fontFamily: {
      sans: fonts.fontFamilies.default,
      mono: "monospace" // garante que uma letra não aumente de tamanho
    },
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeights,
  },
  boxShadow: {
    lg: "1px 2px 4px 0px rgba(0,0,0, 0,25)",
  },
  plugins: [],
};
export default config;
