"use client";
import { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [alterarTema, setAlterarTema] = useState(false);

  return (
    <TemaContext.Provider value={{ alterarTema, setAlterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
