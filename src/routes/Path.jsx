import { BrowserRouter, Routes, Route } from "react-router-dom"

//imports
import LayPadrao from '../layout/LayPadrao'
import GatinhosPage from "../pages/GatinhosPage"
import HomePage from "../pages/HomePage"
import SobreNos from "../pages/SobreNosPage"
import DoacoesPage from '../pages/DoacoesPage'
import ContatoPage from "../pages/ContatoPage"
import EntrarPage from "../pages/EntrarPage"
import CadastroPage from '../pages/CadastroPage'
import UserPage from "../pages/UserPage"


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

                 <Route path="/contato" element={<LayPadrao/>}>
                    <Route index element={<ContatoPage/>}/>
                 </Route>

                 <Route path="/entrar" element={<LayPadrao/>}>
                    <Route index element={<EntrarPage/>}/>
                 </Route>

                 <Route path="/cadastro" element={<LayPadrao/>}>
                    <Route index element={<CadastroPage/>}/>
                 </Route>

                 <Route path="/userPage" element={<LayPadrao/>}>
                    <Route index element={<UserPage/>}/>
                 </Route>



                 


            </Routes>        
        </BrowserRouter>
    )
}

export default Path