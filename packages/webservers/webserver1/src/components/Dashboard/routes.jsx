import loadable from '@loadable/component';
// import React from 'react';
import DashboardHeader from './DashboardHeader';
import Main from './Main';
// import Activity from './Activity';
// import Overlays from './Overlays';
// import Account from './Account';
// import Themes from './Themes';
// import Profile from './Profile';

// const Main = loadable(() => import(/* webpackChunkName: "dasboardDDdain" */ './Main'));
// const DashboardHeader = loadable(() =>
// import(/* webpackChunkName: "DashboardHeader" */ './DashboardHeader'));
const Activity = loadable(() => import(/* webpackChunkName: "Activity-main" */ './Activity'));
const Overlays = loadable(() => import(/* webpackChunkName: "Overlays" */'./Overlays'));
const Account = loadable(() => import(/* webpackChunkName: "Account" */ './Account'));
const Themes = loadable(() => import(/* webpackChunkName: "Themes" */ './Themes'));
const Profile = loadable(() => import(/* webpackChunkName: "Profileaaa" */ './Profile'));


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
