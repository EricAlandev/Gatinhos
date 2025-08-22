import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Get
export function CatGet() {
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/cats`)
      .then(res => {
        const cats = res.data.map(cat => ({
          id: cat.id,
          image: cat.foto_ulr || cat.foto_url, // Adicionei fallback
          nome: cat.nome,
          breed: cat.raca || "Sem raça definida", // Corrigi o acento
          description: cat.descricao || "-",
          idade: cat.idade
        }));
        setCatList(cats);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar gatos:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { catList, loading, error };
}

export function SlideBV() {
  const [slideCat, setSlideCat] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/sbemvindo`)
      .then(res => {
        const slides = res.data.map(item => ({
          id: item.id,
          image: item.foto_url,
          texto: item.texto || "-"
        }));
        setSlideCat(slides);
      })
      .catch(err => {
        console.error('Erro ao buscar slides:', err);
        setError(err.message);
      });
  }, []);

  return { slideCat, error };
}

export function Passos() {
  const [passo, setPasso] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/passo`)
      .then(res => {
        const passos = res.data.map(item => ({
          id: item.id,
          image: item.foto_url
        }));
        setPasso(passos);
      })
      .catch(err => {
        console.error('Erro ao buscar passos:', err);
        setError(err.message);
      });
  }, []);

  return { passo, error };
}

export function FalamDnos() {
  const [falam, setFalam] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/falamdnos`)
      .then(res => {
        const depoimentos = res.data.map(item => ({
          id: item.id,
          nome: item.nome,
          descricao: item.descricao
        }));
        setFalam(depoimentos);
      })
      .catch(err => {
        console.error('Erro ao buscar depoimentos:', err);
        setError(err.message);
      });
  }, []);

  return { falam, error };
}

export function Doacoes() {
  const [doacao, setDoacao] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/doacoes`)
      .then(res => {
        const doacoes = res.data.map(item => ({
          id: item.id,
          image: item.foto_url,
          descricao: item.descricao
        }));
        setDoacao(doacoes);
      })
      .catch(err => {
        console.error('Erro ao buscar doações:', err);
        setError(err.message);
      });
  }, []);

  const GetById = (id) => doacao.find(d => d.id === id);

  return { doacao, GetById, error };
}

export function Remedios() {
  const [remedio, setRemedio] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/remedios`)
      .then(res => {
        const remedios = res.data.map(item => ({
          id: item.id,
          imageT: item.imaget || item.imageT, // Fallback
          imageB: item.imageb || item.imageB, // Fallback
          titulo: item.titulo,
          descricao: item.remedio || item.descricao // Fallback
        }));
        setRemedio(remedios);
      })
      .catch(err => {
        console.error('Erro ao buscar remédios:', err);
        setError(err.message);
      });
  }, []);

  const GetById = (id) => remedio.find(d => d.id === id); // Corrigido para ===

  return { remedio, GetById, error };
}