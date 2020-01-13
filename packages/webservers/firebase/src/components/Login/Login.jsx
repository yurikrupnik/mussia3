import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/firestore'; // eslint-disable-line
import 'firebase/storage'; // eslint-disable-line

// import firebase, {collection} from 'firebase/firestore';
import 'firebase/auth';
import { Formik, Field, Form } from 'formik';
import request from 'axios';
import { Input } from '@material-ui/core';

const firebaseConfig = {
    apiKey: 'AIzaSyDaUJ7GyEIr35qfLSuu6RAKL7YvD5zZevQ',
    authDomain: 'music-pzl.firebaseapp.com',
    databaseURL: 'https://music-pzl.firebaseio.com',
    projectId: 'music-pzl',
    storageBucket: 'music-pzl.appspot.com',
    messagingSenderId: '738703580147',
    appId: '1:738703580147:web:b3024fb238b12042a3d086',
    measurementId: 'G-9QSRBDFET2'
};

firebase.initializeApp(firebaseConfig);
// console.log('firebase', firebase.auth().onAuthStateChanged);
// console.log('auth', auth);
firebase.auth()
    .onAuthStateChanged((user) => {
        if (user) {
            console.log('has user'); // eslint-disable-line
        } else {
            console.log('has not user'); // eslint-disable-line
        }
    });

const db = firebase.firestore();
const storage = firebase.storage();


// const provider = new firebase.auth.GithubAuthProvider();

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


// const Context = React.createContext();

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
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('user:email');
const loginUser = () => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const { user } = result;
            console.log('result', result); // eslint-disable-line
            console.log('user', user, token); // eslint-disable-line
            //     return result.user.getIdToken().then(idToken => {
            //         // Session login endpoint is queried and the session cookie is set.
            //         // CSRF protection should be taken into account.
            //         // ...
            //         console.log('idToken', idToken);
            //         // const csrfToken = getCookie('csrfToken');
            //         // return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
            // });
            // retrn firebase.auth().signInWithCustomToken(token).catch(function(error) {
            //     console.log(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // });
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const { email } = error;
            // // The firebase.auth.AuthCredential type that was used.
            // const { credential } = error;
            console.log('error', error); // eslint-disable-line
            // ...
        });
    // return firebase.auth().signInWithEmailAndPassword(email, password);
};

function signOut() {
    firebase.auth()
        .signOut()
        .then((r) => {
            // Sign-out successful.
            console.log(r); // eslint-disable-line
        })
        .catch((error) => {
            console.log('error', error); // eslint-disable-line
            // An error happened.
        });
}

function getProjects() {
    db.collection('users')
        .get()
        .then((res) => {
            // console.log('docks response', res);
            const data = res.docs.map((v) => {
                console.log(v); // eslint-disable-line
                return v.data();
            });
            console.log('data', data); // eslint-disable-line
        })
        .catch((error) => {
            console.log(error.message); // eslint-disable-line
            console.log(error.stack); // eslint-disable-line
        });
}

function uploadFileToBucket(e) {
    // console.log(e.target.files);
    const files = Array.from(e.target.files);
    // const formData = new FormData(); // eslint-disable-line

    // console.log('formData', formData);
    // console.log('files', files);
    // files.forEach((file, i) => {
    //     formData.append(i, file)
    // });
    const ref = storage.ref(`files/${files[0].name}`);
    const tast = ref.put(files[0]);
    tast.on('state_changed', (snapshot) => {
        const precentage = snapshot.bytesTransferred / snapshot.totalBytes;
        console.log('precentage', precentage); // eslint-disable-line
    }, (error) => {
        console.log(error); // eslint-disable-line
    }, () => {
        console.log('completed uploading'); // eslint-disable-line
    });
}

function getA() {
    return request.get('/api/a', {
        headers: {
            Authorization: 'Bearer eeaed4a8e43f3476951564cecb0288404de70173'
        }
    })
        .then((res) => {
            console.log(res); // eslint-disable-line
        })
        .catch((error) => {
            console.log(error); // eslint-disable-line
        });
}

const Login = () => (
    <div>
        <Input type="file" onChange={uploadFileToBucket} />
        <Button onClick={getA}>
            get a
        </Button>
        <Button onClick={getProjects}>
            get Projects
        </Button>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values) => {
                loginUser(values.email, values.password);
                // authContext.login(() => {});
                // console.log('app', app);
                // console.log('firebase', firebase);
                // console.log('auth', auth);
                // firebase.auth().signInWithRedirect(provider)
                // request.post('/api/login', {
                // request.post('/api/login', {
                //     email: 'krupnik.yuri@gmmail.com',
                //     password: 'ludmila900',
                //     // headers: {
                //     //     'Authorization': 'Bearer 12345'
                //     // }
                // })
                // // request.get('/api/login')
                //     .then((res) => {
                //         console.log(res);
                //     })
                //     .catch((rerror) => {
                //         console.log(rerror);
                //     });
            }}
        >
            {(formProps) => {
                // console.log('formProps', formProps); // eslint-disable-line
                // const { values } = formProps;
                const {
                    handleSubmit, touched, isSubmitting, errors
                } = formProps;
                return (
                    <div>
                        <div>Register</div>
                        <Button onClick={signOut}>
                            signout
                        </Button>
                        <Form onSubmit={handleSubmit}>
                            <Field
                                component={RenderInput}
                                name="email"
                                type="email"
                                fullWidth
                            />
                            <Field
                                component={RenderInput}
                                name="password"
                                type="password"
                                fullWidth
                            />
                            {errors.email && touched.email && errors.email}
                            {errors.password && touched.password && errors.password}
                            <Button type="submit" disabled={isSubmitting}>
                                login
                            </Button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    </div>
);
export default Login;
