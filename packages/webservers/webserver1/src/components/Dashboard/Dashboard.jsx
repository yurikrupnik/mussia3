import React from 'react';
import routes from './routes';
import Router from '../Router';
// import App from '../App';

import { Provider as ThemeProviders } from '../contexts/themes';

const theme = {
    palette: {
        primary: {
            main: '#afa9dc',
            light: '#dc5255',
            dark: '#bfdc35'
        }
    }
};

// <App
//    routes={routes}
//    userAgent={global.navigator.userAgent}
//    theme={theme}
// />

const Dashboard = () => (
    <ThemeProviders theme={theme}>
        <Router routes={routes} />
    </ThemeProviders>
);

export default Dashboard;
