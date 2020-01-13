import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import styles from './styles.scss';

const DefaultConsumer = (props) => {
    const {
        render, history, location, match, staticContext
    } = props;
    const users = React.useContext(Context);
    const getData = React.useCallback(() => {
        users.fetch();
    }, []);

    if (typeof render === 'function') {
        return render(Object.assign({}, { // eslint-disable-line
            history,
            location,
            match,
            staticContext
        }, { users }));
    }

    return (
        <div>
            <h2 className={styles.root}>
                Default consumer
            </h2>
            <button type="button" onClick={getData}>getData</button>
            {Array.isArray(users.data) && users.data.map((user) => (
                <div key={user._id}>{user.name}</div> // eslint-disable-line
            ))}
        </div>
    );
};

DefaultConsumer.defaultProps = {
    render: null,
    staticContext: undefined
};

DefaultConsumer.propTypes = {
    render: PropTypes.func,
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired,
    staticContext: PropTypes.shape({})
    // routerProps: PropTypes.shape({}).isRequired,
};

export default DefaultConsumer;
