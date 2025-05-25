import React from "react";
import RegisterTable from "../../components/RegisterTable/RegisterTable.jsx";
import useRegisterForm from "../../hooks/useRegisterForm.jsx";
import styles from "../../styles/Register.module.css";

function Register() {
  const {
    values,
    handleChange,
    handleRegisterSubmit,
    error,
  } = useRegisterForm();

  return (
  <div className={styles["register-wrapper"]}>
    <div className={styles["register-background"]}></div>
    <div className={styles["register-content"]}>
      <RegisterTable
        values={values}
        handleChange={handleChange}
        handleSubmit={handleRegisterSubmit}
        error={error}
      />
    </div>
  </div>
);
}

export default Register;
