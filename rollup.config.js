import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import reduce from 'lodash/reduce';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const filter = reduce(
    Object.assign({}, json.peerDependencies, json.devDependencies),
    (acc, val, key) => acc.concat(key), []
).concat([
    '@material-ui/styles',
    '@material-ui/core',
    '@material-ui/core/AppBar',
    '@material-ui/core/Avatar',
    '@material-ui/core/Backdrop',
    '@material-ui/core/Badge',
    '@material-ui/core/Card',
    '@material-ui/core/Checkbox',
    '@material-ui/core/Chip',
    '@material-ui/core/CircularProgress',
    '@material-ui/core/Collapse',
    '@material-ui/core/Dialog',
    '@material-ui/core/Divider',
    '@material-ui/core/Drawer',
    '@material-ui/core/Fab',
    '@material-ui/core/FormControl',
    '@material-ui/core/Grid',
    '@material-ui/core/Icon',
    '@material-ui/core/Input',
    '@material-ui/core/Select',
    '@material-ui/core/Switch',
    '@material-ui/core/Tab',
    '@material-ui/core/Table',
    '@material-ui/core/TextField',
    '@material-ui/core/ToggleButton',
    '@material-ui/core/Toolbar',
    '@material-ui/core/Tooltip',
]);

// console.log('filter', filter)

const globals = {
    react: 'React',
    'prop-types': 'PropTypes'
};

const defaultModule = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs',
            globals
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm',
            globals
        }
    ],
    plugins: [
        external({
            includeDependencies: true,
        }),
        postcss({
            minimize: true,
            modules: true,
            plugins: [autoprefixer()],
        }),
        babel({
            // exclude: 'node_modules/**',
        }),
        resolve({
            // modulesOnly: true, // Default: false
        //     module: true,
            extensions: ['.mjs', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
        }),
        commonjs({
            // include: /node_modules/
        })
    ],
    // external: filter,
};

export default defaultModule;
