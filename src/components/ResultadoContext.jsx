import React, { createContext, useState } from "react";

export const ResultadoContext = createContext();

export const ResultadoProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <ResultadoContext.Provider value={{ score, setScore }}>
      {children}
    </ResultadoContext.Provider>
  );
};