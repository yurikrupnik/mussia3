const path = require('path');
const reduce = require('lodash.reduce');

const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const dependencies = {
    ...json.dependencies,
    ...json.devDependencies,
    ...json.peerDependencies,
};

const alias = reduce(dependencies, (acc, v, k) => {
    acc[k] = path.resolve(cwd, 'node_modules', k);
    return acc;
}, {});

module.exports = {
    serverPort: Number(process.env.npm_package_config_port),
    pagePerSection: true,
    sections: [
        {
            pagePerSection: true,
            sections: [
                {
                    name: json.name,
                    components: [
                        path.join(cwd, 'src/**/*.jsx'),
                    ],
                    content: path.join(cwd, 'README.md'),
                    // content: 'README.md',
                    ignore: ['**/__tests__/*.jsx']
                }
            ]
        }
    ],
    styleguideComponents: {
        // Wrapper: path.join(process.cwd(), 'StyleguidistMuiWrapper.jsx'),
    },
    ignore: ['**/*.stories.jsx', '__mocks__/'],
    styleguideDir: path.join(cwd, 'dist/styleguide'),
    webpackConfig: {
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
            alias
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                rootMode: 'upward',
                            }
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-hot-loader',
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[local]--[hash:base64:5]'
                                },
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        }
    }
};
