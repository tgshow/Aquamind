import { createContext, useContext, useState } from "react";
import { desafiosData } from "../data/desafios";

type Desafio = {
  nome: string;
  economia: number;
  concluido: boolean;
};

type DesafiosContextType = {
  desafios: Desafio[];
  toggleDesafio: (index: number) => void;
};

const DesafiosContext = createContext<DesafiosContextType | null>(null);

export function DesafiosProvider({ children }: { children: React.ReactNode }) {
  const [desafios, setDesafios] = useState(
    desafiosData.map(d => ({ ...d, concluido: false }))
  );

  const toggleDesafio = (index: number) => {
    const novos = [...desafios];
    novos[index].concluido = !novos[index].concluido;
    setDesafios(novos);
  };

  return (
    <DesafiosContext.Provider value={{ desafios, toggleDesafio }}>
      {children}
    </DesafiosContext.Provider>
  );
}

export function useDesafios() {
  const context = useContext(DesafiosContext);
  if (!context) {
    throw new Error("useDesafios precisa estar dentro do Provider");
  }
  return context;
}