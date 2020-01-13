import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Redirect } from 'react-router-dom';

const currentRoutes = [
    {
        label: 'channels',
        to: '/dashboard/account/channels'
    },
    {
        label: 'import',
        to: '/dashboard/account/import'
    },
    {
        label: 'integration',
        to: '/dashboard/account/integration'
    },
    {
        label: 'security',
        to: '/dashboard/account/security'
    },
    {
        label: 'my redemptions',
        to: '/dashboard/account/redemptions'
    }
];

const AccountMenu = (props) => {
    const { location } = props;
    const { pathname } = location;
    const index = currentRoutes.findIndex((v) => v.to === pathname);
    if (index < 0) {
        return (<Redirect to={currentRoutes[0].to} />);
    }
    return (
        <Paper square>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                {
                    currentRoutes.map((v) => (
                        <Tab
                            key={v.label}
                            label={v.label}
                            component={Link}
                            to={v.to}
                        />
                    ))
                }
            </Tabs>
        </Paper>
    );
};

AccountMenu.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export default AccountMenu;
