"use client";
import estilos from "./Conteudo.module.css";
import { useContext } from "react";
import { TemaContext } from "@/app/context/TemaContext";

export default function Conteudo() {
  const { alterarTema } = useContext(TemaContext);

  return (
    <div className={alterarTema ? estilos.tema_escuro : estilos.tema_claro}>
      <main className={estilos.container_conteudo}>
        <div className={estilos.conteudo}>
          <h1>Bem-vindo a Baber Shop</h1>

          <p className={estilos.paragrafo_destaque}>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos
            porntos para lidar com suas maiores expectativas.
          </p>

          <p className={estilos.paragrafo}>
            Nossos serviços são didicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>

          <p className={estilos.assinatura}>S. Kelly</p>
        </div>
      </main>
    </div>
  );
}
