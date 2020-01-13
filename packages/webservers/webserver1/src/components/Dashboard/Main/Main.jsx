import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Chip from '@material-ui/core/Chip';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import useTheme from '@material-ui/core/styles/useTheme';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import LinkTab from '@material-ui/core/LinkTab';
import Typography from '@material-ui/core/Typography';
// import styled, {withTheme} from 'styled-components';


// import Router from '../../Router';

function TabPanel(props) {
    const {
        children, value, index, ...other
    } = props;

    console.log('other', other); // eslint-disable-line
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

TabPanel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
};

// function a11yProps(index) {
//     return {
//         id: `wrapped-tab-${index}`,
//         'aria-controls': `wrapped-tabpanel-${index}`,
//     };
// }
//
const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.anotherColor.main,
    },
}));
//
//
// const Div = styled.div`
//     background: green;
//     color: ${props => {
//     console.log(props)
//         return 'blue'
// }};
// `;

const pageStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.backdrop
    }
}));

const Page = (props) => {
    const { children } = props;
    const s = pageStyles();
    return (
        <Card classes={{
            root: s.root
        }}
        >
            {children}
        </Card>
    );
};

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]).isRequired
};


function DashboardMain() {
    const theme = useTheme();
    const usedStyles = useStyles();
    // console.log(theme);
    // console.log(theme.background ? theme.background : '');
    // const classes = useStyles();
    // console.log('theme', theme);
    // console.log('usedStyles', usedStyles);
    // const { history } = props;
    // const [value, setValue] = React.useState(2);
    //
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    return (
        <Container>
            <Page>
                <div>
                    children of page!
                </div>
            </Page>
            <h4>
                hello from dashboard
            </h4>
            <Grid container spacing={10}>
                <Hidden xsUp>
                    <Grid item xs>
                        <Paper className={theme.paper}>xsUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs>
                        <Paper className={theme.paper}>smUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs>
                        <Paper className={theme.paper}>mdUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid item xs>
                        <Paper className={theme.paper}>lgUp</Paper>
                    </Grid>
                </Hidden>
                <Hidden xlUp>
                    <Grid item xs>
                        <Paper className={theme.paper}>xlUp</Paper>
                    </Grid>
                </Hidden>
            </Grid>
            <Card>
                <CardContent>
                    <Typography
                        classes={{
                            root: usedStyles.root
                        }}
                    >
                        Word of the Day
                    </Typography>
                    <Typography color="textPrimary" gutterBottom>
                        Word of the Day1
                    </Typography>
                    <Typography variant="h5" component="h2">
                        be nev lent
                    </Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography component="p">
                        well meaning and kindly.
                        <br />
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button variant="contained" color="default">
                        Toggle Theme Type
                    </Button>
                </CardActions>
            </Card>
            <div>
                <div>lo</div>
                <Card>
                    lol
                </Card>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {}}
                >
                    part channel
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {}}
                >
                    part channel
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {}}
                >
                    part channel
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {}}
                    color="primary"
                >
                    create
                </Button>
            </div>
            <NavLink
                to="/dashboard/overlays"
                // onClick={toggleOpen}
                // className={styles.navLink}
                // activeClassName={styles.active}
            >
                dashboard
            </NavLink>
        </Container>
    );
}

export default DashboardMain;
