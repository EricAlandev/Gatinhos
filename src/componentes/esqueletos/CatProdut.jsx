
import { useState } from 'react'
import { useEffect } from 'react'
import {CatGet} from '../../api/CatGet'
import { AnimatePresence, motion} from 'framer-motion'

const CatProduct = () => {

    const {catList, loading} = CatGet()
    const [popUp, setPopUp] = useState(false)
    const [popUpImage, setPopUpImage] = useState()


    //função pra ativar popUp e fazer a imagem ser a dele
    const openPopUp = (image) => {
        setPopUp(true)
        
        setPopUpImage(image)

    }  

    const closePopUp = () => {
        setPopUp(false)
        setPopUpImage(null)
    }
     
    //Função para ao PopUp ser true, ele travar a tela
    useEffect(() => {
            if (popUp) {
              document.body.classList.add("overflow-hidden");
            } else {
              document.body.classList.remove("overflow-hidden");
            }
          }, [popUp]);
    
    //Quando estiver carregando a page, terá essa parte de loading
    if (loading) {
 
        return(
            <div className="relative h-screen w-full bg-[white]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded">
                    <h2 className='font-[Inter] font-bold text-[24px]'>Carregando. . .</h2>
                </div>
</div>

        )
    }

    return(
     <>
               {/*Overlay */}
               <div className={` min-w-[440px] inset-0  opacity-52 bg-black z-40
               ${popUp ? 'fixed' : 'hidden'} `}
               onClick={() => 
                setPopUp(false)
               }
               ></div>

        {/*array de gatos */}
        <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:max-w-[1420px] md:mx-auto md:mt-[20px]'>
        {catList.map( (cat) => (
            
            <div 
            key={cat.id}
          className='relative max-w-[350px] mx-auto pt-[35px]'
          >
            <img src={cat.image} alt=""
            className='min-w-[350px]  max-h-[225px] md:scale-[1.3]'
             /> 
            
            {/*Nome - raça, idade */}
            <section className='flex items-center gap-2.5 mt-[10px] md:mt-[42px] md:ml-[-47px]'>
                <h2 className='font-[Inter] font-medium text-[#0A0A0A] text-[16.5px] md:text-[18px]'>{cat.nome}</h2>
                <h2 className={` font-[Montserrat] font-medium 
                 text-[15px] md:text-[18px] border-b-[0.5px]
                ${cat.breed === 'Siamês' ? 'text-[black]' : 
                  cat.breed === 'Maine Coon' ? 'text-[brown]' : 
                  cat.breed === 'Ragdoll' ? 'text-[gray]' : 
                  cat.breed === 'Sphynx' ? 'text-[gray]' : 
                  cat.breed === 'Bengal' ? 'text-[#DF1F1F45]' : 
                  cat.breed === 'Norueguês da Floresta' ? 'text-[gray]' : 
                  cat.breed === 'Abissínio' ? 'text-[gray]' : 
                  cat.breed === 'Scottish Fold' ? 'text-[gray]' : 
                  'text-[gray]'
                }
                `}>{cat.breed}</h2> {/*Raça*/}
                <h2 className='font-[Montserrat] font-bold'>{cat.idade} anos</h2>
            </section>

            {/*Saiba mais. O span é um espécie de background e o Saiba mais está com o z-50 pra não ser afetado pelo opacity. */}
            <>
                {/*Feito para ficar sobre a imagem e ao clicar se criar o popUp 
                */}
                <span className='absolute top-57 md:top-65 md:left-[-51.5px] w-full md:w-[455px] pt-[5px] pb-[4px] bg-[black] opacity-75
                '
                >.</span>

                <h2 className=' absolute top-57 md:top-64.5 md:left-[-35px] w-full md:w-[421.5px]  pt-[5px] pb-[2px]
                text-[#D1D1D1] text-center text-[16px] z-10 cursor-pointer'
                onClick={() => (
                    openPopUp(cat)
                )}
                >Saiba Mais</h2>
            </>



            {/*PopUp*/}
            <AnimatePresence>
            {popUp && (
                <>
                
                
                <motion.div
                key={cat.id}
                className='fixed inset-0 z-40 flex items-center justify-center
                '
                initial={{opacity: 0, y:-50, }}
                animate={{opacity: 1, y:0, }}
                exit={{opacity: 0, y:-50, }}
                transition={{duration: 0.4, ease: 'easeOut'}}

                >

                    {/*PopUp em si */}
                    <div className='relative 
                    w-full md:max-w-[650px] mx-4 
                    bg-[#FAFAFA] z-50'>
                        
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='ml-[20px] pt-[15px] pl-[10px]
                                font-[Inter] font-medium text-[black] text-[21.5px] underline'>{popUpImage.nome}</h2> 
                                
                                <div className='flex'>
                                    <h2 className='ml-[20px] pl-[10px]  
                                    font-[Inter] font-medium text-[black] text-[16.5px]'>{popUpImage.breed}</h2> {/*breed = raça */}

                                    <h2 className=' pl-[5px]  
                                    font-[Montserrat] font-bold text-[black] text-[16.5px]'>- {popUpImage.idade}</h2>
                                </div>
                            </div>

                            <img src="/assets/close.png" alt=""
                            className='min-h-[26px] pr-[10px] md:pr-[20px] cursor-pointer'
                            onClick={() => (
                                closePopUp()
                            )}
                             />
                        </div>
                        
                        {/*Imagem do gato */}
                        <img src={popUpImage?.image} alt=""
                        className='min-w-[300px] max-w-[340px] min-h-[250px] max-h-[250px]
                         mx-auto mt-[15px] pb-[20px]'/>

                        <p className='md:max-w-[450px] md:mx-auto ml-[30px] text-[18.5px] md:text-[20px]'>{popUpImage?.description}</p>

                        {/*Botão de adoção */}

                        <div className='flex justify-center pt-[15px] md:pt-[20px] pb-[15px]  md:pb-[20px]'>
                            <button className=' min-w-[150px] p-1.5 bg-[#242626] rounded-[8px] font-bold text-[white] 
                            '>
                                Adotar
                            </button>
                        </div>

                    </div>

                 
                </motion.div>
                </>
            )}
            </AnimatePresence>


            {cat.description && (
                <p className='mt-[10px] md:ml-[-47px] md:pb-[15px] font-[Inter] md:font-light text-[14.5px] md:text-[15.5px]'>{cat.description}</p>
            )}
          </div>
        ))}
        </div>
     </>
    )
}

export default CatProduct