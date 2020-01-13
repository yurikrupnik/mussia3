import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    // expect(1).toBe(1);
    render((
        <Component data={[
            {
                title: 'title 1',
                context: 'Context stam'
            }
        ]}
        />
    ));
});
