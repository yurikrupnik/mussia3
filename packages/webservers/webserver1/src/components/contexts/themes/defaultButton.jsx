import React from 'react';
import PropTypes from 'prop-types';

const DefaultConsumer = (props) => {
    const { toggleTheme } = props;
    return (
        <div>
            <button type="button" onClick={toggleTheme}>
                Toggle
            </button>
        </div>
    );
};

DefaultConsumer.propTypes = {
    theme: PropTypes.shape({}).isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default DefaultConsumer;
