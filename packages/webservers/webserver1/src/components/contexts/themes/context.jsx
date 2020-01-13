import React from 'react';
// import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// const themes = {
//     light: {
//         foreground: '#000000',
//         background: '#eeeeee',
//         color: 'red'
//     },
//     dark: {
//         foreground: '#ffffff',
//         background: '#222222',
//         color: 'green'
//     },
// };


// const theme = createMuiTheme({
//     palette: {
//         type: 'light'
//     },
//     typography: {
//         button: {
//             fontSize: '1rem',
//         },
//     },
// });
// const Context = React.createContext({
//     theme: theme,
//     // toggle: () => {}
// });

export default React.createContext({
    theme: {
        palette: {
            type: 'light'
        }
    }
    // theme: themes.light,
    // toggleTheme: () => {}
});
