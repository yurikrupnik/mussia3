import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {};
    render(<Component {...props}>Title</Component>); // eslint-disable-line
});
