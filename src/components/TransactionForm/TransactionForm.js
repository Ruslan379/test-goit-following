// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

// import { Spinner } from 'components/Spinner/Spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';


// import { updateBalance } from 'redux/auth/authOperations.js'; //!!!!!
import { getBalanceIsNotNewUser } from 'redux/auth/authOperations';
import {
    addTransaction,
    // getAllTransactions
} from 'redux/transaction/transactionOperations.js'; //!!!!!

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';


import css from './TransactionForm.module.css';


//---------------------------------------------------------------------------------
export const TransactionForm = ({ balance, transactionsType }) => {
    const dispatch = useDispatch();

    //!!!!!
    // useEffect(() => {
    //     dispatch(getBalanceIsNotNewUser());
    // }, [dispatch]);

    //! ========================== console balance & isRefreshing ==========================
    const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
    const balanceUser = user.balance; //! тормозит
    console.log("TransactionForm ==> balanceUser:", balanceUser); //!
    console.log("TransactionForm ==> balanceAuth:", balanceAuth); //!
    console.log("TransactionForm ==> isRefreshingAuth:", isRefreshingAuth); //!

    const balance1 = useSelector(selectBalance);
    console.log("TransactionForm ==> balance1:", balance1); //!

    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("TransactionForm ==> isRefreshing:", isRefreshing); //!
    //! _________________________ console balance & isRefreshing _________________________


    //! currentFullDate
    // const currentFullDate = moment().format("DD-MM-YYYY");
    const currentFullDate = moment().format("DD.MM.YYYY hh:mm:ss");
    console.log("currentFullDate:", currentFullDate); //!

    //! currentDate
    const currentFullDateSplit = currentFullDate.split(" ");
    console.log("currentFullDateSplit:", currentFullDateSplit); //!

    const [currentDate, currentTime] = currentFullDate.split(" ");
    console.log("currentDate:", currentDate); //!
    console.log("currentTime:", currentTime); //!



    //! Преобразование даты в число для сортировки в таблицах транзакций
    const currentFullDateSplitDate = currentDate.split(".");
    currentFullDateSplitDate.reverse();
    console.log("currentFullDateSplitDate:", currentFullDateSplitDate); //!
    const currentFullDateSplitTime = currentTime.split(":");
    console.log("currentFullDateSplitTime:", currentFullDateSplitTime); //!

    const currentFullDateSplitAll = [...currentFullDateSplitDate, ...currentFullDateSplitTime];
    console.log("currentFullDateSplitAll:", currentFullDateSplitAll); //!

    let currentFullDateJoin = Number(currentFullDateSplitAll.join(""));
    console.log("currentFullDateJoin:", currentFullDateJoin); //!



    //! Submit FORM
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        //! Проверка даты на изменение
        // const date = form.elements.date.value;
        let date = currentFullDate
        if (form.elements.date.value !== currentDate) {
            date = form.elements.date.value
            console.log("TransactionForm ==> date:", date); //!
            //! Преобразование даты в число для сортировки в таблицах транзакций
            const dateSplit = date.split(".");
            dateSplit.reverse();
            console.log("TransactionForm ==> dateSplit:", dateSplit); //!
            currentFullDateJoin = Number(dateSplit.join("") + "000000");
            console.log("currentFullDateJoin:", currentFullDateJoin); //!
        };

        const description = form.elements.description.value;
        const category = form.elements.category.value;
        const sum = form.elements.sum.value;

        if (!description) {
            toast.warning(`Please enter a product description`);
            return;
        }
        if (category === "true") {
            toast.warning(`Please choose a product category`);
            return;
        }
        if (!sum) {
            toast.warning(`Please enter the transaction amount`);
            return;
        }
        if ((balance - sum) < 0) {
            toast.error(`Transaction NOT ALLOWED!!!\n Your expenses exceed your balance`);
            return;
        }

        const transaction = {
            transactionsType,
            // date: currentFullDate,
            date,
            sortDate: currentFullDateJoin,
            description,
            category,
            sum
        };

        console.log("transaction:", transaction); //!

        dispatch(addTransaction(transaction));

        if (transactionsType === "expenses") {
            toast.info(`Your Expenses transaction has been successfully added`);
        }
        if (transactionsType === "income") {
            toast.success(`Your Income transaction has been successfully added`);
        }
        form.reset();
        dispatch(getBalanceIsNotNewUser());
        // dispatch(getAllTransactions()); //! добавил для сортировки
        return;
    };



    return (
        <>
            <form
                className={css.Form}
                id="transactionForm"
                onSubmit={handleSubmit}
            >
                {/* //! DATE */}
                <label className={css.FormLabel}>
                    {/* DATE */}
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="date"
                        defaultValue={currentDate}
                    // blur={handleBlur}
                    // placeholder="Date"
                    // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                    // title="Вalance must be whole numbers (or decimal numbers)"
                    // required
                    // value={balance1}
                    // readonly
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>

                {/* //! DESCRIPTION */}
                <label className={css.FormLabel}>
                    {/* DESCRIPTION */}
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="description"
                        placeholder="Product description"
                    // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                    // title="Вalance must be whole numbers (or decimal numbers)"
                    // required
                    // readonly
                    // value={balance1}
                    // defaultValue={"Product description"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>

                {/* //! CATEGORY */}
                <label className={css.FormLabel}
                // for="productCategory"
                >
                    {/* Choose a Product category: */}
                </label>
                {/* <p className={css.selectText}> */}
                <select className={css.selectText}
                    id="productCategory"
                    // value={"Product category"}
                    // defaultValue={"Product category"}
                    name="category"
                    // placeholder="Product category"
                    form="transactionForm"
                // required
                >
                    {/* <option value="Product category" disabled>******</option> */}
                    {/* <option className={css.selectPlaceholder} disabled>Product category</option> */}
                    <option className={css.selectPlaceholder} value disabled selected>Product category</option>
                    <option value="Transport" disabled={transactionsType === "income"}>Transport</option>
                    <option value="Products" disabled={transactionsType === "income"}>Products</option>
                    <option value="Health" disabled={transactionsType === "income"}>Health</option>
                    <option value="Alcohol" disabled={transactionsType === "income"}>Alcohol</option>
                    <option value="Entertainment" disabled={transactionsType === "income"}>Entertainment</option>
                    <option value="Housing" disabled={transactionsType === "income"}>Housing</option>
                    <option value="Technique" disabled={transactionsType === "income"}>Technique</option>
                    <option value="Communal, communication" disabled={transactionsType === "income"}>Communal, communication</option>
                    <option value="Sports, hobbies" disabled={transactionsType === "income"}>Sports, hobbies</option>
                    <option value="Education" disabled={transactionsType === "income"}>Education</option>
                    <option value="Other" disabled={transactionsType === "income"}>Other</option>
                    <option value="Salary" disabled={transactionsType === "expenses"}>Salary</option>
                    <option value="Add.Income" disabled={transactionsType === "expenses"}>Add.Income</option>
                </select>
                {/* </p> */}

                {/* //! SUM */}
                <label className={css.FormLabel}>
                    {/* SUM */}
                    <input
                        className={css.FormInputSum}
                        // id="inputName"
                        // type="text"
                        type="text"
                        name="sum"
                        placeholder="0,00"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                    // focus
                    // style={{ color: "red" }}
                    // required
                    // readonly
                    // value={balance1}
                    // defaultValue={"0,00"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>

                {/* //! Кнопка submit FORM */}
                <button className={css.FormBtn}
                    type="submit"
                // disabled={isRefreshing}
                >
                    INPUT
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>

                {/* //! Кнопка очистки FORM */}
                <input className={css.FormBtn}
                    type="reset"
                    value="CLEAR"
                    form="transactionForm"
                // onChange={handleClearSubmit}
                />
            </form>

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





