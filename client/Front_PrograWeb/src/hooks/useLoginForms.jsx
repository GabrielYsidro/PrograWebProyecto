import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLoginForm(initialValues = { email: "", password: "" }) {
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
    if (values.email.trim() === "" || values.password.trim() === "") {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = () => {
    if (!validate()) return;
    alert("Login simulado. Implementar autenticación más tarde.");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/recover-password");
  };

  const clearError = () => {
    setError("");
  };

  return {
    values,
    handleChange,
    handleLogin,
    handleRegister,
    handleForgotPassword,
    error,
    clearError,
  };
}

export default useLoginForm;