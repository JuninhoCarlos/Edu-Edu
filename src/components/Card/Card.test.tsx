import React from "react";
import { render } from "@testing-library/react";

import Card, { CardProps } from "./Card";

const renderCard = (props: Partial<CardProps> = {}) => {
  const defaultProps: CardProps = {
    nome: "joaozinho",
    ano: 1,
  };
  return render(<Card {...defaultProps} {...props} />);
};

describe("<Card />", () => {
  test("Should Display a default card without passing an Avatar url", async () => {
    const { findByTestId } = renderCard();
    const nome = await findByTestId("nome");
    expect(nome).toHaveTextContent("joaozinho");
    const ano = await findByTestId("ano");
    expect(ano).toHaveTextContent("1º Ano");
    const avatar = await findByTestId("avatarUrl");
    expect(avatar).toHaveAttribute("src");
  });
});

describe("<Card />", () => {
  test("Should Display a Card with an specific url to the avatar", async () => {
    const { findByTestId } = renderCard({
      nome: "Thiago",
      ano: 2,
      avatarUrl: "avatar.png",
    });
    const nome = await findByTestId("nome");
    expect(nome).toHaveTextContent("Thiago");
    const ano = await findByTestId("ano");
    expect(ano).toHaveTextContent("2º Ano");
    const avatar = await findByTestId("avatarUrl");
    expect(avatar).toHaveAttribute("src", "avatar.png");
  });
});
