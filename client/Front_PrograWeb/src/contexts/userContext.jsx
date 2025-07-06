import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUserId, addUser as addUserService, cambiarEstado } from '../services/userService';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await getUser();
      setUsers(Array.isArray(data.usuarios) ? data.usuarios : []);
    } catch (err) {
      setUsers([]);
    }
    console.log("Usuarios cargados:", users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    if (user && user.email && user.password && user.roleId && user.name) {
      const userExists = users.some((u) => u.email === user.email);
      if (!userExists) {
        const newUser = await addUserService(user);
        await fetchUsers(); 
        return newUser;
      } else {
        throw new Error("El correo ya está registrado.");
      }
    } else {
      throw new Error("Faltan datos obligatorios (email, password, roleId, name).");
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

  const activarUsuario = async (id) => {
    try {
      await cambiarEstado(id, true);
      await fetchUsers();
      if (currentUser && currentUser.id === id) {
        setCurrentUser((prev) => ({ ...prev, activo: true }));
      }
    } catch (error) {
      console.error('Error al activar usuario:', error);
    }
  };

  const desactivarUsuario = async (id) => {
    try {
      await cambiarEstado(id, false);
      await fetchUsers();
      if (currentUser && currentUser.id === id) {
        setCurrentUser((prev) => ({ ...prev, activo: false }));
        logout();
      }
    } catch (error) {
      console.error('Error al desactivar usuario:', error);
    }
  };

  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      currentUser,
      addUser,
      login,
      logout,
      activarUsuario,
      desactivarUsuario,
      fetchUsers
    }}>
      {children}
    </UserContext.Provider>
  );
}