import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    render((
        <StaticRouter location="/">
            <Component>Title</Component>
        </StaticRouter>
    ));
});
