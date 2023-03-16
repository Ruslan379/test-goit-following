import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/*
 * - If the route is restricted and the user is Registr=In, render a <Navigate> to redirectTo
 * - Otherwise render the component
 * 
 * - Если маршрут ограниченный (Public), и юзер зарегистрирован, рендерит  <Navigate> to redirectTo
 * - В противном случае рендерит КОМПОНЕНТ
 */

export const RestrictedRegistrRoute = ({ component: Component, redirectTo = '/' }) => {
    const { IsRegistrIn } = useAuth();
    return IsRegistrIn ? <Navigate to={redirectTo} /> : Component;
};
