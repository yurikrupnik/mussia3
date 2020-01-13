import loadable from '@loadable/component';

const Menu = loadable(() => import('./Menu'));
const Channels = loadable(() => import('./Channels'));
const Import = loadable(() => import('./Import'));
const Integration = loadable(() => import('./Integration'));
const Security = loadable(() => import('./Security'));
const Redemptions = loadable(() => import('./Redemptions'));

const routes = [
    {
        path: '/dashboard/account',
        component: Menu,
        key: 'Meddddsnu'
    },
    {
        path: '/dashboard/account/channels',
        component: Channels,
        label: 'channels',
        key: 'dashboard/account/asd'
    },
    {
        path: '/dashboard/account/import',
        component: Import,
        label: 'import',
        key: '/dashboard/account/import'
    },
    {
        path: '/dashboard/account/integration',
        component: Integration,
        label: 'integration',
        key: 'dashboardds/integrataaion'
    },
    {
        path: '/dashboard/account/security',
        component: Security,
        label: 'security',
        key: 'dashboardds/security'
    },
    {
        path: '/dashboard/account/redemptions',
        component: Redemptions,
        label: 'my redemptions',
        key: 'dashboardds/redemptions'
    }
];

export default routes;
