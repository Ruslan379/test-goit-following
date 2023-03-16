// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getAllTransactions } from 'redux/transaction/transactionOperations.js';
import { TransactionListItem } from '../TransactionListItem/TransactionListItem.js';
// import { selectAllTransactions } from 'redux/transaction/transactionSelectors.js';

import css from './TransactionList.module.css';




export const TransactionList = ({ transactions, transactionsType }) => {
    // export const TransactionList = ({ transactionsType }) => {
    //! Для reverse
    const [reverseSort, setReverseSort] = useState(false);
    // const [selectionByTransactionType, setSelectionByTransactionType] = useState([]);
    // const [selectionByTransactionTypeReverse, setSelectionByTransactionTypeReverse] = useState([]);

    //!
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllTransactions());
    // }, [dispatch]);

    // const transactions = useSelector(selectAllTransactions);
    console.log("TransactionList ==> transactions:", transactions); //!

    const transactionsExpenses = transactions.filter(transaction => transaction.transactionsType === "expenses");
    console.log("TransactionList ==> transactionsExpenses:", transactionsExpenses); //!

    const transactionsIncome = transactions.filter(transaction => transaction.transactionsType === "income");
    console.log("TransactionList ==> transactionsIncome:", transactionsIncome); //!

    let selectionByTransactionType = []
    if (transactionsType === "expenses") {
        selectionByTransactionType = transactionsExpenses
        // setSelectionByTransactionType(transactionsExpenses) //! Зацикливается
        //! Зацикливается
        // setSelectionByTransactionType(transactions.filter(transaction => transaction.transactionsType === "expenses"))
    }

    if (transactionsType === "income") {
        selectionByTransactionType = transactionsIncome
        // setSelectionByTransactionType(transactionsIncome) //! Зацикливается
        //! Зацикливается
        // setSelectionByTransactionType(transactions.filter(transaction => transaction.transactionsType === "income"))
    }

    // setSelectionByTransactionTypeReverse(selectionByTransactionType); //! Зацикливается

    const reverse = () => {
        setReverseSort(!reverseSort);
        // setReverseSort(selectionByTransactionType.reverse());
        console.log("TransactionList-reverse ==> reverseSort:", reverseSort); //!

        // selectionByTransactionType.reverse(); //! сортирует массив в обратном порядке
        // selectionByTransactionType = selectionByTransactionType.reverse();
        // console.log("TransactionList-reverse ==> selectionByTransactionType:", selectionByTransactionType); //!

        // setSelectionByTransactionTypeReverse(selectionByTransactionType)
        // setSelectionByTransactionTypeReverse(prevState => [...prevState, selectionByTransactionType])

        // const array = selectionByTransactionType.reverse()
        // console.log("TransactionList-reverse ==> array:", array); //!
        // await setSelectionByTransactionTypeReverse(array)
        // console.log("TransactionList-reverse ==> selectionByTransactionTypeReverse:", selectionByTransactionTypeReverse); //!
    }

    if (reverseSort) {
        selectionByTransactionType = selectionByTransactionType.reverse()
    }


    return (
        <>
            <div className={css.TransactionListHeader}>
                <p
                    className={css.TransactionListTextDate}
                    onClick={reverse}
                >
                    {reverseSort ? [<span>&#8659;&#160;</span>, "Date"] : [<span>&#8657;&#160;</span>, "Date"]}
                    {/* &#8693; Date */}
                </p>
                <p className={css.TransactionListText}>
                    Description
                </p>
                <p className={css.TransactionListText}>
                    Category
                </p>
                <p className={css.TransactionListText}>
                    Sum
                </p>
                <p className={css.TransactionListText}>
                    {/* <button
                        className={css.btnReverse}
                        onClick={reverse}
                    >
                        &lsaquo; Reverse Date &rsaquo;
                    </button> */}
                    {/* <button onClick={() => setSelectionByTransactionTypeReverse(selectionByTransactionType.reverse())}>Reverse</button> */}
                    {/* <button onClick={() => setSelectionByTransactionType(selectionByTransactionType.reverse())}>Reverse</button> */}
                </p>
            </div>

            <ul className={css.ContactList}>
                {selectionByTransactionType.map(({ _id, transactionsType, date, description, category, sum }) => (
                    <TransactionListItem
                        key={_id}
                        id={_id}
                        transactionsType={transactionsType}
                        date={date}
                        description={description}
                        category={category}
                        sum={sum}
                    />
                ))}
            </ul>
        </>
    );
};


TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired,
};