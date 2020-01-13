import Loadable from '../Loadable';
// import Projects from './Projects';

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});

export default Projects;
