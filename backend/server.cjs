
require("dotenv").config();  

const express = require("express");
const cors = require("cors");
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

app.get("/falamdnos", async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM falamdnos");
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

//POST
app.post("/contato", async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;

    // Aqui você poderia salvar no banco, por exemplo:
    // const sql = "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)";
    // const [results] = await connection.execute(sql, [nome, email, mensagem]);

    // Mas se quiser só testar, podemos retornar o JSON direto:
    res.status(201).json({
      success: true,
      message: "Mensagem recebida com sucesso!",
      data: { nome, email, mensagem }
    });
  } catch (err) {
    console.error("Erro POST /contato:", err);
    res.status(500).json({
      success: false,
      message: "Erro ao enviar mensagem",
      error: err.message
    });
  }
});

const jwt = require("jsonwebtoken");

// rota de login
app.post("/entrar", async (req, res) => {
  try {
    const { email, senha } = req.body;

    // 1️⃣ Buscar usuário no banco pelo email
    const [rows] = await connection.execute(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: "Email ou senha inválidos" });
    }

    const user = rows[0];

    // 2️⃣ Comparar a senha enviada com o hash do banco
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ success: false, message: "Email ou senha inválidos" });
    }

    // 3️⃣ Gerar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email }, // payload - infos
      process.env.JWT_SECRET || "segredo_super_forte", // segredo - string pro serv reconhecer e autentificar
      { expiresIn: "1h" } // expiração - tempo
    ); 

    // 4️⃣ Retornar sucesso e token
    res.json({
      success: true,
      message: "Login realizado com sucesso!",
      token,
      user: { id: user.id,nome: user.nome, email: user.email }
    });

  } catch (err) {
    console.error("Erro POST /entrar:", err);
    res.status(500).json({ success: false, message: "Erro ao entrar", error: err.message });
  }
});


const bcrypt = require("bcryptjs");

//rota cadastro.
app.post("/cadastro", async (req, res) => {
  try {
    const { email, senha } = req.body;

    // gerar hash
    const hashedPassword = await bcrypt.hash(senha, 10);

    // salvar no banco
    const sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
    await connection.execute(sql, [email, hashedPassword]);

    res.status(201).json({ success: true, message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error("Erro POST /cadastro:", err);
    res.status(500).json({ success: false, message: "Erro ao cadastrar", error: err.message });
  }
});

// Tratar rotas inexistentes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint não encontrado" });
});


const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});