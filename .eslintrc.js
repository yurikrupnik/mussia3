module.exports = {
    parser: 'babel-eslint',
    rules: {
        "indent": ["off", 2, {
            "ignoredNodes": ["TemplateLiteral"]
        }],
        'comma-dangle': 0,
        'no-underscore-dangle': 1,
        'react/jsx-indent': [2, 4], // persona
        'react/jsx-indent-props': 0, // personal
        'jsx-a11y/anchor-is-valid': ['error', {
            'components': ['Link'],
            'specialLink': ['to'],
            'aspects': ['noHref', 'invalidHref', 'preferButton']
        }],
        // TODO: Remove when is https://github.com/babel/babel-eslint/issues/530 fixed
        'template-curly-spacing' : 'off',
    },
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
    extends: ['airbnb'],
    plugins: ['jsdoc'],
    env: {
        jest: true
    }
};
