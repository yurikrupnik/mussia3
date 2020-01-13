import React from 'react';
import PropTypes from 'prop-types';
import MuButton from '@material-ui/core/Button';
import styles from './button.scss';

function Button(props) {
    const { children, onClick } = props;
    return (
        <MuButton
            {...props} // eslint-disable-line
            onClick={onClick}
            classes={{
                root: styles.root, // class name, e.g. `classes-nesting-root-x`
                label: styles.label // class name, e.g. `classes-nesting-label-x`
            }}
        >
            {children}
        </MuButton>
    );
}

Button.defaultProps = {
    children: null
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]),
    onClick: PropTypes.func.isRequired
};

export default Button;
