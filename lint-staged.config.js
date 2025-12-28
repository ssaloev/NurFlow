/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
    "*.{js,ts,vue,jsx,tsx,css,scss,md,json,yml,yaml}": [
        "prettier --write",
        "eslint --fix",
    ],
};
