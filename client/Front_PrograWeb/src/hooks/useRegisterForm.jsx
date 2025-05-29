import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";

export function useRegisterForm(initialValues = {
  nombre: "",
  email: "",
  password: "",
  confirmPassword: "",
  direccion: "",
  telefono: "",
}) {
  const { addUser } = useUserContext();
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
      !values.nombre.trim() ||
      !values.email.trim() ||
      !values.password.trim() ||
      !values.confirmPassword.trim() ||
      !values.direccion.trim() ||
      !values.telefono.trim()
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

    addUser({
      nombre: values.nombre,
      email: values.email.toLowerCase(),
      password: values.password,
      direccion: values.direccion,
      telefono: values.telefono,
      rol: "cliente", // Por defecto
      activo: true,   // Por defecto
      fotoPerfil: "/src/assets/icon-park-solid--people.png", // Por defecto
    });
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
