import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import MaTooltip from '@material-ui/core/Tooltip';
import styles from './tooltip.scss';

// const useStyles = makeStyles({
//     tooltip: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// });


function Tooltip(props) {
    const { placement, title, children } = props;
    return (
        <MaTooltip
            placement={placement}
            title={title}
            classes={{

                tooltip: styles.tooltip, // class name, e.g. `classes-nesting-root-x`
                // label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
        >
            {children}
        </MaTooltip>
    );
}

Tooltip.defaultProps = {
    classes: null,
    placement: 'bottom',
    title: 'default title'
};

Tooltip.propTypes = {
    classes: PropTypes.shape({}),
    /** Placement of the tooltip */
    placement: PropTypes.string,
    title: PropTypes.string,
    // title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};

export default Tooltip;
