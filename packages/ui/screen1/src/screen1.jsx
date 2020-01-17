import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import List from '@mussia/list';
import { Route } from 'react-router-dom';

const Stam = loadable(() => import(/* webpackChunkName: "stam" */'./Stam'));
const Route1 = loadable(() => import(/* webpackChunkName: "Route1" */'./Route1'));
const Route2 = loadable(() => import(/* webpackChunkName: "Route2" */'./Route2'));


// those fail in webserver1, webpack worked but failes in server side
// import ButtonList from '@krupnik/button-group';
const Router = ({ routes }) => (
    <>
        {routes.map((route) => <Route key={route.key} {...route} />)} {/* eslint-disable-line */}
    </>
);

Router.propTypes = {
    // children: PropTypes.element.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired
    })).isRequired
};

const routes = [
    {
        path: '/dashboard',
        component: Route1,
        // render: DashboardHeader,
        // exact: true,
        key: 'a',
        exact: true
    },
    {
        path: '/dashboard/a',
        component: Route2,
        // component: DashboardHeader,
        // render: DashboardHeader,
        // exact: true,
        key: 'b'
    }
];

const Screen1 = (props) => {
    const { children } = props;
    return (
        <div>
            <h2>
                I am dunamic 2
            </h2>
            <Stam />
            <List
                data={[
                    {
                        _id: '1'
                    },
                    {
                        _id: '12'
                    }
                ]}
            />
            {children}
            <Router routes={routes} />
        </div>
    );
};

Screen1.defaultProps = {
    children: null
};

Screen1.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ])
};

export default Screen1;
