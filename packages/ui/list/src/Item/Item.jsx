import React from 'react';
import PropTypes from 'prop-types';
import styles from '../list.module.scss';

const Item = (props) => {
    const { item } = props;
    return (
        <div
            // key={v._id} // eslint-disable-line
            className={styles.root}
        >
            <div>
                {/* eslint-disable-next-line */}
                {item._id}
            </div>
        </div>
    );
};

Item.defaultProps = {
    // data: []
};

Item.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired
    }).isRequired
    // data: PropTypes.arrayOf(PropTypes.shape({
    //     title: PropTypes.string,
    //     context: PropTypes.string,
    // }))
};

export default Item;
