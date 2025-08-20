
import { Passos } from "../../../api/CatGet"

const PaPasso = () => {
    const {passo} = Passos()

    return(
     <main>
        <section className="flex mt-[10px] md:mx-auto  md:max-w-[1000.5px]">
                <h2 className="w-full ml-[10px] md:ml-0 border-b-[3px] border-[#373939]"></h2>
                <h1 className=" inline-block min-w-[360px] mt-[20px] pb-[7px] font-[Inter] font-medium text-[#373939]  text-[20px] border-b-[3px] border-[gray]">
                    PASSOS PARA ADOTAR UM GATINHO
                </h1>
                <h2 className="w-full mr-[10px] md:mr-0 border-b-[3px] border-[#373939]"></h2>
        </section>   

        <section className="flex flex-col md:flex-row md:max-w-[1001px] md:mx-auto gap-2 mt-[20px] pb-[20px] ">
            {passo.map((item) => (
                <div className={`w-full md:max-w-[328.5px] pl-4 md:pl-0 pr-4 md:pr-0    transition-transform hover:scale-[1.1] hover:rotate-2 duration-300 overflow-hidden ${item.id === 1 ? 'hover:rotate-8' : 
                        item.id === 3 ? 'hover:rotate-10' : ''

                }`}>
                        <img src={item.image} alt=""
                    className="object-contain
                     
                    "
                 />
                </div>
            ))}
        </section> 
     </main>
    )
}

export default PaPasso