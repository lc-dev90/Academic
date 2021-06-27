import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Tênis Nike Air VaporMax",
        src: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-vapormax-evo-masculino-CT2868-001-3.jpg",
        description: "Tênis Nike Air VaporMax Evo Masculino",
        content:
          "O Nike Air VaporMax Evo disseca o DNA do Air Max para revelar as características distintivas de 7 ícones da Nike. Ele combina elementos de queridinhos do panteão do Air em um só tênis, permitindo que você explore um novo mundo repleto de história, inovação e Air Max.",
        price: 1399.99,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Tênis Nike Air Max 2090",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-2090-masculino-CV8835-100-1.jpg",
        description: "Tênis Nike Air Max 2090 Masculino",
        content:
          "Traga o passado para o futuro com o Nike Air Max 2090, um look ousado inspirado no DNA do icônico Air Max 90. O inovador amortecimento Nike Air debaixo do pé proporciona conforto inigualável, enquanto o tecido de malha transparente e o material em cores vibrantes na parte de cima se misturam com as características atemporais para um look moderno e arrojado.",
        price: 539.99,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Tênis Nike LeBron 17",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-lebron-17-unissex-BQ3177-601-1.jpg",
        description: "Tênis Nike LeBron 17 Unissex",
        content:
          "O LeBron 17 aproveita a força e a velocidade do LeBron com contenção e suporte para dominar toda a quadra. Inclui uma combinação leve de malha e fios moldados a quente para look e sensação duráveis. O amortecimento combinado garante ao LeBron o suporte de impactos e o amortecimento reativo ágil que ele precisa para enfrentar uma temporada longa.",
        price: 749.99,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Tênis Air Jordan XXXV",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-xxxv-low-CW2460-101-1.jpg",
        description: "Tênis Air Jordan XXXV Low Masculino",
        content:
          "Os jogadores de basquete criam espaço cortando mais rápido, correndo com mais velocidade e pulando mais alto do que os oponentes. O Air Jordan XXXV Low é extremamente leve e ajuda a transformar sua velocidade e potência numa separação linear e vertical. Semelhante aos tênis de jogo em linha, ele utiliza uma entressola esculpida e estável, repleta de unidades Zoom Air visíveis e robustas para ajudar a explorar o espaço que você cria. A boca de cano baixo permite a mobilidade do tornozelo, mantendo seu pé contido e confortável.",
        price: 1299.99,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Tênis Nike LeBron 18",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-lebron-xviii-best-of-DM2813-400-1.jpg",
        description: "Tênis Nike LeBron 18 Unissex",
        content:
          "Quando o Rei acelera na quadra, ele produz uma força tremenda. O LeBron 18 foi desenvolvido aproveitando as habilidades do atleta para ajudar a lidar com a tensão que ele coloca sobre o corpo. O amortecimento combinado debaixo do pé permite que ele use sua força para picos incontroláveis de velocidade.",
        price: 1799.99,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Tênis Nike Precision III",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-precision-iii-unissex-AQ7495-002-1.jpg",
        description: "Tênis Nike Precision III Unissex",
        content:
          "Faça com que cada movimente conte no Nike Precision III. Esse calçado cano médio para todas as finalidades proporciona uma combinação confortável de amortecimento e contenção. Sua entressola leve e tração multidirecional são combinados para passadas macias e cortes rápidos.",
        price: 279.99,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
  });
  return (
    <GlobalContext.Provider value={{ state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
