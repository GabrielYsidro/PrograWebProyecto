import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";
import { usuarios } from "../constants/Consts.jsx";

export function useChangeForm(initialValues = {
  email: "",
  newPassword: "",
  confirmPassword: ""
}) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { users, setUsers } = useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (!values.email.trim() || !values.newPassword.trim() || !values.confirmPassword.trim()) {
      setError("Todos los campos son obligatorios.");
      return false;
    }

    if (values.newPassword !== values.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Buscar el usuario por email
    const user = users.find(u => u.email === values.email.toLowerCase());
    if (!user) {
      setError("No se encontró un usuario con ese correo electrónico.");
      return;
    }

    // Actualizar la contraseña en el contexto
    const updatedUsers = users.map(u =>
      u.email === values.email.toLowerCase() ? { ...u, password: values.newPassword } : u
    );
    setUsers(updatedUsers);

    console.log("Contraseña actualizada para:", values.email);
    navigate("/login");
  };

  return {
    values,
    handleChange,
    handleSubmit,
    error
  };
}

export default useChangeForm;
