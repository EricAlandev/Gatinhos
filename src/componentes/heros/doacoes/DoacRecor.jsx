
import { Doacoes } from "../../../api/CatGet"
import DoeEsq from "../../esqueletos/DoeEsq"

const DoacRecor = () => {

    const { GetById} = Doacoes()


    return(
      <main>
          <section className="flex">
          <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
        <h1 className=" inline-block min-w-[249px] mt-[35px] pb-[7px] font-[Inter] font-medium text-[#373939] text-center text-[20px] border-b-[3px] border-[gray]">DOAÇÕES <strong>RECORRENTES</strong></h1>
        <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
          </section>

          <section className="flex flex-col ">
            <img src={GetById(2)?.image} alt=""
            className="mt-[20px] ml-8 mr-8"
             />

             <p className="min-w-[200px] mt-[20px] ml-4 mr-4 
               font-[Inter] font-[400] text-[17.5px]
             ">{GetById(2)?.descricao}</p>
          </section>

          {/*Quantidade de doação */}

          <section className="flex flex-col">
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