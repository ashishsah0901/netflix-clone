import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userImage: null,
    signIn: false,
    registerEmail: "",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUserImage: (state, action) => {
            state.userImage = action.payload;
        },
        setSignIn: (state, action) => {
            state.signIn = action.payload;
        },
        setRegisterEmail: (state, action) => {
            state.registerEmail = action.payload;
        },
    },
});

export const { setSignIn, setRegisterEmail, setUserImage } = appSlice.actions;

export const selectUserImage = (state) => state.app.userImage;
export const selectSignIn = (state) => state.app.signIn;
export const selectRegisterEmail = (state) => state.app.registerEmail;

export default appSlice.reducer;
