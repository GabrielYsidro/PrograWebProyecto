import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext.jsx";

export function useRegisterForm(initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  phone_number: "",
}) {
  const { users,setUsers,currentUser,addUser } = useUserContext();
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
      !values.name.trim() ||
      !values.email.trim() ||
      !values.password.trim() ||
      !values.confirmPassword.trim() ||
      !values.address.trim() ||
      !values.phone_number.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }
    if (!/^\d{9}$/.test(values.phone_number)) {
      setError("El número de teléfono debe tener exactamente 9 dígitos.");
      return false;
    }
    setError("");
    return true;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await addUser({ 
      name: values.name,
      email: values.email.toLowerCase(),
      active: true,
      password: values.password,
      address: values.address,
      phone_number: values.phone_number,
      roleId: 2, // o el valor que corresponda a "cliente"
      fotoperfil: "/src/assets/icon-park-solid--people.png",
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
