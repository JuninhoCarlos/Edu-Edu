import React from "react";

import LoginForm from "./LoginForm";

import "./login.css";

const Login = (): JSX.Element => {
  return (
    <div className="flex-container">
      <LoginForm />
      <p>@ 2021 EduEdu, todos os direitos reservados</p>
    </div>
  );
};

export default Login;
