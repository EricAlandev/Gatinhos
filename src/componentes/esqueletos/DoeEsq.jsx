
const DoeEsq = ({ legenda,quantia, url}) =>{

    return(
      <div className=" mt-[8px] text-[gray]">
        <h2 className="text-center">{legenda}  <span className="text-[40px]">{quantia}</span></h2>
        <img src={url} alt=""
        className="ml-6 mr-6"
         />
      </div>
    )
}

export default DoeEsq