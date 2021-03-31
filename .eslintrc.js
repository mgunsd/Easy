module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'], //required for "type-aware linting"
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	extends: [
		'airbnb-typescript/base',
		'@react-native-community',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'prettier',
		'plugin:import/typescript',
	],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'no-param-reassign': [
			'error',
			{props: true, ignorePropertyModificationsFor: ['draft', 'draftState']},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/camelcase': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/prop-types': 'off',
		'no-underscore-dangle': ['error', {allow: ['typename_', '_typename']}],
		'no-underscore-dangle': ['error', {allowAfterThis: true}],
		'no-underscore-dangle': ['error', {allowAfterSuper: true}],
		'no-underscore-dangle': ['error', {allowAfterThisConstructor: true}],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'global-require': 'off',
		'@typescript-eslint/ban-ts-comment': 2,
		'@typescript-eslint/no-explicit-any': 2,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-inline-styles': 0,
		'react-native/no-color-literals': 0,
		'react-native/no-raw-text': 0,
		'import/no-extraneous-dependencies': 2,
		'import/extensions': ['error', 'never', {svg: 'always'}],
		'import/order': ['error', {'newlines-between': 'always'}],
		'import/no-duplicates': 2,
		'import/no-useless-path-segments': 2,
		'import/no-cycle': 0,
		'import/prefer-default-export': 0,
		'import/named': 0,
		'import/namespace': 0,
		'import/default': 0,
		'import/no-named-as-default-member': 0,
		'import/no-named-as-default': 0,
		'import/no-unused-modules': 0,
		'import/no-deprecated': 0,
		'@typescript-eslint/indent': 0,
		'import/no-anonymous-default-export': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': ['error', {additionalHooks: '(useMemoOne)'}],
		'jest/no-identical-title': 2,
		'jest/valid-expect': 2,
		camelcase: 2,
		'prefer-destructuring': 2,
		'no-nested-ternary': 2,
		'comma-dangle': 0,
	},
};
