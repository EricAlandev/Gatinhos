const mysql = require('mysql2');

// Use connection pool para melhor performance
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Adicionar opções para melhor compatibilidade
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
});

// Testar conexão
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Erro ao conectar no MySQL:', err.message);
    console.error('Variáveis usadas:', {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE
    });
    return;
  }
  console.log('✅ Conectado ao MySQL do Railway!');
  connection.release();
});

// Exportar pool para usar com promises
module.exports = pool.promise();