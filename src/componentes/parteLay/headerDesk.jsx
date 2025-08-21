import { Link, NavLink } from "react-router-dom"


const HeaderDesk = () => {

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
            </ul>
         </nav>
      </header>
    )
}

export default HeaderDesk