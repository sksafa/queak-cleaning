import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App'
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import logo from '../../image/logo-2.png'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handelGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <section className="loginBody">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 flexbox">
                        <div className="loginSection">
                            <div className="buttonSection">
                                <img src={logo} alt="" /><br/>
                                <button className="loginButton" onClick={handelGoogleSignIn}>Google Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;