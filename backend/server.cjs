const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const connection = require("./db.cjs");

// Middleware
app.use(express.json());

// Permitir requisições de qualquer frontend
app.use(cors({ origin: "*" }));

// Servir arquivos estáticos da pasta /assets
app.use('/assets', express.static('assets'));

// Servir favicon padrão
app.get('/favicon.ico', (req, res) => res.sendStatus(204)); // sem conteúdo

// Rota raiz: apenas retorna uma mensagem para confirmar que a API está ativa
app.get("/", (req, res) => {
  res.json({ message: "API rodando! Acesse /cats para ver os gatinhos." });
});

// ROTAS DA API

app.get("/cats", (req, res) => {
  connection.query("SELECT * FROM gatinhos", (err, results) => {
    if (err) {
      console.error("Erro /cats:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/sbemvindo", (req, res) => {
  connection.query("SELECT * FROM bemvindo", (err, results) => {
    if (err) {
      console.error("Erro /sbemvindo:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/passo", (req, res) => {
  connection.query("SELECT * FROM passo", (err, results) => {
    if (err) {
      console.error("Erro /passo:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/falamDnos", (req, res) => {
  connection.query("SELECT * FROM falamDnos", (err, results) => {
    if (err) {
      console.error("Erro /falamDnos:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/doacoes", (req, res) => {
  connection.query("SELECT * FROM doacoes", (err, results) => {
    if (err) {
      console.error("Erro /doacoes:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/remedios", (req, res) => {
  connection.query("SELECT * FROM remedios", (err, results) => {
    if (err) {
      console.error("Erro /remedios:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM gatinhos WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Gato não encontrado" });
    res.json(results[0]);
  });
});

app.post("/cats", (req, res) => {
  const { nome, raca, idade, foto_ulr } = req.body;
  const sql = "INSERT INTO gatinhos (nome, raca, idade, foto_ulr) VALUES (?, ?, ?, ?)";
  connection.query(sql, [nome, raca, idade, foto_ulr], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, nome, raca, idade, foto_ulr });
  });
});

// Tratar rotas inexistentes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint não encontrado" });
});

// Porta
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
