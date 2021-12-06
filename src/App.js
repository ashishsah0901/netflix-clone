import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Homescreen from "./components/homescreen/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/loginscreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Nav from "./components/nav/Nav";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "./firebase";
import Profile from "./components/profile/Profile";
import { doc, getDoc } from "@firebase/firestore";
import { setUserImage } from "./features/appSlice";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        id: authUser.uid,
                        email: authUser.email,
                    })
                );
                getDoc(doc(db, "users", authUser.email)).then((data) => {
                    dispatch(setUserImage(data.data().userImage));
                });
            } else {
                dispatch(logout());
            }
        });
        return () => {
            unSubscribe();
        };
    }, [dispatch]);
    return (
        <div className="app">
            <Router>
                <Nav isLoggedIn={!user ? false : true} />
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
                        <Route exact path="/" element={<Homescreen />} />
                        <Route exact path="/profile" element={<Profile />} />
                    </Routes>
                )}
                <Footer />
            </Router>
        </div>
    );
}

export default App;
