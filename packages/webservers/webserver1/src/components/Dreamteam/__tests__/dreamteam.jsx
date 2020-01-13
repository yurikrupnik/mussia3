import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    // const props = {};
    // expect(1).toBe(1);
    render(<Component>Title</Component>); // eslint-disable-line
});
