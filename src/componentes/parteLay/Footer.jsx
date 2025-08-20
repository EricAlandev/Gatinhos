

const Footer = () => {

    return(
     <footer className=" bg-[#373939] pb-[20px]">
        <div className="md:max-w-[1200px] md:mx-auto">
            <div className="flex flex-col  ml-4 mr-4">
                <h2 className="     pt-2 font-[Inter] font-medium
            text-[gray] text-[20px]
            border-b-[2px] border-[gray]">Contato</h2>

               <div className="flex items-center ">
                   <img src="/assets/footer/footer.png" alt=""
                   className=" max-h-[50px] mt-[10px] p-2 border-[2px] border-[gray] rounded-[50%]"
                    />
                    <h2 className=" ml-[10px] text-[#D1D1D1]">SITESEMFINSLUCRATIVOS@gmail.com.br</h2>
               </div>
            </div>
        </div>
     </footer>
    )
}

export default Footer