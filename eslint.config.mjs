import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        files: ["**/*.{js,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: typescriptParser,
            globals: {
                // Define global variables here as per your environment needs
                window: "readonly", // Add this if your code runs in a browser
                process: "readonly", // Add this if your code runs in Node.js
                console: "readonly", // Common global in both Node.js and browsers
                require: "readonly", // Node.js global
                module: "readonly", // Node.js global
                __dirname: "readonly", // Node.js global
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
        },
    },
];
