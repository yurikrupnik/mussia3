import React from 'react';
import PropTypes from 'prop-types';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import useTheme from '@material-ui/core/styles/useTheme';
import Providers from './providers';
import Layout from './layout';

const App = ({ theme, routes, providers }) => {
    const upperTheme = useTheme();
    return (
        <MuiThemeProvider
            theme={Object.keys(theme).length ? createMuiTheme(
                { ...upperTheme, ...theme }
                // Object.assign({}, upperTheme, theme)
            ) : upperTheme}
        >
            <Providers providers={providers}>
                <Layout routes={routes} />
            </Providers>
        </MuiThemeProvider>
    );
};

App.defaultProps = {
    providers: [],
    theme: {}
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    providers: PropTypes.arrayOf(PropTypes.func),
    theme: PropTypes.shape({})
};

export default App;
