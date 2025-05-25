import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../constants/Consts";

export function useLoginForm(initialValues = { username: "", password: "" }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  // Buscar usuario por email (username)
  const usuario = usuarios.find(u => u.email === values.username);

  if (!usuario) {
    setError("Correo o contraseña incorrectos.");
    return;
  }

  // Aquí debes validar la contraseña. Como no tienes, 
  // para ejemplo, asumamos que la contraseña es "123456" para todos.
  if (values.password !== "123456") {
    setError("Correo o contraseña incorrectos.");
    return;
  }

  setError("");
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuario)); // guardar usuario para persistencia

  navigate("/dashboard");
};

  const handleRegister = () => {
    console.log("Ir a registro");
    navigate("/register");
  };

  const handleForgotPassword = () => {
    console.log("Recuperar contraseña");
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