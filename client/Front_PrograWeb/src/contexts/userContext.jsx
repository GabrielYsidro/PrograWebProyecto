import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUserId, addUser as addUserService, cambiarEstado, changePass } from '../services/userService';

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
    // Solo intenta restaurar usuario si currentUser no está definido
    if (currentUser !== null) return;
    const fetchMe = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
          credentials: 'include',
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.user) setCurrentUser(data.user);
      } catch (err) {
        // No mostrar nada en consola JS
      }
    };
    fetchMe();
  }, [currentUser]);

  const addUser = async (user) => {
    if (user && user.email && user.password && user.roleId && user.name) {
      const userExists = users.some((u) => u.email === user.email);
      if (!userExists) {
        const newUser = await addUserService(user);
        await fetchUsers();
        setUsers((prevUsers) => [...prevUsers, newUser]);
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

  const logout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    setCurrentUser(null);
    navigate("/");
  };

  const activarUsuario = async (id) => {
    try {
      await cambiarEstado(id, true);
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
      if (currentUser && currentUser.id === id) {
        setCurrentUser((prev) => ({ ...prev, activo: false }));
        logout();
      }
    } catch (error) {
      console.error('Error al desactivar usuario:', error);
    }
  };

  const changePassword = async (id, newPassword) => { //esta te hace el cambio en el back y el front

    try {
      await changePass(id, newPassword);
      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, password: newPassword } : user
        )
      );
      if (currentUser && currentUser.id === id) { //buen manejo si la sesion esta abierta
        setCurrentUser((prev) => ({ ...prev, password: newPassword }));
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  };

  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      currentUser,
      setCurrentUser,
      addUser,
      login,
      logout,
      activarUsuario,
      desactivarUsuario,
      fetchUsers,
      changePassword
    }}>
      {children}
    </UserContext.Provider>
  );
}