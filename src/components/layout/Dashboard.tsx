import React from "react";
import {
  Route,
  //  HashRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import Sidebar from "./Sidebar";
import CadastroAluno from "../alunos/CadastroAluno";
import ListarAlunos from "../alunos/ListarAluno";
import "./layout.css";

const Dashboard = (): JSX.Element => {
  const { path } = useRouteMatch();
  console.log("path:", path);
  console.log("match:", `${path}/teste`);
  return (
    <div className="flex-container-row">
      <Sidebar />
      <Switch>
        <Route exact path={path}>
          <ListarAlunos />
        </Route>

        <Route path={`${path}/cadastro`}>
          <CadastroAluno />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
