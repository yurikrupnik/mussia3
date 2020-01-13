import React from 'react';
import Router from '../Router';
import routes from './routes';
// import App from '../App';

import { Provider as ThemeProviders } from '../contexts/themes';

// const theme = {
//     palette: {
//         primary: {
//             main: '#acdc8e',
//             light: '#dc5255',
//             dark: '#bfdc35'
//         },
//     }
// };

// <App
//    routes={routes}
//    userAgent={global.navigator.userAgent}
//    theme={theme}
// />

const Dashboard = () => (
    <>
        <ThemeProviders>
            <Router routes={routes} />
        </ThemeProviders>
    </>
);

export default Dashboard;
