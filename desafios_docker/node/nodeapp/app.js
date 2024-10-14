const express = require('express');
const mysql = require('mysql2');
const app = express();

// Criando uma pool de conexões
const pool = mysql.createPool({
    connectionLimit: 10,  // Limite de conexões no pool
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fullcycle',
});

// Função para verificar e aguardar o MySQL ficar pronto
function check_mysql_ready(callback) {
    pool.query('SELECT 1', (err) => {
        if (err) {
            console.error('MySQL não está pronto ainda, tentando novamente em 5 segundos...');
            setTimeout(() => check_mysql_ready(callback), 5000);  // Tenta novamente após 5 segundos
        } else {
            console.log('MySQL está pronto para receber conexões!');
            callback();
        }
    });
}

// Inserir o nome "Francisco" na tabela pessoas ao iniciar
function insert_francisco() {
    pool.query(`INSERT INTO pessoas (nome) VALUES ('Francisco')`, (err, result) => {
        if (err) {
            console.error('Erro ao inserir o nome Francisco:', err);
        } else {
            console.log('Nome "Francisco" inserido com sucesso!');
        }
    });
}

// Rota principal
app.get('/', (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Consultar os nomes da tabela pessoas
    pool.query('SELECT nome FROM pessoas', (err, results) => {
        if (err) {
            res.send('Erro ao buscar os nomes na tabela pessoas: ' + err.message);
        } else {
            let nomes = results.map(row => `<li>${row.nome}</li>`).join('');
            res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${nomes}
        </ul>
      `);
        }
    });
});

// Aguardar o MySQL estar pronto antes de iniciar o servidor
check_mysql_ready(() => {
    insert_francisco();
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
    });
});
