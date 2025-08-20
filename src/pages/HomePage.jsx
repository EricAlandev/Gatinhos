import BVhero from "../componentes/heros/BemVindo/BVhero"
import OqueFalam from "../componentes/heros/BemVindo/OqueFalam"
import PaPasso from "../componentes/heros/BemVindo/PaPasso"

import { useEffect } from 'react'



const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // executa só uma vez quando o componente monta

    return(
      <>
        <BVhero/>
        <PaPasso/>
        <OqueFalam/>
      </>
    )
}

export default HomePage