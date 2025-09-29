import estilos from "./page.module.css";
import Topo from "../componentes/Topo";
import Banner from "../componentes/banner";
import Conteudo from "../componentes/Conteudo";

export default function Home() {
  return (
    <main className={estilos.main}>
      <Topo />
      <Banner />
      <Conteudo />
    </main>
  );
}
