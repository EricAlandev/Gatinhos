import Imagens from '../componentes/heros/QuemSomos/Imagens'
import Texto from '../componentes/heros/QuemSomos/Texto'

import { useEffect } from 'react'



const SobreNos = () => {

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // executa só uma vez quando o componente monta
    

    return(
        <>
         <Imagens/>
         <Texto/>
        </>
    )
}

export default SobreNos