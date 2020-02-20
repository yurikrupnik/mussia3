import loadable from '@loadable/component';
// import React from 'react';
// import Leaderboard from './Leaderboard';
// import ProfileMain from './ProfileMain';
// import ProfileUserName from './ProfileUserName';
// import Header from '../../Header/ProfileHeader';

const Header = loadable(() => import('../../Header/ProfileHeader'));
const Leaderboard = loadable(() => import('./Leaderboard'));
const ProfileMain = loadable(() => import('./ProfileMain'));
const ProfileUserName = loadable(() => import('./ProfileUserName'));

const routes = [
    {
        path: '/dashboard/profile',
        component: Header,
        key: 'profile/je',
        // exact: true
    },
    {
        path: '/dashboard/profile',
        component: ProfileMain,
        key: 'profile',
        // exact: true
    },
    {
        path: '/dashboard/profile/:username',
        component: ProfileUserName,
        key: 'profile/username',
        // exact: true
    },
    {
        path: '/dashboard/profile/:username/leaderboard',
        component: Leaderboard,
        key: 'profile/username/leaderboard',
        // exact: true
    }
];

export default routes;
