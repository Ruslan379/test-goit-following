import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
    return (
        <div>
            <Helmet>
                <title>REGISTRATION</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}
