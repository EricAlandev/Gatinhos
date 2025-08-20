
import { Doacoes } from "../../../api/CatGet"
import DoeEsq from "../../esqueletos/DoeEsq"

const DoacRecor = () => {

    const { GetById} = Doacoes()


    return(
      <main>
          <section className="flex md:max-w-[1200px] md:mx-auto">
          <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
        <h1 className=" inline-block min-w-[249px] mt-[35px] pb-[7px] font-[Inter] font-medium text-[#373939] text-center text-[20px] border-b-[3px] border-[gray]">DOAÇÕES <strong>RECORRENTES</strong></h1>
        <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
          </section>

          <section className="flex flex-col md:flex-row md:gap-70">
            {/*foto do mobile */}
            <img src={GetById(2)?.image} alt=""
            className="md:hidden md:min-w-[450px] max-w-[550px] md:mx-auto mt-[20px] ml-8 mr-8"
             />

             <p className="min-w-[200px] md:min-w-[450px] md:max-w-[450px] md:mx-auto mt-[20px] md:mt-[120px] ml-4 mr-4 md:mr-0
               font-[Inter] font-[400] text-[17.5px]
             ">{GetById(2)?.descricao}</p>

              {/*foto do desktop */}
            <img src={GetById(2)?.image} alt=""
            className="hidden md:block md:min-w-[450px] max-w-[450px] md:mx-auto mt-[20px] ml-8 md:ml-0 mr-8"/>
          </section>

          {/*Quantidade de doação */}

          <section className="flex flex-col md:flex-row md:items-center  md:max-w-[1200px] md:mx-auto  md:mt-[20px]">
             <DoeEsq
             legenda='R$'
             quantia='10,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='20,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='30,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='40,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='50,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='100,00'
             url='/assets/doacoes/Doe.svg'
             />

<DoeEsq
             legenda='R$'
             quantia='200,00'
             url='/assets/doacoes/Doe.svg'
             />
          </section>
      </main>
    )
}

export default DoacRecor