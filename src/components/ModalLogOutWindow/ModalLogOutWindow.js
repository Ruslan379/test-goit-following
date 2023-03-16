import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors.js';
import { Loader } from 'components/Loader/Loader';

import css from './ModalLogOutWindow.module.css';

//------------------------------------------------------------------------------------------------------------------
export const ModalLogOutWindow = ({ toggleModal }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoggedIn);
    // console.log("ModalTransactionLDeleteWindow ==> isLoading:", isLoading); //!

    const handleLogOut = () => {
        dispatch(logOut());
        toggleModal();
    };




    return (
        <>
            {!isLoading && <Loader />}

            <div className={css.modalWindow}>

                <p className={css.modalTitle}>Do you really want to leave?</p>

                <button className={css.modalBtnYes}
                    type='button'
                    onClick={handleLogOut}
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

ModalLogOutWindow.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};


