"use client"; // No NextJS, é necessário para indicar que é um client component.

import * as RadixProgress from "@radix-ui/react-progress";
import { ReactNode, createContext, useContext } from "react";

// Contexto p/ passar valores totais e atuais:
const ProgressContext = createContext(
  {} as {
    max: number
    now: number
  });

interface ProgressProps { 
    children: ReactNode
    max: number
    now: number 
}

export function Progress({ children, max, now }: ProgressProps) {
  return (
    <div className="flex items-center mx-3 gap-3">
      <ProgressContext.Provider value={{max, now}}>{children}</ProgressContext.Provider> 
    </div>
  );
}

export function ProgressBar() {

const {max, now} = useContext(ProgressContext);

  return (
    <RadixProgress.Root className="h-3 flex-1 bg-aquamarine-900 rounded-md">
      <RadixProgress.Indicator
        className="h-3 bg-aquamarine-50 rounded-md transition-all" // "trasition-all" p/ efeito na velocidade de expansão da barrinha
        style={{
          // prenchimento barra de progresso a partir do clique no btn revelar reposta.
          width: `${Math.round((now * 100) / max)}%`,
        }}
      ></RadixProgress.Indicator>
    </RadixProgress.Root>
  );
}

export function ProgressIndicator() {

    const {max, now} = useContext(ProgressContext);

  return (
    <span className="text-base font-bold font-mono text-aquamarine-50">
      {String(now).padStart(2, "0")}/{max}{" "}
      {/* p/ não alterar o tamanho da barra quando aumentar o nº de caracteres na contagem */}
    </span>
  );
}
