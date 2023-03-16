import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { changeIsNotNewUser, getBalanceIsNotNewUser, updateBalance } from 'redux/auth/authOperations.js';
// import { changeIsNotNewUser, refreshUser, updateBalance } from 'redux/auth/authOperations.js'; //! зацикливается
import { selectIsRefreshing, selectBalance, selecIsNotNewUser } from 'redux/auth/authSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';

// import { Spinner } from 'components/Spinner/Spinner';

//! Модальное окно
import { ModalNullBalance } from 'components/ModalNullBalance/ModalNullBalance.jsx';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ModalNullBalanceWindow } from 'components/ModalNullBalanceWindow/ModalNullBalanceWindow.js';

import css from './BalanceForm.module.css';



export const BalanceForm = ({ balance }) => {
    console.log("BalanceForm ==> ({BALANCE}):", balance); //!
    const dispatch = useDispatch();

    //! Модальное окно
    const [showModal, setShowModal] = useState(false);
    // const [newBalance, setNewBalance] = useState(0); //?...!
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        dispatch(getBalanceIsNotNewUser());
        // dispatch(refreshUser()); //! зацикливается
        // }, [dispatch]);
    });


    // const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
    // const balanceUser = user.balance; //! тормозит
    // console.log("BalanceForm ==> balanceUser:", balanceUser); //!
    // console.log("BalanceForm ==> balanceAuth:", balanceAuth); //!
    // console.log("BalanceForm ==> isRefreshingAuth:", isRefreshingAuth); //!

    const balanceNew = useSelector(selectBalance);
    console.log("BalanceForm ==> balanceNew:", balanceNew); //!
    console.log("BalanceForm ==> typeof balanceNew:", (typeof Number(balanceNew))); //!


    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("BalanceForm ==> isRefreshing:", isRefreshing); //!

    const NotNewUser = useSelector(selecIsNotNewUser);
    console.log("BalanceForm ==> isNotNewUser:", NotNewUser); //!




    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const balance = form.elements.balance.value;

        const isNotNewUser = true
        //! ИЗМЕНИТЬ статус  пользователя --> user.isNotNewUser: false (если balanceNew === 0)
        if (!balanceNew && !NotNewUser) {
            // dispatch(changeIsNotNewUser("isNewUser"))
            dispatch(changeIsNotNewUser({ isNotNewUser }))
        };
        //! ИЗМЕНИТЬ баланс пользователя
        dispatch(updateBalance({ balance }));
        toast.success(`Your balance has been successfully updated to ${balance} UAN`);
        form.reset();
        return;
    };



    return (
        <>
            <form
                className={css.Form}
                onSubmit={handleSubmit}
            >
                <label
                    className={css.FormLabel}
                >
                    Balance:&nbsp;&nbsp;&nbsp;
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="balance"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                        disabled={NotNewUser} //! пока не блокировать
                        // required
                        // value={balanceNew}
                        // readonly
                        // defaultValue={balanceNew} //! тормозит
                        placeholder={balanceNew}
                    // defaultValue={(balanceNew) ? balanceNew : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>


                <button
                    className={css.FormBtn}
                    type="submit"
                    disabled={NotNewUser} //! пока не блокировать
                >
                    {/* CONFIRM */}
                    {
                        NotNewUser
                            ?
                            <span className={css.btnConfirmDisabled}>
                                NO CONFIRM
                            </span>
                            :
                            <span className={css.btnConfirmActive}>
                                CONFIRM
                            </span>
                    }
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>

            </form>

            {/* //! Модальное окно */}
            {!balanceNew && !NotNewUser && (
                <ModalNullBalance onClose={toggleModal}>
                    <ModalNullBalanceWindow />
                </ModalNullBalance>
            )}

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





