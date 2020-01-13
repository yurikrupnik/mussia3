import React from 'react';
import render from '../index';
import handleRender from '../handleRender';

const { describe, test } = global;

const App = () => (
    <div>
        app
    </div>
);

const routes = [
    {
        path: '/',
        key: 's',
        component: () => (
            <div>a</div>
        )
    }
];

describe('render', () => {
    test('needs tests', () => {
        render();
    });
    test('needs tests', () => {
        handleRender()({ headers: { 'user-agent': '' } }, { render: jest.fn(), redirect: jest.fn() }, jest.fn());
        handleRender(App)({ headers: { 'user-agent': '' } }, { render: jest.fn(), redirect: jest.fn() }, jest.fn());
        handleRender(App, [])({ headers: { 'user-agent': '' } }, { render: jest.fn(), redirect: jest.fn() }, jest.fn());
        handleRender(App, routes)({ headers: { 'user-agent': '' } }, { url: '/', render: jest.fn(), redirect: jest.fn() }, jest.fn());
    });
});
