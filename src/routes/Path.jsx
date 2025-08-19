import { BrowserRouter, Routes, Route } from "react-router-dom"

//imports
import LayPadrao from '../layout/LayPadrao'
import GatinhosPage from "../pages/GatinhosPage"
import HomePage from "../pages/HomePage"


const Path = () => {

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/gatinhos" element={<LayPadrao/>}>
                    <Route index element={<GatinhosPage/>}/>
                 </Route>

                 <Route path="/" element={<LayPadrao/>}>
                    <Route index element={<HomePage/>}/>
                 </Route>
            </Routes>        
        </BrowserRouter>
    )
}

export default Path