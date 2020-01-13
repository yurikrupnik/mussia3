import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
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
