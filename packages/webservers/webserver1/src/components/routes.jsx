import loadable from '@loadable/component';
// import React from 'react';
// import Header from './Header';
// import Root from './Root';
// import Dashboard from './Dashboard';
// import Brands from './Brands';
// import Careers from './Careers';
// import Dreamteam from './Dreamteam';
// import Groundcontrol from './Groundcontrol';

// const Root = loadable(() => import(/* webpackChunkName: "root" */ './Root'));
// const Dashboard = loadable(() => import(/* webpackChunkName: "dashboard" */ './Dashboard'));
// const Header = loadable(() => import(/* webpackChunkName: "header" */ './Header'));
const Header = loadable(() => import(/* webpackChunkName: "header" */ './Header/DefaultHeader'));
// const Brands = loadable(() => import(/* webpackChunkName: "brands" */ './Brands'));
// const Careers = loadable(() => import(/* webpackChunkName: "Careers" */ './Careers'));
// const Dreamteam = loadable(() => import(/* webpackChunkName: "Dreamteam" */ './Dreamteam'));
// const Shows = loadable(() => import(/* webpackChunkName: "Shows" */ './Shows'));

// const Register = loadable(() => import(/* webpackChunkName: "Register" */ './Register'));
// const ChatRoom = loadable(() => import(/* webpackChunkName: "ChatRoom" */ './ChatRoom'));
// const Projects = loadable(() => import(/* webpackChunkName: "Projects" */ './Projects'));

const routes = [
    {
        path: '/',
        component: Header,
        // render: (props) => {
        //     const { location } = props;
        //     const { pathname } = location;
        //     // console.log(props)
        //     // console.log(pathname.includes('dashboard'))
        //     if (pathname.includes('dashboard')) {
        //         return null;
        //     }
        //     return (
        //         <Header />
        //     );
        // },
        key: 'root',
        // exact: true
    },
    // {
    //     path: '/',
    //     component: Shows,
    //     key: 'main',
    //     exact: true
    // },
    // {
    //     path: '/dashboard',
    //     component: Dashboard,
    //     key: 'das'
    // },
    // {
    //     path: '/brands',
    //     component: Brands,
    //     key: 'brands'
    // },
    // {
    //     path: '/careers',
    //     component: Careers,
    //     key: 'careers'
    // },
    // {
    //     path: '/dreamteam',
    //     component: Dreamteam,
    //     key: 'dreamteam',
    //     // exact: true
    // },
    // {
    //     path: '/groundcontrol',
    //     component: Groundcontrol,
    //     key: 'Shows',
    //     // exact: true
    // }
];

export default routes;
