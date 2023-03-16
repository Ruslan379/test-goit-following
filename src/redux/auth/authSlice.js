import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    refreshUser,
    changeAvatar,
    getBalanceIsNotNewUser,
    updateBalance,
    changeIsNotNewUser
} from './authOperations';




const initialState = {
    // user: { name: null, email: null },
    user: { name: null, email: null, avatarURL: null },
    balance: 0,
    token: null,
    isNotNewUser: true,
    isLoggedIn: false,
    isRegistrIn: false, //? for Kapu$ta
    isRefreshing: false,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        //! register
        [register.pending](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.isRefreshing = true;
            state.error = null;
        },
        [register.fulfilled](state, { payload }) {
            state.user = payload.newUser;
            // state.token = payload.token; //? НЕ НАДО для Kapu$ta:
            state.token = null; //? for Kapu$ta
            // state.isLoggedIn = true; //? НЕ НАДО для Kapu$ta:
            state.isLoggedIn = false; //? for Kapu$ta
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [register.rejected](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = payload;
        },

        //! logIn
        [logIn.pending](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = true;
            state.error = null;
        },
        [logIn.fulfilled](state, { payload }) {
            // console.log("logIn.fulfilled --> payload.user:", payload.user); //!
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [logIn.rejected](state, { payload }) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.error = payload;
        },

        //! logOut
        [logOut.pending](state) {
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = null;
        },
        [logOut.fulfilled](state) {
            // state.user = { name: null, email: null };
            state.user = { name: null, email: null, avatarURL: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRegistrIn = false; //? for Kapu$ta
            state.error = null;
        },
        [logOut.rejected](state, { payload }) {
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.error = payload;
        },

        //! refreshUser
        [refreshUser.pending](state) {
            state.isRefreshing = true;
            state.error = null;
        },
        [refreshUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [refreshUser.rejected](state, { payload }) {
            state.isRefreshing = false;
            state.token = null; //??
            state.error = payload;
        },

        //! changeAvatar
        [changeAvatar.pending](state, { payload }) {
            // state.user.avatarURL = null;
            // state.isLoggedIn = false;
            state.isRefreshing = true;
            state.error = null;
        },
        [changeAvatar.fulfilled](state, { payload }) {
            console.log("changeAvatar.fulfilled --> payload:", payload); //!
            state.user.avatarURL = payload;
            // state.token = payload.token;
            state.isLoggedIn = true;
            state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [changeAvatar.rejected](state, { payload }) {
            // state.user = { name: null, email: null, avatarURL: null };
            // state.token = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = payload;
        },

        //! ПОЛУЧИТЬ баланс пользователя
        [getBalanceIsNotNewUser.pending](state, { payload }) {
            // state.isRefreshing = true; //! Зацикливается
            state.error = null;
        },
        [getBalanceIsNotNewUser.fulfilled](state, { payload }) {
            console.log("getBalanceIsNotNewUser.fulfilled --> payload:", payload); //!
            state.balance = payload; //! old
            state.balance = payload.balance;
            state.isNotNewUser = payload.isNotNewUser;
            // state.user.balance = payload;
            // state.isLoggedIn = true;
            // state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [getBalanceIsNotNewUser.rejected](state, { payload }) {
            // state.user = { name: null, email: null, avatarURL: null };
            // state.token = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = payload;
        },

        //! ИЗМЕНИТЬ баланс пользователя
        [updateBalance.pending](state, { payload }) {
            state.isRefreshing = true;
            state.error = null;
        },
        [updateBalance.fulfilled](state, { payload }) {
            console.log("updateBalance.fulfilled --> payload:", payload); //!
            state.balance = payload;
            // state.isLoggedIn = true;
            // state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [updateBalance.rejected](state, { payload }) {
            // state.user = { name: null, email: null, avatarURL: null };
            // state.token = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = payload;
        },
        //! ИЗМЕНИТЬ статус  пользователя --> user.isNotNewUser: false (если balanceNew === 0)
        [changeIsNotNewUser.pending](state, { payload }) {
            state.isRefreshing = true;
            state.error = null;
        },
        [changeIsNotNewUser.fulfilled](state, { payload }) {
            console.log("isNotNewUser.fulfilled --> payload:", payload); //!
            state.isNotNewUser = payload;
            // state.isLoggedIn = true;
            // state.isRegistrIn = true; //? for Kapu$ta
            state.isRefreshing = false;
            state.error = null;
        },
        [changeIsNotNewUser.rejected](state, { payload }) {
            // state.user = { name: null, email: null, avatarURL: null };
            // state.token = null;
            // state.isLoggedIn = false;
            state.isRefreshing = false;
            state.error = payload;
        },
    },
});

export const authReducer = authSlice.reducer;
