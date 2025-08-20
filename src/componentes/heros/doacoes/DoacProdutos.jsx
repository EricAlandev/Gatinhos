
import RemediosEsq from "../../esqueletos/RemediosEsq"

const DoacProdutos = () => {

    return(
        <>
        <section className="flex md:max-w-[1200px] md:mx-auto mt-[10px] md:mt-[35px]">
            <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
            <h1 className=" inline-block min-w-[360px] mt-[20px] pb-[7px] font-[Inter] font-medium text-[#373939]  text-[20px] border-b-[3px] border-[gray]">
                PASSOS PARA ADOTAR UM GATINHO
            </h1>
            <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
        </section>   

        {/* */}
         <section className="flex flex-col md:flex-row md:max-w-[1240px] md:mx-auto md:gap-3 md:mt-[15px] md:pb-[25px]">
            <div className="flex flex-col md:max-w-[390px]">
                <RemediosEsq
                    id={1}
                />

                <RemediosEsq
                    id={2}
                />

                <RemediosEsq
                    id={3}
            />
            </div>

            <div className="flex flex-col md:max-w-[390px] ">
                    <RemediosEsq
                        id={4}
                    />

        <RemediosEsq
                        id={5}
                    />
            </div>

            

            <div className="flex flex-col md:max-w-[390px]">
            <RemediosEsq
                        id={6}
                    />

        <RemediosEsq
                        id={7}
                    />
            </div>
         </section>
        </>
        
    )
}

export default DoacProdutos