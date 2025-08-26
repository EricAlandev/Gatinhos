import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AnimatePresence,motion } from "framer-motion";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [mudarNome, setMudarNome] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  const token = localStorage.getItem("userToken");

  const [novoNome, setNovoNome] = useState("");

  const handleChange = (e) => {
    setNovoNome(e.target.value);

  }

  const atualizarNome = async () => {
    if (!novoNome) return alert("Digite um novo nome");

    try {
      const response = await axios.put(
        `${BASE_URL}/usuarios`,
        {
          id: user.id, // id do usuário
          nome: novoNome, // novo valor
        },
      );

      console.log("Resposta PUT:", response.data);

      // Atualizar localStorage e estado
      setUser(response.data.data);
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      setMudarNome(false)
      alert(response.data.message);
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      alert("Erro ao atualizar nome");
    }
  };

  if (!token) {
    return (
      <div className="flex flex-col mt-[20px] min-h-[714.3px]">
        <h2 className="mt-[250px] font-[Inter] text-[30px] text-center">Não logado..</h2>
        <div className="flex justify-center items-center gap-10 mt-[15px]">
          <Link to={"/entrar"} className="min-w-[100px] p-2 bg-[#242626] text-[#D1D1D1] text-center rounded-[8px]">
            Entre
          </Link>
          <h2> ou</h2>
          <Link to={"/cadastro"} className="min-w-[100px] p-2 bg-[#242626] text-[#D1D1D1] text-center rounded-[8px]">
            Cadastre-se
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {user && (
        <main className="flex flex-col min-h-[703.5px] mt-[30px]">
          <div className="flex justify-center items-center ">
            <img src="/assets/user/userphoto.png" className="min-h-[50px]" />
            <h2 className="font-[Inter] font-medium text-[50px]">Olá!</h2>
          </div>

          <div className="flex justify-center items-center ">
            <h2 className="mt-[35px]">
              <span className="font-[Inter] font-bold text-[20px]">Nome :</span>
              <span className="ml-[10px] font-[Inter] font-light text-[17px]">{user.nome}</span>
            </h2>

            <img
              src="/assets/close.png"
              alt=""
              className="md:mt-[32px] md:ml-[20px] cursor-pointer"
              onClick={() => setMudarNome(true)}
            />
          </div>

            {/*Parte feita com o intuito de ser o droper caso queira mudar as informações */}
          <AnimatePresence>
          {mudarNome && (
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}   // agora sim, aparece
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}   // também corrigi para número (s em segundos)
            className="flex justify-center gap-2 mt-2"
          >
            <input
              type="text"
              value={novoNome}
              onChange={handleChange}
              placeholder="Digite novo nome"
              className="border px-2 py-1 rounded"
            />
            <button onClick={atualizarNome} className="bg-green-500 text-white px-3 rounded">
              Salvar
            </button>
            <button onClick={() => setMudarNome(false)} className="bg-red-500 text-white px-3 rounded">
              Cancelar
            </button>
          </motion.div>
          
          )}
          </AnimatePresence>

          <div className="flex justify-center items-center ">
            <h2 className="mt-[35px]">
              <span className="font-[Inter] font-bold text-[20px]">Email :</span>
              <span className="ml-[10px] font-[Inter] font-light text-[17px]">{user.email}</span>
            </h2>
          </div>

          <button
            onClick={handleLogout}
            className="max-w-[250px] mx-auto mt-[25px] p-4 font-[Inter] font-medium text-[white] bg-[red] rounded-[10px] cursor-pointer"
          >
            Deslogar
          </button>
        </main>
      )}
    </>
  );
};

export default UserPage;
