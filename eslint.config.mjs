import js from "@eslint/js";
import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([{
  files: ["**/*.{js,mjs,cjs}"],
    plugins: {
        js
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
          ...globals.jquery,
          ...globals.browser
      },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script"
    },
    rules: {
      // Allow unused variables if they are prefixed with _
      "no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }]
    },
  },
  // lint css files
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
    },
  },
  // lint html files
  {
    files: ["**/*.htm"],
    plugins: {
      html,
    },
    language: "html/html",
    rules: {
      "html/no-duplicate-class": "error",
    }
  }

]);