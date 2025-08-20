
import { SwiperSlide, Swiper } from "swiper/react"
import { FalamDnos } from "../../../api/CatGet"

const OqueFalam = () => {

    const {falam} = FalamDnos()

    return(
     <main>
        <section className="flex md:max-w-[1000.5px] md:mx-auto  mt-[10px] pb-[10px] md:pb-[20px]">
                <h2 className="w-full ml-[  10px] border-b-[4px] border-[#373939]"></h2>
                <h1 className=" inline-block min-w-[240px] mt-[20px] pb-[7px] font-[Inter] font-medium text-[#373939]  text-[20px] text-center border-b-[4px] border-[gray]">
                    O QUE FALAM DE NÓS
                </h1>
                <h2 className="w-full mr-[10px] border-b-[4px] border-[#373939]"></h2>
        </section>   

        <section className="max-w-[320px]  md:max-w-[1000.5px] max-h-[140px] md:max-h-[160px] mx-auto mb-[15px]   ">
            <Swiper
                slidesPerView={1}
            
            breakpoints={{          
                640: {
                    slidesPerView : 1
                },
                1024: {
                    slidesPerView : 3
                }
            }}
            spaceBetween={80}
            >
                {falam.map((slide) => (
                    <SwiperSlide className="relative pb-[80px]
                    ">
                        
                        {/*Triângulo esquerdo */}
                        <img src="/assets/bemvindo/triangle.png" alt=""
                        className="absolute min-h-[40px] max-h-[40px] rotate-320 left-2.5 bottom-14.5 z-[1]"/>

                        {/*Triângulo direito */}
                        <img src="/assets/bemvindo/triangle.png" alt=""
                        className="absolute min-h-[40px] max-h-[40px]
                         rotate-120 bottom-14.5 right-0 z-[1]"
                        />

                        <div className="relative max-h-[140px] md:max-h-[200px] z-[2] overflow-hidden pl-2  border-l-[4px] border-[#D1D1D1]
                        ">
                            <h2 className={`w-max font-bold text-[18px] text-[#373939] border-b-[2px]
                            border-[#373939] `}>{slide.nome}</h2>
                            
                            <div className={`bg-[#373939] mt-[10px] px-3.5 
                                ${slide.id === 2 ? 'py-1.5 ' :  'py-4'}
                                `}>
                                <p className="text-[white] text-[15px]">{slide.descricao}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
     </main>
    )
}

export default OqueFalam