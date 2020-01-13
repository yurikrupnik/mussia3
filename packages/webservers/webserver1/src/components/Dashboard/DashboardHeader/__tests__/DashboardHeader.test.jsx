import React from 'react'; // eslint-disable-line
import { StaticRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Component from '../../index';
// import routes from '../../routes';

afterEach(cleanup);

// test(`render ${Component.name} Component`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/'}>
//             <A>Title</A>
//         </StaticRouter>
//     ); // eslint-disable-line
// });
test(`render ${Component.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard">
            <Component>Title</Component>
        </StaticRouter>
    ); // eslint-disable-line
});

// test(`render ${Component.name} Component 3`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/dashboard/profile'}>
//             <A>Title</A>
//         </StaticRouter>webservers/webserver1/src/components/Header/Header.jsx
//     ); // eslint-disable-line
// });
// test(`render ${Component.name} Component 2`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/dashboard/themes'}>
//             <A>Title</A>
//         </StaticRouter>
//     ); // eslint-disable-line
// });
// test(`render ${Component.name} Component 2`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/dashboard/profile'}>
//             <A>Title</A>
//         </StaticRouter>
//     ); // eslint-disable-line
// });
// test(`render ${Component.name} Component 2`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/dashboard/account'}>
//             <A>Title</A>
//         </StaticRouter>
//     ); // eslint-disable-line
// });
// test(`render ${Component.name} Component 2`, () => {
//     // const props = {};
//     // expect(1).toBe(1);
//     const A = withRouter(Component);
//     render(
//         <StaticRouter location={'/dashboard/Activity'}>
//             <A>Title</A>
//         </StaticRouter>
//     ); // eslint-disable-line
// });
