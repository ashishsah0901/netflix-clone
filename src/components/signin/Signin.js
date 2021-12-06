import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRegisterEmail } from "../../features/appSlice";
import "./signin.css";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth, db, provider } from "../../firebase";
import { login } from "../../features/userSlice";
import { doc, setDoc } from "@firebase/firestore";

const Signin = () => {
    const registeredEmail = useSelector(selectRegisterEmail);
    const [email, setEmail] = useState(registeredEmail);
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                signInSuccess(authUser);
            })
            .catch((err) => alert(err.message));
    };
    const sign = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                signInSuccess(authUser);
            })
            .catch((err) => alert(err.message));
    };
    const googleSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((authUser) => {
                signInSuccess(authUser);
            })
            .catch((err) => alert(err.message));
    };
    const signInSuccess = (authUser) => {
        dispatch(
            login({
                id: authUser.uid,
                email: authUser.email,
            })
        );
        setDoc(doc(db, "users", email), {
            number: 1,
            userImage:
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
        });
    };
    return (
        <div className="signin">
            <form>
                <h1>Sign In</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={sign}>
                    Sign In
                </button>
                <h4>
                    <span className="signin_registerMessage">
                        New to Netflix?
                    </span>{" "}
                    <span className="signin_register" onClick={signup}>
                        Sign up now.
                    </span>
                </h4>
                <button type="button" onClick={googleSignIn}>
                    Sign in with Google
                </button>
            </form>
        </div>
    );
};

export default Signin;
