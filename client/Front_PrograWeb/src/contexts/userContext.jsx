import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuarios } from '../constants/Consts';

const UserContext = createContext();
export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState(usuarios);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    if (user && user.email && user.password) {
      const userExists = users.some((u) => u.email === user.email);
      if (!userExists) {
        setUsers((prev) => [...prev, user]);
      } else {
        console.error('User already exists:', user.email);
      }
    } else {
      console.error('Invalid user object:', user);
    }
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const activarUsuario = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, activo: true } : user
      )
    );
  };

  const desactivarUsuario = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, activo: false } : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser, login, logout , activarUsuario, desactivarUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
