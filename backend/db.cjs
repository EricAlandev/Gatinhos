const mysql = require('mysql2');

// Use connection pool para melhor performance
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
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
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      database: process.env.MYSQLDATABASE
    });
    return;
  }
  console.log('✅ Conectado ao MySQL do Railway!');
  connection.release();
});

// Exportar pool para usar com promises
module.exports = pool.promise();