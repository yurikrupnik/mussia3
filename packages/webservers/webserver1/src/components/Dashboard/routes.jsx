import loadable from '@loadable/component';
// import React from 'react';
// import DashboardHeader from './DashboardHeader';

const Main = loadable(() => import(/* webpackChunkName: "dasboard-main" */ './Main'));
const Activity = loadable(() => import('./Activity'));
const DashboardHeader = loadable(() => import('./DashboardHeader'));
const Overlays = loadable(() => import('./Overlays'));
const Account = loadable(() => import('./Account'));
const Themes = loadable(() => import('./Themes'));
const Profile = loadable(() => import('./Profile'));
// const Header = loadable(() => import('./Header'));


// import Main from './Main';
// import Activity from './Activity';
// import Overlays from './Overlays';
// import Account from './Account';
// import Themes from './Themes';
// import Profile from './Profile';

const routes = [
    {
        path: '/dashboard',
        component: DashboardHeader,
        // render: DashboardHeader,
        // exact: true,
        key: 'DashboardHeader'
    },
    {
        path: '/dashboard',
        component: Main,
        exact: true,
        key: 'dash'
    },
    {
        path: '/dashboard/overlays',
        component: Overlays,
        key: 'dashboard/overlays'
    },
    {
        path: '/dashboard/Activity',
        component: Activity,
        key: 'dashboard/Activity'
    },
    {
        path: '/dashboard/account',
        component: Account,
        key: 'dasboard/accoundt'
    },
    {
        path: '/dashboard/themes',
        component: Themes,
        key: 'dasboard/Themes'
    },
    {
        path: '/dashboard/profile',
        component: Profile,
        key: 'dasboard/profile'
    }
];

export default routes;
