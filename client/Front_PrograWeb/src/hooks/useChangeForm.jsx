import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useChangeForm(initialValues = {
  email: "",
  newPassword: "",
  confirmPassword: ""
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

    console.log("Cambiando contraseña para:", values.email);
    // Aquí iría tu lógica real (API)
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
