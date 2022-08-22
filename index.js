const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db',   // nome do servico
    user: 'root',
    password: 'root',
    database: 'mydb'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Executando Node.js dentro do Docker Compose v3!');
});

app.listen(3000, () => {
    console.log('Server running at port 3000...')
});