import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Component from '../index';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    render(<Component />);
});
