import { Outlet } from "react-router-dom"
import Header from "../componentes/parteLay/header"

const LeyPadra = () => {

    return(
      <>
        <div className="pb-[78px]">
            <Header />
        </div>

        <Outlet/>
      </>
    )
}

export default LeyPadra