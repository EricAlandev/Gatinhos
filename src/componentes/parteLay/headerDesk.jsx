import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

const HeaderDesk = () => {

          //Serve para verificar se está logado ou não. Não pede o token, poi é apenas pra saber do login.
          const [user, setUser] = useState(null);
    
          useEffect(() => {
            const userData = localStorage.getItem("userData");
            if (userData) {
                //Se existir o userData (os dados da api de login), ele faz o user ter os valores
              setUser(JSON.parse(userData));
            }
          }, []);
        
          //Definir a foto do user, ser preta (vanila) ou branca.
          const [photo, setPhoto] = useState('')

          const [num, setNum] = useState(0)

    return(
      <header>
         <section className="hidden  md:block md:fixed  w-full md:bg-[#F9F9F9] z-10">
            <section className="md:flex md:mx-auto md:max-w-[1200px] md:justify-between md:items-center">
                
                <Link to={'/'}>
                    <img src={'/assets/header/LogoDesk.png  '} alt=""
                        className="max-h-[80px]"
                    />
                </Link>

                <h3 className="md:max-w-[900px] md:font-[Inter] md:font-[400] md:text-[16px]">A Só Gatinhos tem como objetivo abrigar gatinhos abandonados e vítimas de maus-tratos para entregá-los às famílias cheias de amor!  </h3>
            </section>
         </section>


         <nav className="hidden md:block md:fixed md:w-full md:mt-[65px] md:bg-[#F3F3F3] z-10">
            <ul className="md:max-w-[1200px]  md:mx-auto md:flex md:gap-0">
                <li className="md:p-1.5">
                    <NavLink to={'/'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-2.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150 ' 
                    : 'text-[gray] md:bg-[#F3F3F3]'
                    }>
                        Só Gatinhos 
                    </NavLink>
                </li>

                <li className="md:p-1.5">
                    <NavLink 
                     to={'/sobre'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-2.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150' 
                    : 'text-[gray] md:bg-[#F3F3F3] '
                    }>
                        Quem Somos
                    </NavLink>
                </li>

                <li className="md:p-1.5">
                    <NavLink
                     to={'/gatinhos'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-2.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150 ' 
                    : 'text-[gray] md:bg-[#F3F3F3] '
                    }>
                        Gatinhos 
                    </NavLink>
                </li>

                <li className="md:p-1.5">
                    <NavLink to={'/doacoes'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-2.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150 ' 
                    : 'text-[gray] md:bg-[#F3F3F3] '
                    }>
                        Doações 
                    </NavLink>
                </li>

                <li className="md:p-1.5">
                    <NavLink to={'/contato'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-2.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150 ' 
                    : 'text-[gray] md:bg-[#F3F3F3] '
                    }>
                        Contato 
                    </NavLink>
                </li>

                <li className="md:flex items-center max-h-[40px]"
                                    onMouseEnter={() => setNum(1)}
                                    onMouseLeave={() => setNum(0)}
                >
               
                    <NavLink to={'/userPage'}
                    className={({isActive}) =>
                      isActive
                    ? 'md:p-1.5 md:font-[Inter] md:font-medium md:bg-[#373939] md:text-[#f9f9f9] md:text-[15.5px] duration-150 ' 
                    : 'text-[gray] md:bg-[#F3F3F3] '
                    }

                    >
                        <div className="flex items-center ">

                        <img src={num === 1? '/assets/user/userphotoW.png' :
                        '/assets/user/userphoto.png'}
                            className={`max-h-[30px]  `}
                            />

                            <h2>
                                {user ? user.email : 'Não logado'}
                            </h2>
                           
                        </div>
                    </NavLink>

                </li>
            </ul>
         </nav>
      </header>
    )
}

export default HeaderDesk