import { BrowserRouter, Routes, Route } from "react-router-dom"

//imports
import LayPadrao from '../layout/LayPadrao'
import GatinhosPage from "../pages/GatinhosPage"
import HomePage from "../pages/HomePage"
import SobreNos from "../pages/SobreNosPage"
import DoacoesPage from '../pages/DoacoesPage'


const Path = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<LayPadrao/>}>
                    <Route index element={<HomePage/>}/>
                 </Route>

                 <Route path="/sobre" element={<LayPadrao/>}>
                    <Route index element={<SobreNos/>}/>
                 </Route>

                 <Route path="/gatinhos" element={<LayPadrao/>}>
                    <Route index element={<GatinhosPage/>}/>
                 </Route>

                 <Route path="/doacoes" element={<LayPadrao/>}>
                    <Route index element={<DoacoesPage/>}/>
                 </Route>

                 


            </Routes>        
        </BrowserRouter>
    )
}

export default Path