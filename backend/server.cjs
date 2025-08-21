const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db.cjs");

// Middleware
app.use(express.json());

// Permitir requisições do frontend
app.use(cors({
  origin: "http://localhost:5173"
}));

// Serve arquivos estáticos da pasta /assets
app.use('/assets', express.static('assets'));

// GET: todos os gatos
app.get("/cats", (req, res) => {
  connection.query("SELECT * FROM gatinhos", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/sbemvindo", (req, res) => {
  console.log("Recebida requisição para /Sbemvindo");
  connection.query("SELECT * FROM bemvindo", (err, results) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Resultados:", results);
    res.json(results);
  });
});

app.get("/passo", (req, res) => {
  console.log("Recebida requisição para /passo");
  connection.query("SELECT * FROM passo", (err, results) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Resultados:", results);
    res.json(results);
  });
});

app.get("/falamDnos", (req, res) => {
  console.log("Recebida requisição para /falamDnos");
  connection.query("SELECT * FROM falamDnos", (err, results) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Resultados:", results);
    res.json(results);
  });
});

app.get("/doacoes", (req, res) => {
  console.log("Recebida requisição para /falamDnos");
  connection.query("SELECT * FROM doacoes", (err, results) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Resultados:", results);
    res.json(results);
  });
});

app.get("/remedios", (req, res) => {
  console.log("Recebida requisição para /remedios");
  connection.query("SELECT * FROM remedios", (err, results) => {
    if (err) {
      console.log("Erro SQL:", err);
      return res.status(500).json({ error: err.message });
    }
    console.log("Resultados:", results);
    res.json(results);
  });
});




// GET: gato específico pelo ID
app.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM gatinhos WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Gato não encontrado" });
    res.json(results[0]);
  });
});

// POST: adicionar um novo gato
app.post("/cats", (req, res) => {
  const { nome, raca, idade, foto_ulr } = req.body;
  const sql = "INSERT INTO gatinhos (nome, raca, idade, foto_ulr) VALUES (?, ?, ?, ?)";
  connection.query(sql, [nome, raca, idade, foto_ulr], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, nome, raca, idade, foto_ulr });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
