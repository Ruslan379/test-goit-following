import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTransaction } from 'redux/transaction/transactionOperations.js';
import { selectLoadingTransactions } from 'redux/transaction/transactionSelectors.js';
import { Loader } from 'components/Loader/Loader';

import css from './ModalTransactionLDeleteWindow.module.css';

//------------------------------------------------------------------------------------------------------------------
export const ModalTransactionLDeleteWindow = ({ id, toggleModal }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoadingTransactions);
    console.log("ModalTransactionLDeleteWindow ==> isLoading:", isLoading); //!

    const handleDelete = () => {
        dispatch(deleteTransaction(id)); //!!!!!
        toggleModal();
    };




    return (
        <>
            {isLoading && <Loader />}

            <div className={css.modalWindow}>

                <p className={css.modalTitle}>Are you sure?</p>

                <button className={css.modalBtnYes}
                    type='button'
                    onClick={handleDelete}
                >
                    YES
                </button>

                <button
                    className={css.modalBtnNo}
                    type='button'
                    onClick={toggleModal}
                >
                    NO
                </button>
            </div>
        </>
    );
}

ModalTransactionLDeleteWindow.propTypes = {
    id: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};


