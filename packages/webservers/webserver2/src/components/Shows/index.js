import Loadable from '../Loadable';
// import Shows from './Shows';

const Shows = Loadable({
    loader: () => import(/* webpackChunkName: "shows" */ './Shows'),
});

export default Shows;
