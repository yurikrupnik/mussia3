import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MaterialTooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const defaultStyles = makeStyles(theme => ({ // eslint-disable-line
    tooltip: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: '14px',
        cursor: 'pointer'
    }
}));

const Tooltip = (props) => {
    const { children, classes } = props;
    return (
        <MaterialTooltip
            className={styles.root}
            classes={classes || defaultStyles()}
            {...props} // eslint-disable-line
        >
            {children}
        </MaterialTooltip>
    );
};

Tooltip.defaultProps = {
    classes: {},
    placement: 'bottom',
};

Tooltip.propTypes = {
    classes: PropTypes.shape({}),
    placement: PropTypes.string,
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};

export default Tooltip;
