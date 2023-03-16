// import { NavLink } from 'react-router-dom'; //? если import css from './AuthNav.module.css';

// import css from './AuthNav.module.css'; //?
import { Link } from './AuthNav.styled.js'; //! "components/AuthNav/AuthNav.styled";


//! import { Link } from "components/AuthNav/AuthNav.styled";
export const AuthNav = () => {
    return (
        <div>
            <Link to="/register">
                REGISTRATION
            </Link>
            <Link to="/login">
                LOG IN
            </Link>
        </div>
    );
};


//? import css from './AuthNav.module.css'; ==> так НЕ РАБОТАЕТ class active
// export const AuthNav = () => {
//     return (
//         <div>
//             <NavLink className={css.link} to="/register">
//                 Register
//             </NavLink>
//             <NavLink className={css.link} to="/login">
//                 Log In
//             </NavLink>
//         </div>
//     );
// };