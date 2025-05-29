import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegisterForm(initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}) {
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
    if (
      !values.username.trim() ||
      !values.email.trim() ||
      !values.password.trim() ||
      !values.confirmPassword.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }

    setError("");
    return true;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Registrando:", values);
    // Aquí iría la llamada a tu API
    navigate("/login");
  };

  return {
    values,
    handleChange,
    handleRegisterSubmit,
    error,
  };
}

export default useRegisterForm;
