import React from 'react';
import PropTypes from 'prop-types';

// sasa.getAgeAndName()
// console.log('alina', alina);

const Lol = (props) => {
    const { data } = props;
    return (
        <div>
            List here
            {
                data.map((v) => (
                    <div>
                        {v._id} {/* eslint-disable-line */}
                    </div>
                ))
            }
        </div>
    );
};

Lol.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Lol;
