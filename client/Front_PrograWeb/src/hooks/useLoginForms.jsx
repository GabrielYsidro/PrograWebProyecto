import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

export function useLoginForm(initialValues = { email: "", password: "" }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, currentUser } = useUserContext();

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

  const handleLogin = () => {
    if (!validate()) return;

    const success = login(values.email, values.password);
    if (success) {
      const user = currentUser;
      if (!user.activo) {
        setError("Tu cuenta está desactivada. Contacta al administrador.");
        return;
      }
      setError("");
      // Map 'rol' to 'role' for redirection
      const role = user.rol === "cliente" ? "user" : user.rol;
      if (role === "admin") {
        navigate("/homeadmin");
      } else {
        navigate("/homeuser");
      }
    } else {
      setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
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