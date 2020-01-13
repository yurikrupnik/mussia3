import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Component from '../index';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test('index movies with hooks', () => {
    const props = {};
    render(<Component {...props} />); // eslint-disable-line
});
