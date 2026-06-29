// @ts-check

import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.recommended,
      reactPlugin.configs.flat.recommended,
    ],
  },

  globalIgnores([
    "node_modules/**",
    "dist/**",
    "*.config.*",
    "eslint-auto-import.js",
  ]),
]);
