import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './mainButton.scss';

const MainButton = (props) => {
    const { children } = props;
    return (
        <Button
            className={styles.rr}
            classes={{
                root: styles.rr
            }}
        >
            {children}
        </Button>
    );
};

MainButton.defaultProps = {
    children: null
};

MainButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]),
};

export default MainButton;
