import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // eslint-disable-line
import Layout from '../layout';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    test
} = global;

test('index Layout Component', () => {
    const tree = (
        <Router history={createBrowserHistory()}>
            <Layout routes={routes} />
        </Router>
    );

    render(tree);
});
