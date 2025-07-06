import React from "react";
import styles from "../../styles/ChangePassword.module.css";
import ChangeTable from "../../components/ChangeTable/ChangeTable.jsx";  
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  return (
    <div className={styles["change-wrapper"]}>
      <div className={styles["change-background"]}></div>
      <div className={styles["change-content"]}>
        <ChangeTable mode="change" onBack={() => navigate("/")} />
        <button
          className={styles["back-button"]}
          style={{ marginTop: "2rem", marginLeft: "auto", marginRight: "auto", display: "block" }}
          onClick={() => navigate("/")}
        >
          Regresar a inicio
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
