import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
    { ignores: ['dist/**', 'node_modules/**'] },

    js.configs.recommended,

    // Type-aware TS rules
    ...ts.configs.recommendedTypeChecked.map((cfg) => ({
        ...cfg,
        languageOptions: {
            ...cfg.languageOptions,
            globals: { ...globals.browser, ...globals.es2021 },
            parserOptions: {
                ...cfg.languageOptions?.parserOptions,
                projectService: true,    // TS project-aware linting
                tsconfigRootDir: import.meta.dirname
            }
        }
    })),

    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: importPlugin,
            'jsx-a11y': jsxA11y,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports
        },
        rules: {
            // Unused imports/vars
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_' }],

            // Import hygiene
            'import/order': ['warn', {
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
                groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
                pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }]
            }],

            // React hooks
            ...reactHooks.configs.recommended.rules,

            // A11y
            ...jsxA11y.configs.recommended.rules
        }
    },

    // Let Prettier handle formatting; prevent ESLint from fighting
    {
        rules: {
            'max-len': 'off',
            'no-mixed-spaces-and-tabs': 'off'
        }
    }
];
