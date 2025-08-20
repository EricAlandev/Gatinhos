


import { Doacoes } from "../../../api/CatGet"
import DoeEsq from "../../esqueletos/DoeEsq"

const DoacRecor = () => {

    const { GetById} = Doacoes()


    return(
      <main>
          <section className="flex md:max-w-[1200px] md:mx-auto">
          <h2 className="w-full ml-[10px] md:ml-0 border-b-[3px] border-[#373939]"></h2>
        <h1 className=" inline-block min-w-[249px] mt-[35px] pb-[7px] font-[Inter] font-medium text-[#373939] text-center text-[20px] border-b-[3px] border-[gray]">DEPOSITO BANCÁRIO</h1>
        <h2 className="w-full mr-[10px] md:mr-0 border-b-[3px] border-[#373939]"></h2>
          </section>

          <section className="flex flex-col md:flex-row md:justify-center md:gap-157.5">
            <img src={GetById(1)?.image} alt=""
            className=" md:min-w-[350px]  max-h-[430px] mt-[20px] md:ml-0 ml-8 md:mr-0 mr-8"
             />
          </section>
      </main>
    )
}

export default DoacRecor