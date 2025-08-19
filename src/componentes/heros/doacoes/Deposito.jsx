


import { Doacoes } from "../../../api/CatGet"
import DoeEsq from "../../esqueletos/DoeEsq"

const DoacRecor = () => {

    const { GetById} = Doacoes()


    return(
      <main>
          <section className="flex">
          <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
        <h1 className=" inline-block min-w-[249px] mt-[35px] pb-[7px] font-[Inter] font-medium text-[#373939] text-center text-[20px] border-b-[3px] border-[gray]">DEPOSITO BANCÁRIO</h1>
        <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
          </section>

          <section className="flex flex-col ">
            <img src={GetById(1)?.image} alt=""
            className=" max-h-[430px] mt-[20px] ml-8 mr-8"
             />

             <p className="min-w-[200px] mt-[20px] ml-4 mr-4 
               font-[Inter] font-[400] text-center text-[17.5px]
             ">{GetById(1)?.descricao}</p>
          </section>
      </main>
    )
}

export default DoacRecor