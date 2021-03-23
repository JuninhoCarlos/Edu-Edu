import React from "react";

import BarraDeBusca from "./BarraDeBusca";
import ListarAno from "./ListarAno";

import "./style.css";

const ListarAluno = (): JSX.Element => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center bg-mygray">
      <BarraDeBusca />
      <ListarAno ano="1" />
      <ListarAno ano="2" />
      <ListarAno ano="3" />
    </div>
  );
};

export default ListarAluno;
