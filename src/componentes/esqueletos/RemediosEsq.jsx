
import { Remedios } from "../../api/CatGet"

const RemediosEsq = ({id}) => {

    const {GetById} = Remedios()

    const remedios = GetById(id)

    if (!remedios) return(

        <p className="text-[black]">
            Carregando ....
        </p>
    )

    return(
      <div className={`flex flex-col gap-4 ml-4 mr-4 
      ${
        id === 1 ? ' md:pl-3.5 md:pr-1.5 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 2 ? 'md:pl-3.5 md:pr-1.5 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 3 ? 'md:max-h-[170px] md:pl-3.5 md:pr-1.5 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 4 ? 'md:pl-1.5 md:pr-1.5 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 5 ? 'md:pl-1.5 md:pr-1.5 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 6 ? 'md:pl-2 md:border-l-[2px] border-[#D1D1D1D1]' : 
        id === 7 ? 'md:pl-2 md:border-l-[2px] border-[#D1D1D1D1]' : ''
        
      }
      `}>
         <img src={remedios.imageT} alt="" 
          className={`md:min-w-[400px]
            ${
              id === 4 ? 'pr-2' : 
              id === 5 ? 'pr-2' : ''}
             `}
         />
         <h2 className={`font-bold font-[Inter] 
         ${id === 1 ? 'font-bold' :
           id === 2 ? 'font-bold' : 
           id === 3 ? 'font-bold' : 
           'font-light'
         } `}>{remedios.titulo}</h2>
         <p  className="font-light font-[Inter]">{remedios.descricao}</p>
         <img src={remedios.imageB} alt=""
          className={` ${id === 3 ? 'mb-[20px]' : 
                        id === 5 ? 'mt-[-35px] mb-[20px]' : 
                        id === 7 ? 'mt-[-36px] mb-[5px]' : ''

          }`}
         />
      </div>
    )
}

export default RemediosEsq