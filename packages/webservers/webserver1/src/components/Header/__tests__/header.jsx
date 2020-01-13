import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import Component from '../index';
// import DashboardHeader from '../../Dashboard/DashboardHeader';
import DefaultHeader from '../DefaultHeader';
import ProfileHeader from '../ProfileHeader';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    // const props = {};
    // expect(1).toBe(1);
    const A = withRouter(Component);
    render(
        <BrowserRouter>
            <A>Title</A>
        </BrowserRouter>
    ); // eslint-disable-line
});


// test(`render ${DashboardHeader.name} Component`, () => {
//     const props = {
//         regularRoutes: [
//             {
//                 label: 1,
//                 url: 1
//             }
//         ],
//         toggleOpen: jest.fn(),
//         open: false
//     };
//     // expect(1).toBe(1);
//     const A = withRouter(DashboardHeader);
//     render(
//         <BrowserRouter>
//             <A
//                 regularRoutes={props.regularRoutes}
//                 toggleOpen={props.toggleOpen}
//                 open={props.open}
//             >
//                 Title
//             </A>
//         </BrowserRouter>
//     ); // eslint-disable-line
// });

test(`render ${DefaultHeader.name} Component`, () => {
    const props = {
        regularRoutes: [
            {
                label: 1,
                url: 1
            }
        ],
        toggleOpen: jest.fn(),
        open: false
    };
    const A = withRouter(DefaultHeader);
    render(
        <BrowserRouter>
            <A
                regularRoutes={props.regularRoutes}
                toggleOpen={props.toggleOpen}
                open={props.open}
            >
                Title
            </A>
        </BrowserRouter>
    );
});

test(`render ${ProfileHeader.name} Component`, () => {
    const props = {
        regularRoutes: [
            {
                label: 1,
                url: 1
            }
        ],
        toggleOpen: jest.fn(),
        open: false
    };
    // expect(1).toBe(1);
    const A = withRouter(ProfileHeader);
    render(
        <BrowserRouter>
            <A
                regularRoutes={props.regularRoutes}
                toggleOpen={props.toggleOpen}
                open={props.open}
            >
                Title
            </A>
        </BrowserRouter>
    ); // eslint-disable-line
});
