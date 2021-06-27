import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src: "https://images.lojanike.com.br/500x500/produto/tenis-nike-air-vapormax-evo-masculino-CT2868-001-3.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-2090-masculino-CV8835-100-1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Nike Shoes 03",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-lebron-17-unissex-BQ3177-601-1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Nike Shoes 04",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-xxxv-low-CW2460-101-1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Nike Shoes 05",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-lebron-xviii-best-of-DM2813-400-1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nike Shoes 06",
        src: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-precision-iii-unissex-AQ7495-002-1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 17,
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
