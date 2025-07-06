import React from "react";
import styles from "../../styles/RecoverPassword.module.css";
import ChangeTable from "../../components/ChangeTable/ChangeTable.jsx";
import { useNavigate } from "react-router-dom";

function RecoverPassword() {
  const navigate = useNavigate();

  return (
    <div className={styles["recover-background"]}>
      <ChangeTable
        mode="recovery"
        onBack={() => navigate("/login")}
      />
    </div>
  );
}

export default RecoverPassword; 