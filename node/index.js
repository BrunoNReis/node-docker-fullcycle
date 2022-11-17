const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

let sql = `SELECT * FROM people`;

let names = "";

connection.query(sql, function (err, result, fields) {
     Object.keys(result).forEach(function(key) {
         row = result[key];
         names = names + row.name + ", ";
     });
});

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1> </br> ' + names)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})