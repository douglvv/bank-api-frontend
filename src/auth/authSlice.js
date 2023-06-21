import { createSlice } from "@reduxjs/toolkit";
const storedToken = localStorage.getItem('token');
const storedAccount = JSON.parse(localStorage.getItem('account'));

const initialState = {
    isLoggedIn: !!storedToken,
    token: storedToken || null,
    account: storedAccount || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.account = action.payload.account;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('account', JSON.stringify(action.payload.account));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.account = null;

            localStorage.setItem('token', null);
            localStorage.setItem('account', null);
        },
    },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
