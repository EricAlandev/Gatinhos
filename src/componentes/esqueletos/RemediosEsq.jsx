
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
      <div className="pb]">
         <img src={remedios.imageT} alt="" />
         <h2 className="font-bold">{remedios.titulo}</h2>
         <p>{remedios.descricao}</p>
         <img src={remedios.imageB} alt="" />
      </div>
    )
}

export default RemediosEsq