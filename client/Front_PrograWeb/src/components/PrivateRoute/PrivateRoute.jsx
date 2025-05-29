import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext.jsx';

const PrivateRoute = ({ children }) => {
  const { usuario } = useUserContext();

  if (!usuario) {
    // Si no hay usuario logueado, redirige al login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
