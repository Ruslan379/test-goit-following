import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';





//! axios defaults baseURL (возможно, это не надо, т.к. уже есть в authOperations.js)
// axios.defaults.baseURL = 'http://localhost:3033/api';
// axios.defaults.baseURL = 'https://contact-book-backend52.onrender.com/api';


//!!! GET @ /transactions
export const getAllTransactions = createAsyncThunk(
    'transactions/getAllTransactions',
    async (_, thunkAPI) => {
        try {
            const { data: { transactions } } = await axios.get('/transactions');
            // const { transactions } = data; //??  //???
            console.log("contacts/getAllTransactions == >data.transactions:", transactions);
            const transactionsReverse = await transactions.reverse();
            console.log("contacts/getAllTransactions == >transactionsReverse:", transactionsReverse);
            return transactions;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


//!!! POST @ /transactions
export const addTransaction = createAsyncThunk(
    'transactions/addTransaction',
    async (credentials, thunkAPI) => {
        console.log("transactions/addTransaction ==> credentials:", credentials); //!
        try {
            const { data } = await axios.post('/transactions', credentials);
            console.log("transactions/addTransaction ==> data:", data); //!
            console.log("transactions/addTransaction ==> data.transaction:", data.transaction);  //!
            console.log("transactions/transactions ==> data.transaction:", data.transactions);  //!
            // return data.transaction;
            return data;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 400" ? "Ошибка при создании контакта" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



//!!! DELETE @ /transactions/:transactionId
export const deleteTransaction = createAsyncThunk(
    'transactions/deleteTransaction',
    async (credentials, thunkAPI) => {
        try {
            console.log("transactions/deleteTransaction ==> credentials:", credentials); //!
            const { data } = await axios.delete(`/transactions/${credentials}`);
            console.log("transactions/deleteTransaction ==> data:", data); //!
            console.log("transactions/deleteTransaction ==> data.transactionId:", data.transactionId); //!
            return data.transactionId;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



//? PATCH @ /contacts/:id
export const editContact = createAsyncThunk(
    'contacts/editContact',
    // async ({ id, newName, newNumber }, thunkAPI) => { //! 1-й вариант
    // async ({ id: contactId, name, number }, thunkAPI) => { //! 2-й вариант
    async ({ id: contactId, name, phone }, thunkAPI) => { //! 2-й вариант
        // async (credentials, thunkAPI) => { //! 3-й вариант
        try {
            // console.log("contacts/editContact==>contactId:", contactId); //! 1-й и 2-й вариант
            // console.log("contacts/editContact==>name:", name); //! 2-й вариант
            // console.log("contacts/editContact==>number:", number); //! 2-й вариант
            // console.log("contacts/editContact==>credentials:", credentials); //! 3-й вариант
            // const response = await axios.patch(`/contacts/${id}`, { name: newName, number: newNumber }); //! 1-й вариант
            const { data } = await axios.patch(`/contacts/${contactId}`, { name, phone }); //! 2-й вариант
            // const response = await axios.patch(`/contacts/${credentials.id}`, { name: credentials.name, number: credentials.number }); //! 3-й вариант
            // console.log("editContact==>response.data", response.data); //!
            console.log("contacts/contacts/editContact ==> data:", data); //!
            console.log("contacts/contacts/editContact ==> data.contact:", data.contact); //!
            return data.contact;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 500" ? "Не удалось обновить контакт" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



//? GET @ /contacts - получить ВСЕ контакты с mockapi.io
export const fetchContactsFromMmockapiIo = createAsyncThunk(
    'contacts/fetchContactsFromMmockapiIo',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('https://6326c1ee70c3fa390f9bc51d.mockapi.io/contacts');
            // const { data } = await axios.get('http://localhost:3000/api/contacts'); //??
            // const { data } = await axios.get('http://192.168.0.3:3000/api/contacts'); //??
            console.log("contacts/fetchContactsFromMmockapiIo==>data:", data); //!
            console.log("contacts/fetchContactsFromMmockapiIo==>data.contacts:", data.contacts); //!
            return data;
            // return data.contacts; //??
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return rejectWithValue(error.message);
        }
    },
);

//? DELETE @ /contacts/:id - удалить контакт с mockapi.io по его id
export const deleteContactFromMmockapiIo = createAsyncThunk(
    'contacts/deleteContactFromMmockapiIo',
    async (contactId, thunkAPI) => {
        try {
            // console.log("contacts/deleteContactFromMmockapiIo==>contactId:", contactId); //!
            const user = await axios.get('/users/current');
            console.log("contacts/deleteContactFromMmockapiIo==>user:", user);
            console.log("contacts/deleteContactFromMmockapiIo==>user.data.user:", user.data.user.subscription);
            const rightToDdeletion = user.data.user.subscription;
            // Проверка пользователя на права УДАЛЕНИЯ
            if (rightToDdeletion === "business") {
                await axios.delete(`https://6326c1ee70c3fa390f9bc51d.mockapi.io/contacts/${contactId}`);
                return contactId;
            }
            toast.error(`${user.data.user.name} does not have permission to delete these contacts`, { position: "top-center", autoClose: 2000 });
            console.log(`У пользователя: ${user.data.user.name} нет прав на удаление этих контактов`);
            return;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
