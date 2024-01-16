import { ComponentProps, ElementType, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {} // extendendo todas as props que um btn tradicionalmente recebe no html

// Componentização de todos os elementos do botão!
// Pensar no reaproveitamento dos componentes em diferentes usos na aplicação!
export function Button(props: ButtonProps) {
  return (
    <button
      className="py-3 px-5 flex gap-3 font-bold text-sm bg-aquamarine-400 text-softpeach-50 rounded-md hover:bg-aquamarine-600 transition-colors"
      {...props}
    ></button>
  );
}

export function ButtonText({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}

export function ButtonIcon({ icon: Icon }: { icon: ElementType }) {
  return <Icon className="w-5 h-5" />; // fixa todos comprimentos e alturas de todos os ícones dentro do btn, msm q sejam icones diferentes!
}
