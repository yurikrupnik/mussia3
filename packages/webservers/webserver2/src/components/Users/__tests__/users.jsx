import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Component from '../index';
import route from '../../../services/users/route';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test('index users with hooks', () => {
    const s = route(Component, '/lol', 'lol');
    // const props = {};
    render(
        <StaticRouter
            render={() => (
                <s.component />
            )}
        />
    );
});
