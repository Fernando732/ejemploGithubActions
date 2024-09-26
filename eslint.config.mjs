import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { 
        ...globals.browser,
        process: "readonly" // Agrega 'process' como variable global de solo lectura
      }
    },
    rules: {
      "indent": ["error", 4], // Indentación de 2 espacios
      "quotes": ["error", "single"], // Comillas simples
      "semi": ["error", "always"], // Punto y coma obligatorio
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
