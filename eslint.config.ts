import eslint from "@eslint/js";
import biome from "eslint-config-biome";
import pluginJest from "eslint-plugin-jest";
import tseslint, { type ConfigArray } from "typescript-eslint";

export default tseslint.config([
  { ignores: ["**/.next/**", "**/build/**", "**/client/**", "**/dist/**", "**/node_modules/**"] },
  eslint.configs.recommended,
  // TS files
  {
    extends: [tseslint.configs.strict, tseslint.configs.stylistic],
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-function": "warn",
    },
  },
  // JS files
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js", "**/*.jsx"],
  },
  // Test files
  {
    extends: [pluginJest.configs["flat/all"]],
    files: [
      "**/*.spec.js",
      "**/*.spec.ts",
      "**/*.test.js",
      "**/*.test.ts",
      "**/*.spec.jsx",
      "**/*.spec.tsx",
      "**/*.test.jsx",
      "**/*.test.tsx",
    ],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "jest/no-deprecated-functions": "off",
    },
    settings: {
      jest: {
        globalPackage: "bun:test",
      },
    },
  },
  {
    // @ts-ignore
    extends: [biome],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/require-await": "off",
      "jest/max-nested-describe": "off",
      "jest/no-disabled-tests": "off",
      "jest/no-done-callback": "off",
      "jest/no-duplicate-hooks": "off",
      "jest/no-export": "off",
      "jest/no-focused-tests": "off",
      "jest/no-standalone-expect": "off",
      "sort-imports": "off",
    },
  },
]) satisfies ConfigArray;
