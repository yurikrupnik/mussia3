import React from 'react';
import PropTypes from 'prop-types';

const Stam = (props) => {
    const { children } = props;
    return (
        <div>
            <h2>stam ass</h2>
            {children}
        </div>
    );
};


Stam.defaultProps = {
    children: null
};

Stam.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ])
};

export default Stam;
