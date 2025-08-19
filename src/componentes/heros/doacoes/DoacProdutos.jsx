
import RemediosEsq from "../../esqueletos/RemediosEsq"

const DoacProdutos = () => {

    return(
        <>
        <section className="flex mt-[10px]">
            <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
            <h1 className=" inline-block min-w-[360px] mt-[20px] pb-[7px] font-[Inter] font-medium text-[#373939]  text-[20px] border-b-[3px] border-[gray]">
                PASSOS PARA ADOTAR UM GATINHO
            </h1>
            <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
        </section>   

        {/* */}
         <section className="flex flex-col">
            <RemediosEsq
                id={1}
            />

            <RemediosEsq
                id={2}
            />

            <RemediosEsq
                id={3}
            />

<RemediosEsq
                id={4}
            />

<RemediosEsq
                id={5}
            />
         </section>
        </>
        
    )
}

export default DoacProdutos