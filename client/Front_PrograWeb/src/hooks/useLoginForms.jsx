import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";
import { usuarios } from "../constants/Consts.jsx";

export function useLoginForm(initialValues = { email: "", password: "" }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, setCurrentUser } = useUserContext();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: values.email.toLowerCase(),
          password: values.password
        })
      });
      const data = await res.json(); 
      
      if (!res.ok) {
        // Usa el mensaje específico que viene del backend
        setError(data.error || "Error desconocido.");
        return;
      }

      
      if (data && data.user) {
        setCurrentUser && setCurrentUser(data.user);
        setError("");
        if (Number(data.user.role_id) === 1) {
          navigate("/homeadmin");
        } else {
          navigate("/");
        }
      } else {
        setError("No se pudo obtener el usuario del backend.");
      }
    } catch (err) {
      setError("Error de red o del servidor.");
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