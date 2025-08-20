import CatProduct from "../componentes/esqueletos/CatProdut"
import Gatinhos from "../componentes/heros/Gatinhos"

import { useEffect } from 'react'


const GatinhosPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // executa só uma vez quando o componente monta

    return(
      <>
        <Gatinhos/>
        <CatProduct/>
      </>
    )
}

export default GatinhosPage