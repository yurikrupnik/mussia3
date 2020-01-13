import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // eslint-disable-line
import MainNav from '../nav';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    test,
    // expect,
    // shallow,
    afterEach
} = global;

afterEach(cleanup);

test('renders <Nav /> component', () => {
    const tree = (
        <Router history={createBrowserHistory()}>
            <MainNav routes={routes} />
        </Router>
    );
    render(tree);
    // expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('div').length).toBe(2);
});
