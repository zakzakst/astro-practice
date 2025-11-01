/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    "@stylistic/indentation": 2,
  },
};
