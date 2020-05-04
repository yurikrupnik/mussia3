import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// import Cookie from 'js-cookie';
import Context from './context';

const AuthProvider = (props) => {
    const { children } = props;
    console.log('var x = document.cookie;', global.document)
    // console.log('global.window.appData', global.window.appData)
    // const [session, setSession] = useState(global.window.appData.session || global.window.cookie);
    // const [user] = useState(global.window.appData);
    // const isLogged = useMemo(Boolean.bind(null, session), [session]);

    return (
        <Context.Provider
            value={{
                // isLogged,
                // setSession,
                // user
            }}
        >
            {children}
        </Context.Provider>
    );
};

AuthProvider.defaultProps = {
    // session: ''
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
    // session: PropTypes.string
};

export default AuthProvider;
