import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import { selectUserImage, setSignIn } from "../../features/appSlice";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const { isLoggedIn } = props;
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const userImage = useSelector(selectUserImage);

    const listener = () => {
        if (window.scrollY > 300) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const signIn = () => {
        dispatch(setSignIn(true));
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, [show]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <Link to="/">
                    <img
                        className="nav_logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                </Link>
                {isLoggedIn && (
                    <div className="nav_options">
                        <p>Home</p>
                        <p>Trending</p>
                        <p>Top Rated</p>
                        <p>Action</p>
                        <p>Comedy</p>
                        <p>Horror</p>
                        <p>Romance</p>
                        <p>Documentary</p>
                    </div>
                )}
                {isLoggedIn ? (
                    <Link to="/profile">
                        <img className="nav_avatar" src={userImage} alt="" />
                    </Link>
                ) : (
                    <button onClick={signIn} className="nav_loginButton">
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Nav;
