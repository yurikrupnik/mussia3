import React from 'react'; // eslint-disable-line
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from '../index';
import Overlays from '../Overlays';
import Activity from '../Activity';
import Main from '../Main';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    render((
        <BrowserRouter>
            <Component>Title</Component>
        </BrowserRouter>
    ));
});

test(`render ${Overlays.name} Component`, () => {
    render(<Overlays>Title</Overlays>);
});

test(`render ${Activity.name} Component`, () => {
    render(<Activity>Title</Activity>);
});

test(`render ${Main.name} Component`, () => {
    render((
        <BrowserRouter>
            <Main>Title</Main>
        </BrowserRouter>
    ));
});
