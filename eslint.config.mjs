import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { 
        ...globals.browser,
        process: "readonly"
      }
    },
    rules: {
      "indent": ["error", 4], // Indentación
      "quotes": ["error", "single"], // Comillas simples
      "semi": ["error", "always"], // Punto y coma obligatorio
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
