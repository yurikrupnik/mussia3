
// import React from 'react';
import Brands from '../Brands';
import Header from '../Header';
import Root from '../Root';
import Dashboard from '../Dashboard';
import Careers from '../Careers';
import Dreamteam from '../Dreamteam';
import Groundcontrol from '../Groundcontrol';
import Register from '../Register';
import ChatRoom from '../ChatRoom';
// import MobxMovies from '../MobxMovies';

const routes = [
    {
        path: '/',
        component: Header,
        key: 'root',
        // exact: true
    },
    {
        path: '/',
        component: Root,
        key: 'main',
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        key: 'das'
    },
    {
        path: '/brands',
        component: Brands,
        key: 'brands'
    },
    {
        path: '/careers',
        component: Careers,
        key: 'careers'
    },
    {
        path: '/dreamteam',
        component: Dreamteam,
        key: 'dreamteam',
        // exact: true
    },
    {
        path: '/groundcontrol',
        component: Groundcontrol,
        key: 'Shows',
        // exact: true
    },
    // {
    //     path: '/profile/:username',
    //     component: () => (
    //         <div>
    //             profile username
    //         </div>
    //     ),
    //     key: 'profile/username',
    //     // exact: true
    // },
    // {
    //     path: '/profile/:username/leaderboard',
    //     component: () => (
    //         <div>
    //             leaderboard
    //         </div>
    //     ),
    //     key: 'profile/username/leaderboard',
    //     // exact: true
    // },
    {
        path: '/register',
        component: Register,
        key: 'Register',
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'Chat',
    },
    // {
    //     path: '/shows/:id',
    //     component: (props) => {
    //         const { match } = props; // eslint-disable-line
    //         const { params } = match; // eslint-disable-line
    //         const { id } = params; // eslint-disable-line
    //         return (
    //             <div>
    //                 {id}
    //             </div>
    //         );
    //     },
    //     key: 'project'
    // }
];

export default routes;
