
//Formulário para entrar na conta

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Cadastro() {
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email:'',
    senha: '',
  });

  // Função genérica para atualizar qualquer input
  const handleChange = (e) => {
    const { name, value } = e.target; // pega o name e value do input
    setFormData({ ...formData, [name]: value }); // atualiza só o campo correto
  };

  // Função que envia os dados
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita reload da página

    try {
      const response = await axios.post(`${BASE_URL}/cadastro`, formData);
      console.log('Usuário criado:', response.data);
      alert(response.data.message);

      // Limpar formulário
      setFormData({nome: '', email: '', senha: '' });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <div className='min-h-[719px] md:min-h-[684px] ml-4 mr-4 '>
      <section className='flex md:max-w-[1187px] md:mx-auto md:mt-[20px] mt-[15px] '>
        <h2 className='w-full border-b-[2px] boder-[#373939]'></h2>
          <h2 className='md:min-w-[150px] text-center text-[#373939] text-[23px] border-[#9E9F9F] border-b-[2px]'>
            Cadastro
          </h2>
        <h2 className='w-full border-b-[2px] border-[#373939]'></h2>
      </section>

      <div className='mt-[20px]'>
        <h2 className='font-[Inter] font-light text-center text-[18px]'>Vem fazer parte da gente!</h2>
      </div>

      <form onSubmit={handleSubmit}
      className='md:max-w-[1200px] md:mx-auto '
      >

        <div className='flex flex-col md:max-w-[400px] md:mx-auto md:mt-[10px]'>
          <label htmlFor='nome'
          className='mt-[12px] md:mt-[10px] font-[Inter] text-[15px] cursor-pointer'>
            Nome
          </label><br />
          
          <input
            type="text"
            id='nome'
            name="nome" // name precisa bater com a chave do estado
            value={formData.nome}
            onChange={handleChange} // usa a função genérica
            placeholder="Informe o seu nome completo"
            className='mt-[-18px] md:mt-[-20px] mb-[15px] px-2 md:py-1 py-2.5  border-1  border-[gray] rounded-[4px] placeholder:pl-0.5 placeholder:font-[Inter]'
            required
          />
        </div>

        <div className='flex flex-col md:max-w-[400px] md:mx-auto md:mt-[10px]'>
          <label htmlFor='email'
          className='mt-[12px] md:mt-[10px] font-[Inter] text-[15px] cursor-pointer'>
            Email
          </label><br />
          
          <input
            type="email"
            id='email'
            name="email" // name precisa bater com a chave do estado
            value={formData.email}
            onChange={handleChange} // usa a função genérica
            placeholder="Informe o seu email completo"
            className='mt-[-18px] md:mt-[-20px] mb-[15px] px-2 md:py-1 py-2.5  border-1  border-[gray] rounded-[4px] placeholder:pl-0.5 placeholder:font-[Inter]'
            required
          />
        </div>

        <div className='flex flex-col md:max-w-[400px] md:mx-auto md:mt-[10px]'>
          <label
           htmlFor='senha'
           className=' font-[Inter] text-[15px] cursor-pointer'
          >Senha</label><br />
          <input
            type="password"
            id='senha'
            name="senha" // name precisa bater com a chave do estado
            value={formData.senha}
            onChange={handleChange} // usa a função genérica
            placeholder="Digite sua senha"
            className='mt-[-18px] md:mt-[-20px] mb-[15px] px-2 md:py-1 py-2.5  border-1  border-[gray] rounded-[4px] placeholder:pl-0.5 placeholder:font-[Inter]'
            required
          />
        </div>

        <div className='md:flex md:justify-center'>
            <Link
            to={'/entrar'}
            className='w-max md:mt-[10px] pb-[1px] border-b-[0.5px] md:hover:transform md:hover:scale-[1.03] duration-120'>
                Já possuo conta
            </Link>
        </div>

        <div className='flex justify-center md:mt-[30px] md:mb-[50px]'>
          <button type="submit" 
          className='min-w-[200px] md:min-w-[400px] mt-[10px] md:mt-0 mb-[10px] md:mb-0 p-2 text-[#D1D1D1] bg-[#373939] rounded-[8px] cursor-pointer'
          >Entrar</button>
        </div>
      </form>
    </div>
  );
}
