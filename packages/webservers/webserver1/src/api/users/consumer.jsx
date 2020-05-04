import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
// import DataContainer from '../dataContainer';

const UsersConsumer = ({ render }) => (
    <Consumer>
        {(props) => render(props)}
    </Consumer>
);

UsersConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default UsersConsumer;
