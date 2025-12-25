import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";

export default [
    // 1. Global ignores
    {
        ignores: ["dist/*", "node_modules/*", "build/*", ".vscode/*", "log.js"],
    },

    // 2. Base JavaScript Rules (Applied ONLY to JS/TS/Vue)
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
        ...js.configs.recommended,
    },

    // 3. TypeScript Rules (Applied ONLY to JS/TS/Vue)
    ...tseslint.configs.recommended.map((config) => ({
        ...config,
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    })),

    // 4. Vue configuration (Applied ONLY to .vue files)
    ...pluginVue.configs["flat/essential"].map((config) => ({
        ...config,
        files: ["**/*.vue"],
    })),

    // 5. Main Language Options for Code
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".vue"],
            },
        },
    },

    // 6. JSON Configuration
    // We don't apply js.configs.recommended here!
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        rules: {
            "json/no-duplicate-keys": "error",
        },
    },

    // 7. Markdown Configuration
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/gfm",
    },

    // 8. CSS Configuration
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
    },
];
