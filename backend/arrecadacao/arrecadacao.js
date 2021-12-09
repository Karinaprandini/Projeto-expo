const http = require('http')
const express = require('express')
const mysql = require('mysql2')


const app = express()
app.use(express.static('../../'));
app.use(express.json())
    //caminho de onde serão pegos os valores
app.get('/adicionarArrecadacao.html', (req, res) => {
    res.sendFile(__dirname + '/adicionarArrecadacao.html');
})

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306', // Coloque a porta do seu banco
    user: 'root',
    database: 'db_covidonation',
    password: 'talize', // coloque a senha do seu banco
    multipleStatements: true
})

//Select de todas as arrecadações
app.get("/arrecadacao", (req, res) => {
    const sql = 'SELECT * FROM tb_arrecadacao';
    connection.query(sql, (err, results) => {
        if (err) return err.status(400).json(err);
        console.log(res);
        return res.status(200).json(results);
    })
})

//Select de 1 arrecadação
app.get("/arrecadacao/:id", (req, res) => {
    connection.query("SELECT * FROM tb_arrecadacao WHERE id_arrecadao = ?", [req.params.id], (err, results) => {
        if (!err)
            res.json(results)
        else
            console.log(err)
    })
})

//Deleção da arrecadação
app.delete("/arrecadacao/:id", (req, res) => {
    connection.query("DELETE FROM tb_arrecadacao WHERE id_arrecadao = ?", [req.params.id], (err, results) => {
        if (!err)
            res.send('Deletado com sucesso.')
        else
            console.log(err)
    })
})

//Post de arrecadação
app.post("/", (req, res) => {
    let arc = req.body
    let id = arc.ValId //Recebe o valor do Id
    let date = arc.Date // Recebe o valor da Data
    let val = arc.Val // Recebe o valor de arrecadação

    var sql = "SET @ValID = ?;SET @Date = ?;SET @Val = ?; \
    CALL ValorAddOrEdit(@ValID,@Date,@Val);"
    connection.query(sql, [id, date, val], (err, rows, results) => {
        if (!err)
            rows.forEach(element => {
                if (element.constructor == Array)
                    res.send('Arrecadação inserida com sucesso, ID: ' + element[0].ValID)
                console.log(id, date, val)
            });
        else
            console.log(err)
    })
})



//Put de arrecadação
app.put("/arrecadacao/", (req, res) => {
    let arc = req.body
    var sql = "SET @ValID = ?;SET @Date = ?;SET @Val = ?; \
    CALL ValorAddOrEdit(@ValID,@Date,@Val);"
    connection.query(sql, [arc.ValID, arc.Date, arc.Val], (err, rows, results) => {
        if (!err)
            rows.forEach(element => {
                if (element.constructor == Array)
                    res.send(`Atualizado com sucesso, ID: ${element[0].ValID}`)
            });
        else
            console.log(err)
    })

})


const porta = 5000
app.listen(porta, () => console.log(`Executando porta ${porta}`))