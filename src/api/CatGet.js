import { useState, useEffect } from 'react';
import axios from 'axios';

//Get
export function CatGet() {
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);

  //Page /gatinhos
  useEffect(() => {
    axios.get('http://localhost:3000/cats')
      .then(res => {
        const promises = res.data.map(cat =>
            ({
              id: cat.id,
              image: cat.foto_ulr,
              //breed é uma array dentro da api cat. Essa array terá os valores como a a raçã e a descrição. Por isso breed pra verificar se existe e pegar a raçã
              nome: cat.nome,
              breed: cat.raca || "Sem raçã definida",
              //Description pra verificar se existe e pegar a descrição
              description: cat.descricao || "-",
              idade: cat.idade
            })

        );
        setCatList(promises);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return {catList,loading};
}

export function SlideBV () {
    //Page /bemvindo
    const [slideCat, setSlideCat] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/sbemvindo')
        .then(res => {
          const promises = res.data.map(cat =>
              ({
                id: cat.id,
                image: cat.foto_url,
                texto: cat.texto || "-",
              })
  
          );
          setSlideCat(promises);
        })
        .catch(() => 'error');
    }, []);

  return {slideCat}
}

  export function Passos () {
    //Page /bemvindo - parte da adoção
    const [passo, setPasso] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/passo')
        .then(res => {
          const promises = res.data.map(cat =>
              ({
                id: cat.id,
                image: cat.foto_url,
              })
  
          );
          setPasso(promises);
        })
        .catch(() => 'error');
    }, []);

  return {passo}
}
export function FalamDnos () {
  //Page /bemvindo - parte das avaliações
  const [falam, setFalam] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/falamDnos')
      .then(res => {
        const promises = res.data.map(cat =>
            ({
              id: cat.id,
              nome: cat.nome,
              descricao: cat.descricao
            })

        );
        setFalam(promises);
      })
      .catch(() => 'error');
  }, []);

return {falam}
}

export function Doacoes () {
  //Page /doacoes - parte das avaliações
  const [doacao, setDoacao] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/doacoes')
      .then(res => {
        const promises = res.data.map(cat =>
            ({
              id: cat.id,
              image: cat.foto_url,
              descricao: cat.descricao
            })

        );
        setDoacao(promises);
      })
      .catch(() => 'error');
  }, []);

  const GetById = (id) => doacao.find((d) => d.id === id)


return {doacao, GetById}
}

export function Remedios () {
  //Page /doacoes - parte das avaliações
  const [remedio, setRemedio] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/remedios')
      .then(res => {
        const promises = res.data.map(cat =>
            ({
              id: cat.id,
              imageT: cat.imaget,
              imageB: cat.imageb,
              titulo: cat.titulo,
              descricao: cat.remedio
            })

        );
        setRemedio(promises);
      })
      .catch(() => 'error');
  }, []);

  const GetById = (id) => remedio.find((d) => d.id == id)


return {remedio, GetById}
}