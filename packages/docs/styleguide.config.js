const path = require('path');
const fs = require('fs');
const reduce = require('lodash.reduce');
// const cwd = process.cwd();
// console.log('cwd', cwd);
// console.log('__dirname', __dirname);

// console.log('as', as);

// const json = require(path.resolve(cwd, '../..', 'package.json')); // esl
const json = require('./package.json');

const root = path.join(__dirname, '/../..');

const alias = reduce(
    json.dependencies,
    (acc, v, k) => {
        acc[k] = path.resolve(__dirname, 'node_modules', k);
        return acc;
    },
    {}
);

// const sf = path.join(root, 'packages/ui/list/README.md');
// console.log('sf', sf); // eslint-disable-line
const packages = path.join(root, 'packages');

const uiSections = fs.readdirSync(path.join(packages, 'ui')).reduce((acc, file) => {
    if (file.includes('.md') || file.includes('DS_Store')) {
        return acc;
    }
    const j = fs.readFileSync(path.join(packages, `ui/${file}/package.json`), 'utf8');
    return acc.concat({
        name: JSON.parse(j).name,
        components: [path.join(packages, `ui/${file}/src/**/*.jsx`)],
        content: path.join(packages, `ui/${file}/README.md`),
        ignore: ['**/__tests__/*.jsx']
    });
}, []);

// const servicesSections = fs.readdirSync(path.join(packages, 'services')).reduce((acc, file) => {
//     if (file.includes('.md') || file.includes('DS_Store')) {
//         return acc;
//     }
//     const j = fs.readFileSync(path.join(packages, `services/${file}/package.json`), 'utf8');
//     return acc.concat({
//         name: JSON.parse(j).name,
//         // components: [
//         //     path.join(packages, `services/${file}/src/**/*.jsx`),
//         // ],
//         content: path.join(packages, `services/${file}/README.md`),
//         ignore: ['**/__tests__/*.jsx']
//     });
// }, []);

const webserversSections = fs.readdirSync(path.join(packages, 'webservers')).reduce((acc, file) => {
    if (file.includes('.md') || file.includes('DS_Store')) {
        return acc;
    }
    const j = fs.readFileSync(path.join(packages, `webservers/${file}/package.json`), 'utf8');
    return acc.concat({
        name: JSON.parse(j).name,
        components: [path.join(packages, `webservers/${file}/src/components/**/*.jsx`)],
        content: path.join(packages, `webservers/${file}/README.md`),
        ignore: ['**/__tests__/*.jsx']
    });
}, []);

module.exports = {
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: path.join(root, 'docs/introduction.md')
        },
        {
            name: 'Documentation',
            pagePerSection: true,
            sections: [
                {
                    name: 'Installation',
                    content: path.join(root, 'docs/installation.md'),
                    description: 'The description for the installation section',
                    separatePage: 'components'
                },
                {
                    name: 'Configuration',
                    content: path.join(root, 'docs/configuration.md')
                },
                {
                    name: 'Webserver 1',
                    href: 'http://localhost:5000'
                },
                {
                    name: 'Webserver 2',
                    // external: true,
                    href: 'http://localhost:5002'
                }
            ]
        },
        {
            name: 'Components',
            pagePerSection: true,
            content: path.join(packages, 'ui/readme.md'),
            sections: uiSections
        },
        // {
        //     name: 'Services',
        //     pagePerSection: true,
        //     content: path.join(packages, 'services/readme.md'),
        //     sections: servicesSections
        // },
        {
            name: 'Services',
            pagePerSection: true,
            content: path.join(packages, 'services/readme.md'),
            sections: [
                {
                    name: '@krupnik/service1',
                    sections: [
                        {
                            name: 'swagger',
                            href: 'http://localhost:4000/doc/'
                        },
                        {
                            name: 'docs',
                            href: 'http://localhost:4000/docs/'
                        }
                    ]
                },
                {
                    name: 'swagger',
                    href: 'http://localhost:4000/docs'
                },
                {
                    name: 'docs',
                    href: 'http://localhost:4000/doc'
                }
            ]
        },
        {
            name: 'Web servers components',
            sections: webserversSections,
            ignore: ['**/__tests__/*.jsx', '**/*.test.jsx', 'node_modules']
        }
    ],
    styleguideComponents: {
        // Wrapper: path.join(process.cwd(), 'StyleguidistMuiWrapper.jsx'),
    },
    ignore: ['**/*.stories.jsx', '__mocks__/'],
    styleguideDir: 'dist/assets/styleguide',
    webpackConfig: {
        resolve: {
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
                                rootMode: 'upward'
                            }
                        }
                    ],
                    exclude: /node_modules/
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
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
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
