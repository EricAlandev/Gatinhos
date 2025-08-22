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

// Health Check melhorado
app.get("/", async (req, res) => {
  try {
    // Testar conexão com banco
    await connection.execute('SELECT 1');
    res.json({ 
      status: "✅ API ativa", 
      database: "✅ Conectado",
      message: "Use /cats para ver os dados.",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      status: "✅ API ativa", 
      database: "❌ Erro de conexão",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// ROTAS DA API ATUALIZADAS (usando async/await)
app.get("/cats", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM gatinhos");
    res.json(results);
  } catch (err) {
    console.error("Erro /cats:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/cats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await connection.execute("SELECT * FROM gatinhos WHERE id = ?", [id]);
    
    if (results.length === 0) {
      return res.status(404).json({ message: "Gato não encontrado" });
    }
    
    res.json(results[0]);
  } catch (err) {
    console.error("Erro /cats/:id:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/cats", async (req, res) => {
  try {
    const { nome, raca, idade, foto_ulr } = req.body;
    const sql = "INSERT INTO gatinhos (nome, raca, idade, foto_ulr) VALUES (?, ?, ?, ?)";
    const [results] = await connection.execute(sql, [nome, raca, idade, foto_ulr]);
    
    res.status(201).json({ 
      id: results.insertId, 
      nome, 
      raca, 
      idade, 
      foto_ulr 
    });
  } catch (err) {
    console.error("Erro POST /cats:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/sbemvindo", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM bemvindo");
    res.json(results);
  } catch (err) {
    console.error("Erro /sbemvindo:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/passo", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM passo");
    res.json(results);
  } catch (err) {
    console.error("Erro /passo:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/falamDnos", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM falamDnos");
    res.json(results);
  } catch (err) {
    console.error("Erro /falamDnos:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/doacoes", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM doacoes");
    res.json(results);
  } catch (err) {
    console.error("Erro /doacoes:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/remedios", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM remedios");
    res.json(results);
  } catch (err) {
    console.error("Erro /remedios:", err);
    res.status(500).json({ error: err.message });
  }
});

// Tratar rotas inexistentes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint não encontrado" });
});

// Porta - OBRIGATÓRIO para Railway
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`📊 Variáveis MySQL: ${process.env.MYSQL_HOST ? 'Configuradas' : 'Não configuradas'}`);
});