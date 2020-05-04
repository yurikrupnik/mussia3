import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import api from '../api';

// const toggleLoading = (prevState) => ({ loading: !prevState.loading });
//
// const toggler = (setter, getter) => {
//     setter(!getter);
// };

const UsersProvider = (props) => {
    const { children } = props;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);

    const fetch = useCallback((params) => {
        setLoading(true);
        return api
            .fetch(params)
            .then((users) => {
                setData(users);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        // .then(setLoading.bind(null, !loading));
    }, []);
    return (
        <Context.Provider
            value={{
                loading,
                fetch,
                selected,
                data,
                setSelected
            }}
        >
            {children}
        </Context.Provider>
    );
};

UsersProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default UsersProvider;
