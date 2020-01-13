import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import styles from '../list.module.scss';

const Div = styled.div`
     color: mediumvioletred;
`;
const Item = (props) => {
    const { item } = props;
    return (
        <Div>
            <div>
                {/* eslint-disable-next-line */}
                {item._id}
            </div>
        </Div>
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
