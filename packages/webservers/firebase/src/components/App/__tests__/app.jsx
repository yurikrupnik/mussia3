import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // eslint-disable-line
import {
    render, cleanup
} from '@testing-library/react';
import App from '../app';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    it,
    afterEach,
    // expect
} = global;

afterEach(cleanup);

it('renders <App /> component', async () => { // integration test
    const tree = (
        <Router history={createBrowserHistory()}>
            <App routes={routes} />
        </Router>
    );
    render(tree);
    // const { getAllByText, getByPlaceholderText } = index(tree);
    // const event = {
    //     target: {
    //         value: 'oz'
    //     }
    // };

    // const input = getByPlaceholderText(/Search/);
    // fireEvent.change(input, event);
    // const greetingTextNode = await waitForElement(() => getAllByText(/oz/));
    // expect(input.value).toBe('oz');
    // expect(greetingTextNode).toBeTruthy();
});
