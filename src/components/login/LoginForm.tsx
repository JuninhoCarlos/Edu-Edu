import React from "react";
import logo from "../../assets/logo.png";

const LoginForm = (): JSX.Element => {
  return (
    <div className="col-md-auto ">
      <img src={logo} alt="" />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary w-100 p-3 .text-white esqueci-senha"
          >
            Login
          </button>
        </div>
        <div className="mb-2 ">
          <button
            type="button"
            className="btn btn-light w-100 p-3 text-primary esqueci-senha"
          >
            Esqueci a senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
