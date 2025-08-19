
import { Passos } from "../../../api/CatGet"

const PaPasso = () => {
    const {passo} = Passos()

    return(
     <main>
        <section className="flex mt-[10px]">
                <h2 className="w-full ml-[10px] border-b-[3px] border-[#373939]"></h2>
                <h1 className=" inline-block min-w-[360px] mt-[20px] pb-[7px] font-[Inter] font-medium text-[#373939]  text-[20px] border-b-[3px] border-[gray]">
                    PASSOS PARA ADOTAR UM GATINHO
                </h1>
                <h2 className="w-full mr-[10px] border-b-[3px] border-[#373939]"></h2>
        </section>   

        <section className="flex flex-col gap-2 mt-[20px] pb-[20px]">
            {passo.map((item) => (
                <img src={item.image} alt=""
                className="w-full pl-4 pr-4"
                 />
            ))}
        </section> 
     </main>
    )
}

export default PaPasso