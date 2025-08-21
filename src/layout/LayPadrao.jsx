import { Outlet } from "react-router-dom"
import Header from "../componentes/parteLay/Header"
import Footer from '../componentes/parteLay/Footer'

const LeyPadra = () => {

    return(
      <>
        <div className="pb-[78px] md:pb-[101px]">
            <Header />
        </div>

        <Outlet/>
        <Footer/>
      </>
    )
}

export default LeyPadra