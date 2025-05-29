import React from "react";
import LoginTable from "../../components/LoginTable/LoginTable.jsx";
import { useLoginForm } from "../../hooks/useLoginForms.jsx";
import styles from "../../styles/Login.module.css";
import TopBar from "../../components/TopBar/TopBar.jsx";  
import Footer from "../../components/Footer/Footer.jsx";

export function Login() {
  const {
    values,
    handleChange,
    handleLogin,
    handleRegister,
    handleForgotPassword,
    error,
  } = useLoginForm();

  const handleInicio = () => {};

  return (
    <> 
    
    {/*<TopBar handleInicio={handleInicio} showSearch={true}/>*/}
    <div className={styles["login-wrapper"]}>
      <div className={styles["login-background"]}></div>
      <div className={styles["login-content"]}>
        <LoginTable
          values={values}
          handleChange={handleChange}
          handleLogin={handleLogin}
          onRegister={handleRegister}
          onForgotPassword={handleForgotPassword}
          error={error}
        />
      </div>
    </div>
    {/*<Footer />*/}
    </>
  );
}

export default Login;