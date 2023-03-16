import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
    return (
        <div>
            <Helmet>
                <title>LOG IN</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}
