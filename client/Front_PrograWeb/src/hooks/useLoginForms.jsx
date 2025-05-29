import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../constants/Consts";
import { useUserContext } from "../contexts/UserContext.jsx";


export function useLoginForm(initialValues = { username: "", password: "" }) {
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
    if (values.username.trim() === "" || values.password.trim() === "") {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === values.username.toLowerCase()
    );

    if (!usuarioEncontrado || values.password !== "123456") {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    setError("");
    login(usuarioEncontrado); // Actualiza contexto y localStorage
    navigate("/homeuser"); // Navega a home de usuario
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