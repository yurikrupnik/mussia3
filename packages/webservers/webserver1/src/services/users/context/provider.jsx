import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import context from './context';
import { host, port } from '../../../config';

const api = {
    provider: 'users',
    getData(params) {
        return axios.get(`${host}:${port}/api/users`, { params })
            .then((res) => res.data)
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};


class UsersProvider extends React.Component {
    static provider() {
        return api.provider;
    }

    constructor(props, c) {
        super(props, c);
        this.state = {
            data: [
                {
                    _id: '1'
                },
                {
                    _id: '2'
                }
            ],
            loading: false,
            selected: null,
            lastFetch: ''
        };
        this.fetch = this.fetch.bind(this);
        this.toggleCallback = this.toggleCallback.bind(this);
    }

    fetch(params, cb) {
        this.setState(
            ((prevState) => ({ loading: !prevState.loading })),
            this.toggleCallback(params, cb)
        );
    }

    toggleCallback(params, cb) {
        // const { api } = this.props;
        return () => api.getData(params)
            .then((data) => {
                this.setState((prevState) => ({
                    data,
                    loading: !prevState.loading
                }), cb);
            })
            .catch((error) => {
                this.setState((prevState) => ({
                    error,
                    loading: !prevState.loading
                }));
            });
    }

    render() {
        const { children } = this.props;
        return (
            <context.Provider value={{
                ...this.state,
                fetch: this.fetch
            }}
            >
                {children}
            </context.Provider>
        );
    }
}

UsersProvider.propTypes = {
    children: PropTypes.element.isRequired,
    // api: PropTypes.shape({
    //     fetch: PropTypes.func
    // }).isRequired
};

export default UsersProvider;
