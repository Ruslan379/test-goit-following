import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';


// import { deleteTransaction } from 'redux/transaction/transactionOperations.js'; //!!!!!
import { selectLoadingTransactions } from 'redux/transaction/transactionSelectors.js';

// import { Spinner } from 'components/Spinner/Spinner';


//! Модальное окно
import { ModalTransactionLDelete } from 'components/ModalTransactionLDelete/ModalTransactionLDelete.jsx';
import { ModalTransactionLDeleteWindow } from 'components/ModalTransactionLDeleteWindow/ModalTransactionLDeleteWindow.js';

import css from './TransactionListItem.module.css';



export const TransactionListItem = ({ id, date: currentFullDate, transactionsType, description, category, sum }) => {
    // const dispatch = useDispatch(); //!!!!!

    // const [date, time] = currentFullDate.split(" ");
    const [date] = currentFullDate.split(" ");
    console.log("TransactionListItem ==> date:", date);
    // console.log("TransactionListItem ==> time:", time);


    //! Модальное окно
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    }


    const isLoading = useSelector(selectLoadingTransactions);
    console.log("TransactionListItem ==> isLoading:", isLoading); //!


    // const handleDeleteQuestion = () => {
    //     toggleModal();
    //     // dispatch(deleteTransaction(id)); //!!!!!
    // };




    return (
        <>
            <li className={css.TransactionListItem}>
                <p className={css.TransactionListItemText}>
                    {date}
                </p>
                <p className={css.TransactionListItemText}>
                    {description}
                </p>
                <p className={css.TransactionListItemText}>
                    {category}
                </p>
                <p
                    // className={css.TransactionListItemTextSum} 
                    className={
                        (transactionsType === "expenses")
                            ?
                            css.TransactionListItemTextSumExpenses
                            :
                            css.TransactionListItemTextSumIncome
                    }
                >
                    {/* {-sum} */}
                    {(transactionsType === "expenses") ? - sum : sum}
                </p>

                <button
                    type="button"
                    className={css.ContactListDeleteBtn}
                    onClick={toggleModal}
                    // onClick={() => deleteContact(id)}
                    disabled={isLoading}
                >
                    Delete
                    {/* {isLoading ? [<Spinner size="18" />, " Deleting..."] : "Delete"} */}
                </button>
            </li>

            {/* //! Модальное окно */}
            {showModal && (
                <ModalTransactionLDelete onClose={toggleModal}>
                    <ModalTransactionLDeleteWindow
                        id={id}
                        toggleModal={toggleModal}
                    />
                </ModalTransactionLDelete>
            )}
        </>
    );
};

TransactionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    transactionsType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
};
