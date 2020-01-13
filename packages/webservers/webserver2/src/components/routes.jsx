// import Shows from './Shows';
import Login from './Login';
import Projects from './Projects';
import Users from './Users';
import usersRoute from '../services/users';

const routes = [
    {
        path: '/',
        component: Login,
        key: 'Login'
    },
    {
        path: '/projects',
        component: Projects,
        key: 'Projects'
    },

    usersRoute(),
    usersRoute(Users, '/more', 'More'),
];

export default routes;
