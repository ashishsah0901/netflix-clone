import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { selectUser } from "../../features/userSlice";
import { selectUserImage, setUserImage } from "../../features/appSlice";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, onSnapshot, setDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import Planscreen from "../planscreen/Planscreen";

const Profile = () => {
    const usersAvatar = [
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c659933850498.56ba69ac2e080.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    ];
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const userImage = useSelector(selectUserImage);
    const [usersCount, setUsersCount] = useState(null);
    useEffect(() => {
        const unSubscribe = onSnapshot(doc(db, "users", user.email), (doc) => {
            setUsersCount(Array(doc.data().number).fill("1"));
        });
        return () => {
            unSubscribe();
        };
    }, [user.email]);
    const handleClick = (i) => {
        setDoc(
            doc(db, "users", user.email),
            { userImage: usersAvatar[i] },
            { merge: true }
        ).then(() => {
            dispatch(setUserImage(usersAvatar[i]));
        });
    };
    const addUser = () => {
        setDoc(
            doc(db, "users", user.email),
            {
                userImage: usersAvatar[usersCount.length],
                number: usersCount.length + 1,
            },
            { merge: true }
        ).then(() => {
            dispatch(setUserImage(usersAvatar[usersCount.length]));
        });
    };
    return (
        <div className="profile">
            <div className="profile_body">
                <div className="profile_users">
                    {usersCount?.map((_, i) => {
                        return (
                            <img
                                onClick={() => {
                                    handleClick(i);
                                }}
                                className="profile_active"
                                src={usersAvatar[i]}
                                alt=""
                            />
                        );
                    })}
                    {usersCount?.length < 4 && (
                        <img
                            onClick={() => {
                                addUser();
                            }}
                            className="profile_active"
                            src="https://www.pngkit.com/png/detail/115-1152626_png-lovely-design-ideas-plus-sign-clip-art.png"
                            alt=""
                        />
                    )}
                </div>
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img src={userImage} alt="" />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <h3>Plans</h3>
                            <Planscreen />
                            <button
                                onClick={() => signOut(auth)}
                                className="profile_signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
