import { useAuth } from 'hooks';
import css from './Home.module.css'




export default function Home() {
    const { user, isLoggedIn } = useAuth();
    console.log("user", user); //!

    return (
        <div className={css.container}>
            <h1 className={css.title}>
                <span className={css.spanName} role="img" aria-label="Greeting icon">
                    💁 {isLoggedIn ? user.name : "Registration or Log In"}
                    {/* {isLoading ? [<Spinner size="18" />, " Editing..."] : "Edit"} */}
                    <br />
                </span>
                Welcome to Kapu$ta
                <br />
                <span className={css.spanWith}>
                    &nbsp;SMART FINANCE
                </span>
            </h1>
        </div>
    );
}
// { user.name }