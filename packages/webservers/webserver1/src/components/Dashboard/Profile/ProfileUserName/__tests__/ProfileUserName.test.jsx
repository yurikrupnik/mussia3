import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    render((
        <BrowserRouter>
            <Component>Title</Component>
        </BrowserRouter>
    ));
});
