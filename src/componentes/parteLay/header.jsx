import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen)
    }

    const closePopUp = () => {

        setIsOpen(false)
    }

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [isOpen]);


    return(
     <header className={`fixed w-full z-40 `}>

         {/*Aside feito para quando o menu abrir ter aquela sensação de shade */}
         <AnimatePresence>
               
               {isOpen && (
                    <motion.div 
                    initial={{opacity: 0, x: -50,duration: 0.8}}
                    animate={{opacity: 1, x:0}}
                    exit={{opacity: 0, x: -50,duration: 0.8}}
                    className="fixed w-[200px] h-screen  inset-0  z-50 bg-[#F8F8F8]"
                    >

                       <nav className="text-[black] z-50 h-screen">
                       <ul className="flex flex-col gap-3 mt-[20px] ml-[12px]">
    <li>
        <Link to={'/'}
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/House.png" alt="" className=" max-h-[25px]" />
            <p className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Só gatinhos</p>
        </Link>
    </li>

    <li>
        <div 
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/Paw.png" alt="" className=" max-h-[25px]" />
            <p className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Quem somos</p>
        </div>
    </li>

    <li>
        <Link to={'/gatinhos'} 
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/Paw.png" alt="" className=" max-h-[25px]" />
            <p className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Apadrinhamento e adoção</p>
        </Link>
    </li>

    <li>
        <div 
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/Paw.png" alt="" className=" max-h-[25px]" />
            <Link to={'/doacoes'} className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Doações</Link>
        </div>
    </li>

    <li>
        <div 
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/Paw.png" alt="" className=" max-h-[25px]" />
            <p className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Parceiros</p>
        </div>
    </li>

    <li>
        <div 
        onClick={() => closePopUp()}
        className="flex items-center gap-2">
            <img src="/assets/header/Paw.png" alt="" className=" max-h-[25px]" />
            <p className={`font-[Inter] font-[400] text-[14.5px] text-[#333333]`}>Contato</p>
        </div>
    </li>
</ul>

                       </nav>
                   </motion.div>
               )}
       
   </AnimatePresence>

        {/*Overlay - ativado apenas no is Open */}

        <div className={`min-w-[440px] h-screen inset-0 bg-[black] opacity-52 z-40 
        ${isOpen ? 'fixed' : 'hidden'} 
        `}
        onClick={toggle}
        ></div>
         
        
        {/*Menu mobile */}
        <section className={`flex w-full max-h-[90px] overflow-hidden pb-4 ${isOpen ? ' gap-0' : ' gap-8'} items-center bg-[#F9F9F9] border-[#D1D1D1] border-b-[0.5px] `}>

            <motion.div className={`flex items-center gap-4`}
            initial={{x:0}}
            animate={{x:isOpen ? 185 : 0}}
            exit={{x:0}}
            transition={{duration: 0.2}}
            >
                        {/*Hamrburguer */}
                    <img src="/assets/header/HamrburguerM.png" alt=""
                    className={`max-h-[32px] ml-[25px] duration-300 `}
                    onClick={() => toggle()}
                    />

                    {/*Logo */}
                    <img src="/assets/header/Logo-mobile.png" alt=""
                    className={`min-h-[30px] $`}
                    />

                    <p className={`min-w-[240px] max-w-[250px] mr-[16px] pt-4 font-[Inter] font-[350] text-[12.5px]
                    `}>A Só Gatinhos tem como objetivo abrigar gatinhos abandonados e vítimas de maus-tratos para entregá-los às famílias cheias de amor!  </p>
            </motion.div>
        </section>
     </header>
    )
}

export default Header