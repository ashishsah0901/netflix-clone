import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./loginscreen.css";
import {
    selectSignIn,
    setRegisterEmail,
    setSignIn,
} from "../../features/appSlice";
import { useSelector } from "react-redux";
import Signin from "../signin/Signin";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const login = useSelector(selectSignIn);
    const sign = (e) => {
        e.preventDefault();
        dispatch(setRegisterEmail(email));
        dispatch(setSignIn(true));
    };
    return (
        <div className="loginscreen">
            <div className="loginscreen_gradient"></div>
            <div className="loginscreen_body">
                {login ? (
                    <Signin />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </h3>
                        <div className="loginscreen_input">
                            <form>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <button
                                    onClick={sign}
                                    className="loginscreen_getStarted"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginScreen;
