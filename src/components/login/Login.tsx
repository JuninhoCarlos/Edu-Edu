import React from "react";

import LoginForm from "./LoginForm";

import "./login.css";

const Login = (): JSX.Element => {
  return (
    <div className="container w-25 p-3 mt-5">
      <LoginForm />
    </div>
  );
};

export default Login;
