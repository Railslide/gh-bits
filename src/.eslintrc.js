module.exports = {
    'env': {
        'es6': true,
        'react-native/react-native': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
        },
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'react-native',
        'flowtype',
    ],
    'rules': {
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
            'imports': 'always-multiline',
            'objects': 'always-multiline',
        }],
        'flowtype/require-parameter-type': 2,
        'flowtype/require-return-type': 2,
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/sort-keys': [2, 'asc'],
        'indent': ['error', 4, {"SwitchCase": 1}],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'sort-keys': ['error', 'asc'],
    },
};
