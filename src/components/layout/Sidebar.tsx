import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";

const Sidebar = (): JSX.Element => {
  return (
    <nav className="nav flex-column">
      <img src={img} alt="" />
      <Link to="/dashboard" className="nav-item active">
        Perfil dos Alunos
      </Link>
      <Link to="/dashboard" className="nav-item">
        Prova de Português
      </Link>
      <Link to="/dashboard" className="nav-item">
        Atividades Digitais
      </Link>
      <Link to="/dashboard" className="nav-item">
        Ajuda
      </Link>
      <Link to="/dashboard" className="nav-item">
        Configurações
      </Link>
    </nav>
  );
};

export default Sidebar;
