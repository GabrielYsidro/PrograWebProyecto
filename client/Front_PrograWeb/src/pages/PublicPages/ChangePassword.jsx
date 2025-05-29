import React from "react";
import styles from "../../styles/ChangePassword.module.css";
import CambiarContra from "../../components/CambiarContra/CambiarContra.jsx";  
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  return (
    <div className={styles["change-wrapper"]}>
      <CambiarContra />
      <button
        className={styles["back-button"]}
        style={{ marginTop: "2rem", marginLeft: "auto", marginRight: "auto", display: "block" }}
        onClick={() => navigate("/")}
      >
        Regresar a inicio
      </button>
    </div>
  );
}

export default ChangePassword;
