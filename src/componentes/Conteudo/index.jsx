import estilos from "./Conteudo.module.css";
import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

export default function Conteudo() {
  const { alterarTema } = useContext(TemaContext);

  return (
    <main
      className={`${estilos.container_conteudo} ${
        alterarTema ? estilos.tema_escuro : estilos.tema_claro
      }`}
    >
      <div className={estilos.conteudo}>
        <h1>Bem-vindo a Baber Shop</h1>

        <p className={estilos.paragrafo_destaque}>
          Nossa barbearia sempre oferece profissionais de qualidade e estamos
          porntos para lidar com suas maiores expectativas.
        </p>

        <p className={estilos.paragrfo}>
          Nossos serviços são didicados ao seu sucesso pessoal. Aqui temos luma
          equipe premiada que demonstrou o talento de mestres barbeiros em
          vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
          pessoal e você nunca ficará desapontado.
        </p>

        <p className={estilos.assinatura}>S. Kelly</p>
      </div>
    </main>
  );
}
