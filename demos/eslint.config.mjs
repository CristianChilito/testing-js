// import globals from "globals";
// import pluginJs from "@eslint/js";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];
import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    languageOptions: { globals: globals.node },
    ...pluginJs.configs.recommended,
    plugins: {
      jest,
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-before-function-paren": ["error", "never"],
      "indent": ["error", 2],
      "no-unused-vars": "error",
    },
  },
  {
    files: ["**/__tests__/**/*.js", "**/*.{spec,test}.js"],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      "jest/prefer-expect-assertions": ["error", { onlyFunctionsWithAsyncKeyword: true }],
      "jest/prefer-expect-resolves": "error",
      "jest/prefer-lowercase-title": ["error", { ignore: ["describe"] }],
      // "jest/prefer-to-be-null": "error", // Comentado porque no se encuentra
      // "jest/prefer-to-be-undefined": "error", // Comentado porque no se encuentra
      "jest/prefer-to-contain": "error",
      "jest/prefer-to-have-length": "error",
      "jest/valid-describe-callback": "error",
      "jest/valid-expect": "error",
      "jest/valid-expect-in-promise": "error",
      "jest/valid-title": "error",
    },
  },
];