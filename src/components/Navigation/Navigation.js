// import { NavLink } from 'react-router-dom'; //? если import css from './Navigation.module.css';

import { useAuth } from 'hooks';

// import css from './Navigation.module.css';
import { Link } from './Navigation.styled.js'; //! "components/Navigation/Navigation.styled";




//? import css from './Navigation.module.css';
export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <Link to="/" end>
                Kapu$ta
            </Link>
            {isLoggedIn && (
                <>
                    {/* //! Маршруты EXPENSES и INCOME */}
                    <Link to="/expenses">
                        EXPENSES
                    </Link>

                    <Link to="/income">
                        INCOME
                    </Link>

                    <Link to="/reports">
                        REPORTS
                    </Link>

                    {/* //! Маршруты contacts */}
                    <Link to="/contacts">
                        Contacts
                    </Link>

                    <Link to="/upload">
                        Upload Contacts
                    </Link>

                    {/* //! Маршрут АВТАР */}
                    <Link to="/avatar">
                        Change Avatar
                    </Link>
                </>
            )}
        </nav>
    );
};


//? import css from './Navigation.module.css';
// export const Navigation = () => {
//     const { isLoggedIn } = useAuth();

//     return (
//         <nav>
//             <NavLink className={css.link} to="/">
//                 Home
//             </NavLink>
//             {isLoggedIn && (
//                 <NavLink className={css.link} to="/contacts">
//                     Contacts
//                 </NavLink>
//             )}
//         </nav>
//     );
// };