module.exports = {
	root: true,
	extends: ['@killbasa/eslint-config'],
	parserOptions: {
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname
	}
};
