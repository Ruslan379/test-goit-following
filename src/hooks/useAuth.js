import { useSelector } from 'react-redux';

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRegistrIn,
    selectIsRefreshing,
    selectBalance,

} from 'redux/auth/authSelectors';


//----------------------------------------------------------------
export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const IsRegistrIn = useSelector(selectIsRegistrIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const balance = useSelector(selectBalance);


    return {
        user,
        isLoggedIn,
        IsRegistrIn,
        isRefreshing,
        balance,
    };
};
