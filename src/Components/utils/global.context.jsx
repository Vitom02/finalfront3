import { createContext } from "react";
import { useState, useMemo } from "react";

export const initialState = {theme: "light", data: []}

export const themes = {
  light:{
    font: "black",
    background: "white"
  },
  dark:{
      font: "white",
      background: "black"
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [currentTheme, setCurrentTheme] = useState(initialState.theme);

  const toogleTheme = () => {
    setCurrentTheme((prevTheme) => 
    (prevTheme === "light" ? "dark" : "light"
    ));
  };

  const themeValue = useMemo(() => {
    return {
      theme: themes[currentTheme],
      toggleTheme: toogleTheme,
    };
  }, [currentTheme]);


  return (
    <ContextGlobal.Provider value={{themeValue}}>
      {children}
    </ContextGlobal.Provider>
  );
};
