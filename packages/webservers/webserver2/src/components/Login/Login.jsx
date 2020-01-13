import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

import { Formik } from 'formik';


function RenderInput(props) {
    const {
        field, form, fullWidth, label, multiline, rows
    } = props;

    const { errors } = form;
    const {
        name, value, onChange, onBlur
    } = field;
    return (
        <FormControl fullWidth={fullWidth} component="div">
            <TextField
                multiline={multiline}
                rows={rows}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors[name]}
            />
            {errors && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    );
}

RenderInput.defaultProps = {
    fullWidth: false,
    multiline: false,
    label: '',
    rows: 0,
};

RenderInput.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }).isRequired,
    form: PropTypes.shape({
        errors: PropTypes.shape({})
    }).isRequired,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    label: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};


const Context = React.createContext();

// const Provider = (props) => {
//     const login = React.useCallback((cb) => {
//         return Promise.resolve().then(cb);
//     }, []);
//     const logout = React.useCallback((cb, c) => {
//         return Promise.resolve().then(cb).catch(c);
//     }, []);
//     return (
//         <Context.Provider
//             value={{
//                 login
//             }}
//         >
//             {props.children}
//         </Context.Provider>
//     );
// }

const Login = () => {
    const authContext = React.useContext(Context);
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={() => {
                    authContext.login(() => {});
                }}
                render={(formProps) => {
                    console.log('formProps', formProps); // eslint-disable-line
                    const { values } = formProps;
                    const {
                        handleSubmit, handleChange, touched, handleBlur, isSubmitting, errors
                    } = formProps;
                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                admin
                            </button>
                        </form>
                    );
                }}
            />
        </div>
    );
};


export default Login;
