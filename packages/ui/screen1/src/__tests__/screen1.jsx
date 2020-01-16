import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    // expect(1).toBe(1);
    render((
        <StaticRouter location="/">
            <Component data={[
                {
                    title: 'title 1',
                    context: 'Context stam'
                }
            ]}
            />
        </StaticRouter>
    ));
});
