import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    console.log("Login:", values.username, values.password);
    // Aquí iría tu lógica real de login con API
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