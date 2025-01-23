import eslintConfig from '@killbasa/eslint-config';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...eslintConfig,
	{
		name: 'ignore',
		ignores: ['.yarn/', 'dist/', 'node_modules/', '.prettierrc.cjs']
	}
];

export default config;
