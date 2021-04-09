import React from "react";

import avatar from "../../assets/kids/carmen.png";

export interface CardProps {
  nome: string;
  ano: number;
  avatarUrl?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card mb-3 box-shadow">
      <img
        data-testid="avatarUrl"
        src={props.avatarUrl ? props.avatarUrl : avatar}
        style={{ width: "", height: "auto" }}
        className="card-img-top card-img mx-auto p-4"
        alt=""
      />
      <div className="card-body pt-0">
        <p className="card-text">
          <span className="d-block h4 font-weight-bold" data-testid="nome">
            {props.nome}
          </span>
          <span className="d-block" data-testid="ano">
            {props.ano}º Ano
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
