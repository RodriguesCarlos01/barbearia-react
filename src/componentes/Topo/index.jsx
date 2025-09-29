"use client";
import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo from "../../../public/barbearia.png";
import { useContext } from "react";
import { TemaContext } from "@/app/context/TemaContext";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Topo() {
  const { alterarTema, setAlterarTema } = useContext(TemaContext);

  function MudarTema() {
    setAlterarTema(!alterarTema);
  }

  return (
    <div className={alterarTema ? estilos.tema_escuro : estilos.tema_claro}>
      <div className={estilos.container_topo}>
        <header className={estilos.topo_itens}>
          <Image
            src={Logo}
            alt="Logo tipo da barbearia"
            className={estilos.imagem}
          />

          <button className={estilos.btn_mudar_tema} onClick={MudarTema}>
            {alterarTema ? (
              <BsSun className={estilos.icone_sol} />
            ) : (
              <BsMoon className={estilos.icone_lua} />
            )}
          </button>
        </header>
      </div>
    </div>
  );
}
