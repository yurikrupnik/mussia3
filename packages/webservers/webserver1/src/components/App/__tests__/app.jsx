import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // eslint-disable-line
import {
    render, cleanup
} from '@testing-library/react';
import App from '../app';
import routes from '../../routes';
// import Component from "../../Dashboard";

// jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    afterEach,
    // expect
} = global;

afterEach(cleanup);

// it('renders <App /> component', async () => { // integration test
//     const tree = (
//         <Router history={createBrowserHistory()}>
//             <App routes={routes} />
//         </Router>
//     );
// const { wrapper, getAllByText, findByRole, getByPlaceholderText } = render(tree); // todo test
//     // console.log(wrapper)
//     const icon = await findByRole(/presentation/);
//     console.log('icon', icon);
//     fireEvent.click(icon, {});
//     const logo = await getAllByText(/desktop app/);
//     console.log('logo', logo)
//
//     // const greetingTextNode = await waitForElement(() => getAllByText(/oz/));
//     // expect(input.value).toBe('oz');
//     // expect(greetingTextNode).toBeTruthy();
//     // const { getAllByText, getByPlaceholderText } = index(tree);
//     // const event = {
//     //     target: {
//     //         value: 'oz'
//     //     }
//     // };
//
//     // const input = getByPlaceholderText(/Search/);
//     // fireEvent.change(input, event);
//     // const greetingTextNode = await waitForElement(() => getAllByText(/oz/));
//     // expect(input.value).toBe('oz');
//     // expect(greetingTextNode).toBeTruthy();
// });
test(`render ${App.name} Component 4444`, () => {
    // const props = {};
    // expect(1).toBe(1);
    render(
        <StaticRouter location="/">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
    //
    // const components = routes.map((route) => {
    //     console.log('route', route)
    //     console.log('typeof of components', typeof route.component)
    //     console.log('typeof of render', typeof route.render)
    //     if (route.path === '/') {
    //         return false;
    //     }
    //     const Com = route.component ? route.component : route.render;
    //     console.log('com', Com);
    // // const A = withRouter(Com);
    // //     render(
    // //         <StaticRouter location={route.path}>
    // //             <A />
    // //         </StaticRouter>
    // //     );
    // });
});

test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard/overlays">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard/brands">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard/Careers">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard/activity">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
test(`render ${App.name} Component 4`, () => {
    // const props = {};
    // expect(1).toBe(1);
    // const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard/theme">
            <App routes={routes} />
        </StaticRouter>
    ); // eslint-disable-line
});
