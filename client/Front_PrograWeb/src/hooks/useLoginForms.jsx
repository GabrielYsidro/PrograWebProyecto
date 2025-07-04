import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";
import { usuarios } from "../constants/Consts.jsx";

export function useLoginForm(initialValues = { email: "", password: "" }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (values.email.trim() === "" || values.password.trim() === "") {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Usa el método login del contexto
    const ok = login(values.email.toLowerCase(), values.password);
    if (!ok) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    setError("");
    
    // Obtener el usuario actual después del login
    const currentUser = usuarios.find(u => u.email === values.email.toLowerCase());
    
    // Redirigir según el rol del usuario
    if (currentUser && currentUser.rol === "admin") {
      navigate("/homeadmin");
    } else {
      navigate("/");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/recover-password");
  };

  return {
    values,
    handleChange,
    handleLogin,
    handleRegister,
    handleForgotPassword,
    error,
  };
}

export default useLoginForm;