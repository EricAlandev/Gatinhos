import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Get
export function CatGet() {
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/cats`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          image: cat.foto_ulr,
          nome: cat.nome,
          breed: cat.raca || "Sem raçã definida",
          description: cat.descricao || "-",
          idade: cat.idade
        }));
        setCatList(promises);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { catList, loading };
}

export function SlideBV() {
  const [slideCat, setSlideCat] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/sbemvindo`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          image: cat.foto_url,
          texto: cat.texto || "-"
        }));
        setSlideCat(promises);
      })
      .catch(() => 'error');
  }, []);

  return { slideCat };
}

export function Passos() {
  const [passo, setPasso] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/passo`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          image: cat.foto_url
        }));
        setPasso(promises);
      })
      .catch(() => 'error');
  }, []);

  return { passo };
}

export function FalamDnos() {
  const [falam, setFalam] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/falamDnos`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          nome: cat.nome,
          descricao: cat.descricao
        }));
        setFalam(promises);
      })
      .catch(() => 'error');
  }, []);

  return { falam };
}

export function Doacoes() {
  const [doacao, setDoacao] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/doacoes`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          image: cat.foto_url,
          descricao: cat.descricao
        }));
        setDoacao(promises);
      })
      .catch(() => 'error');
  }, []);

  const GetById = (id) => doacao.find(d => d.id === id);

  return { doacao, GetById };
}

export function Remedios() {
  const [remedio, setRemedio] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/remedios`)
      .then(res => {
        const promises = res.data.map(cat => ({
          id: cat.id,
          imageT: cat.imaget,
          imageB: cat.imageb,
          titulo: cat.titulo,
          descricao: cat.remedio
        }));
        setRemedio(promises);
      })
      .catch(() => 'error');
  }, []);

  const GetById = (id) => remedio.find(d => d.id == id);

  return { remedio, GetById };
}
