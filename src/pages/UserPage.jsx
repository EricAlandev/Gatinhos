
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

const UserPage = () => {

    //Serve para verificar se está logado ou não. Não pede o token, poi é apenas pra saber do login.
          const [user, setUser] = useState(null);
    
          useEffect(() => {
            const userData = localStorage.getItem("userData");
            if (userData) {
                //Se existir o userData (os dados da api de login), ele faz o user ter os valores
              setUser(JSON.parse(userData));
            }
        
          }, []);

          //sistema de deslogar 

          const handleLogout = () => {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userData");
            setUser(null)
          }

          const token = localStorage.getItem("userToken");

          if (!token) {
            return(
              <div className="flex flex-col mt-[20px] min-h-[714.3px]">

                    <h2 className="mt-[250px] font-[Inter] text-[30px] text-center">
                        Não logado.. 
                    </h2>

                    <div className="flex justify-center items-center gap-10 mt-[15px]">
                        <Link
                        to={'/entrar'}
                        className="min-w-[100px] p-2 bg-[#242626] text-[#D1D1D1] text-center rounded-[8px]"
                        >
                        Entre 
                        </Link>

                        <h2> ou</h2>
                        <Link
                        to={'/cadastro'}
                        className="min-w-[100px] p-2 bg-[#242626] text-[#D1D1D1] text-center rounded-[8px]"
                        >
                            Cadastre-se
                        </Link>
                    </div>
              </div>
            )
          }

    return(
        <>
            {user && (
                <main className="flex flex-col min-h-[703.5px] mt-[30px]">
                    <div className="flex justify-center items-center ">
                        <img src="/assets/user/userphoto.png"
                        className="min-h-[50px]"
                        />
                        <h2 className="font-[Inter] font-medium text-[50px]">Olá!</h2>
                    </div>

                    <div className="flex justify-center items-center ">
                        <h2 className="mt-[35px]"> 
                            <span className="font-[Inter] font-bold text-[20px]">Email :</span> 
                            
                            <span className="ml-[10px] font-[Inter] font-light text-[17px]">
                                {user.email}
                            </span>
                        </h2>
                    </div>
                    
                        <button
                        onClick={() =>
                            handleLogout()
                        }
                        className="max-w-[250px] mx-auto mt-[25px] p-4 font-[Inter] font-medium text-[white] bg-[red] rounded-[10px] cursor-pointer"
                        >Deslogar
                        </button>
                </main>
            )}
        </>
    )
}

export default UserPage