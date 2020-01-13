import React from 'react';
import PropTypes from 'prop-types';
import List from '@mussia/list';
import Button from '@mussia/button';
import styles from './styles.scss';

const Users = (props) => {
    const { users } = props;
    const { data, fetch } = users;
    const getData = React.useCallback(() => fetch(), []);
    return (
        <div>
            <h2 className={styles.root}>
                I have been dynamicly rendered
            </h2>
            <Button type="button" onClick={getData}>Get users dynamic</Button>
            <List data={data} />
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.shape({
        fetch: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default Users;
