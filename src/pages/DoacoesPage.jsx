
import DoacRecor from '../componentes/heros/doacoes/DoacRecor'
import DoacUnicas from '../componentes/heros/doacoes/DoacUnicas'
import Deposito from '../componentes/heros/doacoes/Deposito'
import DoacProdutos from '../componentes/heros/doacoes/DoacProdutos'

import { useEffect } from 'react'


const Doacoes = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // executa só uma vez quando o componente monta

    return(
      <>
        <DoacRecor/>
        <DoacUnicas/>
        <Deposito/>
        <DoacProdutos/>

      </>
    )
}

export default Doacoes