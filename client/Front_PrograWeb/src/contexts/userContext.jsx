import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../constants/Consts";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState(usuarios);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    if (user && user.email && user.password && user.rol && user.nombre) {
      const userExists = users.some((u) => u.email === user.email);
      if (!userExists) {
        const newUser = {
          ...user,
          id: users.length + 1,
          activo: true,
          direccion: user.direccion || "",
          telefono: user.telefono || "",
          fotoPerfil: user.fotoPerfil || "/src/assets/icon-park-solid--people.png",
        };
        setUsers((prev) => [...prev, newUser]);
        return newUser;
      } else {
        throw new Error("El correo ya está registrado.");
      }
    } else {
      throw new Error("Faltan datos obligatorios (email, password, rol, nombre).");
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
    navigate("/");
  };

  const activarUsuario = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, activo: true } : user
      )
    );
    if (currentUser && currentUser.id === id) {
      setCurrentUser((prev) => ({ ...prev, activo: true }));
    }
  };

  const desactivarUsuario = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, activo: false } : user
      )
    );
    if (currentUser && currentUser.id === id) {
      setCurrentUser((prev) => ({ ...prev, activo: false }));
      logout();
    }
  };

  return (
    <UserContext.Provider value={{ users, setUsers, currentUser, addUser, login, logout, activarUsuario, desactivarUsuario }}>
      {children}
    </UserContext.Provider>
  );
}