import React from "react";
//import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import CadastroAluno from "../alunos/CadastroAluno";
import "./layout.css";

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex-container-row">
      <Sidebar />
      <CadastroAluno />
    </div>
  );
};

export default Dashboard;
