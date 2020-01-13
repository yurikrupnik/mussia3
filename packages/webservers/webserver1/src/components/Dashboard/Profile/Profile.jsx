import React from 'react';
import routes from './routes';
// import Router from '../../Router';
import App from '../../App';

// const theme = {
//     palette: {
//         primary: {
//             main: '#dc5255'
//         },
//     }
// };
export default React.memo(() => (
    <App routes={routes} />
));
