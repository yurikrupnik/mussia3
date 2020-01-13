import React from 'react';
import Button from '@mussia/button';
import List from '@mussia/list';
import MButton from '@material-ui/core/Button';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Tooltip from '../Tooltip';
//
// const darkStyles = makeStyles({
//     tooltip: {
//         color: 'blue',
//         backgroundColor: 'yellow',
//         fontSize: '20px'
//     }
// });
const data = [
    {
        _id: 'a',
    },
    {
        _id: 'b',
    }
];
const Projects = () => (
    <div>
        <h2>
            Projects
        </h2>
        <Button href="void 0;" onClick={() => {}}>get projects</Button>
        <MButton href="void 0;" onClick={() => {}}>MButton</MButton>
        <List data={data} />
    </div>
);

export default Projects;
