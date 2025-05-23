# Api_Node_BancodeDados
 API funcional e entenderá os conceitos essenciais para criar suas próprias APIs.
 1. Entendendo o que é uma API
API (Application Programming Interface): Interface que permite que diferentes sistemas se comuniquem.

No contexto de Node.js, criamos APIs que recebem requisições HTTP (como GET, POST, PUT, DELETE) e retornam respostas (geralmente em JSON).

🛠 2. Configurando o ambiente
Conceitos:
Node.js: Ambiente de execução de JavaScript no servidor.

NPM/Yarn: Gerenciadores de pacotes para instalar bibliotecas.

Passos:
bash
Copiar
Editar
mkdir minha-api
cd minha-api
npm init -y              # Cria o package.json
npm install express      # Framework web para Node.js
🧭 3. Criando o servidor com Express
Conceitos:
Express é um framework minimalista para criar servidores HTTP rapidamente.

Rotas são caminhos/endpoints da API.

Exemplo:
js
Copiar
Editar
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Permite ler JSON no corpo da requisição

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
🧩 4. Conectando ao banco de dados
Você pode usar bancos como:

SQLite (leve, arquivo local)

MySQL/PostgreSQL (mais robustos)

Exemplo com SQLite:
bash
Copiar
Editar
npm install sqlite3
js
Copiar
Editar
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('produtos.db');

db.run(`CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  preco REAL NOT NULL
)`);
➕ 5. Criando rotas da API (CRUD)
Conceitos:
CRUD: Create, Read, Update, Delete.

Exemplo de rota POST (Create):
js
Copiar
Editar
app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;
  db.run(`INSERT INTO produtos (nome, preco) VALUES (?, ?)`, [nome, preco], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ id: this.lastID, nome, preco });
  });
});
Exemplo de rota GET (Read):
js
Copiar
Editar
app.get('/produtos', (req, res) => {
  db.all(`SELECT * FROM produtos`, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});
🧽 6. Boas práticas
Conceitos:
Separar responsabilidades: rotas, lógica e acesso ao banco.

Validação de dados: garantir que os dados enviados sejam válidos.

Tratamento de erros: lidar com erros de forma clara e segura.

Middleware: funções que interceptam requisições (ex: autenticação, logs, etc).

🧪 7. Testando sua API
Use ferramentas como:

Postman ou Insomnia para testar endpoints.

curl no terminal.

🔒 8. Adicionais (opcional)
Autenticação (JWT, API key)

Upload de arquivos

Versionamento da API (ex: /api/v1)

Deploy em servidores (Heroku, Vercel, Render, etc.)