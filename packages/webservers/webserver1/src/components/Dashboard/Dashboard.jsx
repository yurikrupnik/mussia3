import React from 'react';
import loadable from '@loadable/component';
import Router from '../Router';
import routes from './routes';
import Hello from '../Hello';
import { Provider as ThemeProviders } from '../contexts/themes';
// const Hello = loadable(() => import(/* webpackChunkName: "Hello" */ '../Hello.tsx'));

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
            <Hello lol={true}/>
            <Router routes={routes} />
        </ThemeProviders>
    </>
);

export default Dashboard;
