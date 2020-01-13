import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Icon from '@material-ui/core/Icon';
import RadioIcon from '@material-ui/icons/Radio';
import Switch from '@material-ui/core/Switch';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import withTheme from '@material-ui/core/styles/withTheme';
// import useTheme from '@material-ui/core/styles/useTheme';
import { Context } from '../../contexts/themes';
import styles from './dashboard-header.scss';

const appRoutes = [
    {
        label: 'dashboard',
        url: '/dashboard'
    },
    {
        label: 'theme gallery',
        url: '/dashboard/themes'
    },
    {
        label: 'my overlays',
        url: '/dashboard/overlays'
    },
    {
        label: 'Activity feed',
        url: '/dashboard/Activity'
    },
    {
        label: 'profile page',
        url: '/dashboard/profile'
    },
    {
        label: 'tipping settings',
        url: '/dashboard/tipping-settings'
    },
    {
        label: 'revenue history',
        url: '/dashboard/tipping' // /list
    },
    {
        label: 'merch',
        url: '/dashboard/legendary-merch'
    },
    {
        label: 'modules',
        url: '/dashboard/bot-modules'
    }
];

const DashboardHeader = (props) => {
    // const {regularRoutes, toggleOpen, open} = props;
    const { location } = props;
    const { pathname } = location;
    // console.log(props)
    // console.log(pathname.includes('dashboard'))
    if (pathname.includes('/dashboard/profile')) {
        return null;
    }

    const theme = React.useContext(Context);
    // const materialThemeFromUseTheme = useTheme();
    // console.log('materialThemeFromUseTheme', materialThemeFromUseTheme);
    // const ss = useTheme();
    // console.log('ss', ss);
    // console.log('theme', theme);

    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);
    return (
        <div>
            <AppBar
                color="default"
                position="static"
                classes={{
                    root: styles.bar
                }}
            >
                <Toolbar>
                    <IconButton onClick={toggleOpen} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <RadioIcon />
                    <Button color="inherit" onClick={() => {}}>Login</Button>
                    <Switch
                        checked={theme.theme.palette.type === 'dark'}
                        onChange={theme.toggleType}
                        color="primary"
                    />

                    <FormControl>
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                            value={10}
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onClose={toggleOpen}
                classes={{
                    paper: styles.paper,
                    // modal: styles.paper,
                    // root: styles.paper
                }}
            >
                <div
                    style={{
                        width: '255px',
                        // background: 'red',
                        height: '100%'
                    }}
                >
                    <div>
                        <img
                            width={180}
                            height={38}
                            src="https://cdn.streamelements.com/assets/homepage/SE_logo_600x129px_user_dashboard%403x.png"
                            alt=""
                        />
                    </div>
                    {
                        appRoutes.map((item) => (
                            <div
                                key={item.label}
                            >
                                <NavLink
                                    to={item.url}
                                    onClick={toggleOpen}
                                    // className={styles.navLink}
                                    // activeClassName={styles.active}
                                >
                                    <MenuItem>
                                        {item.label}
                                    </MenuItem>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </Drawer>
        </div>
    );
};

DashboardHeader.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
    // regularRoutes: PropTypes.arrayOf(PropTypes.shape({
    //     label: PropTypes.string,
    //     url: PropTypes.string
    // })).isRequired,
    // toggleOpen: PropTypes.func.isRequired,
    // open: PropTypes.bool.isRequired,
};

export default React.memo(DashboardHeader);
