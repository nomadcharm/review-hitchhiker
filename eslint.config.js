import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			"plugin:prettier/recommended"
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			prettier: {},
			import: {}
		},
		rules: {
			"linebreak-style": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"prettier/prettier": [
				"error",
				{
					endOfLine: "auto"
				}
			],
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never"
				}
			]
		}
	}
);
