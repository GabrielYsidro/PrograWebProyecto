import React from "react";
import styles from "../../styles/RecoverPassword.module.css";
import ChangeTable from "../../components/ChangeTable/ChangeTable.jsx";
import { useChangeForm } from "../../hooks/useChangeForm.jsx";
import { useNavigate } from "react-router-dom";

function RecoverPassword() {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, error } = useChangeForm();

  return (
    <div className={styles["recover-background"]}>
      <ChangeTable
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        onBack={() => navigate("/login")}
      />
    </div>
  );
}

export default RecoverPassword; 