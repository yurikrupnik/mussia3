import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const router = [
        {
            path: '/',
            component: () => (
                <div>
                    helo
                </div>
            ),
            key: 1
        }
    ];
    expect(1).toBe(1);
    render((
        <BrowserRouter>
            <Component routes={router} />
        </BrowserRouter>
    ));
});
