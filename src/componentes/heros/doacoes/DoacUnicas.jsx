
import { Doacoes } from "../../../api/CatGet"
import DoeEsq from "../../esqueletos/DoeEsq"


const DoacUnicas = () => {

    const { GetById} = Doacoes()

    return(
     <main>
        <section className="flex">
            <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
            <h1 className=" inline-block min-w-[200px] mt-[35px] pb-[7px] font-[Inter] font-medium text-[#373939] text-center text-[20px] border-b-[3px] border-[gray]">DOAÇÕES <strong>ÚNICAS</strong></h1>
            <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
        </section>

        <section>
            <img src={GetById(3)?.image} alt=""
            className=" mx-auto mt-[20px]"
             />
            <p className="min-w-[200px] mt-[20px] ml-4 mr-4 
               font-[Inter] font-[400] text-[17.5px]
             ">{GetById(3)?.descricao}</p>
        </section>

        <section>
            <DoeEsq 
            legenda='doar'
            quantia='QUALQUER VALOR'
            url='/assets/doacoes/DoeAgora.svg'
            />
        </section>
     </main>
    )
}

export default DoacUnicas