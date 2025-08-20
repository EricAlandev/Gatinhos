
const DoeEsq = ({ legenda,quantia,quantia2, url, tamanho}) =>{

  /*Legenda - é o valor que pode ser alocado mais a esquerda como R$ ou 
              palavras como 'doar'
  *quantia*   - é a parte de cima do texto
  *quantia2*  - é a parte de baixo do texto (opicional)
  *url*       - url da imagem em si
  *tamanho*   - caso queira mudar o tamanho da imagem, se pode mudar a partir o w.


  */

    return(
      <div className="md:max-w-[170px] mt-[8px] text-[gray]">
        {/*Div Pai*/}
        <div className="flex flex-col leading-[45px] mt-[25px]">
              {/*Div feita para a legenda e a quantia.*/}
              <div className="flex justify-center pb-[5px]">
                  <h2 className={`mt-[1px] md:ml-[110px] mr-[10px]`}>{legenda}  
                  </h2>
                  <span className={`text-[40px]`}>{quantia}</span>
              </div>

              <span className={`ml-[180px] md:ml-[116px] mb-[5px] text-[40px] `}>{quantia2}</span>
          </div>

        <img src={url} alt=""
        className={`ml-6 mr-6 md:max-w-[200px] md:min-h-[50px] ${tamanho}`}
         />
      </div>
    )
}

export default DoeEsq
