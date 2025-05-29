import React from "react";
import ChangeTable from "../../components/ChangeTable/ChangeTable.jsx";
import { useChangeForm } from "../../hooks/useChangeForm.jsx";
import styles from "../../styles/ChangePassword.module.css";  

function ChangePassword() {
  const {
    values,
    handleChange,
    handleSubmit,
    error,
  } = useChangeForm();

  return (
    <div className={styles["change-wrapper"]}>
      <div className={styles["change-background"]}></div>
      <div className={styles["change-content"]}>
        <ChangeTable
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      </div>
    </div>
  );
}

export default ChangePassword;
