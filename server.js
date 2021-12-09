const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;


//----------------------CONTATO----------------------------------------------------
app.use(express.static('./')); 
app.use(express.json());


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/contato.html');
})

app.post('/', (req,res) =>{
    console.log(req.body);


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user: "covidonation@gmail.com",
            pass: "covidonation123",
        },
        tls:{
            rejectUnauthorized: false,
        }
    
    });


    transporter.sendMail({
        from: req.body.nome,
        to: "covidonation@gmail.com",
        subject: "Mensagem de contato",
        text: req.body.mensagem +"\n Mensagem enviada por:"+"\n Telefone: "+req.body.telefone+
        "\n Nome:"+req.body.nome,
        replyTo: req.body.email
    }).then(message =>{
        console.log(message);
        res.send('success');
    }).catch(err => {
        console.log(err);
    })

})

/*
//---------------------ARRECADACAO---------------------------------------------------------
//const app = express()
app.use(express.static('/')); 
app.use(express.json())
        //caminho de onde serão pegos os valores
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/adicionarArrecadacao.html');
})                          

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',// Coloque a porta do seu banco
    user: 'root',
    database: 'db_covidonation',
    password: '1234', // coloque a senha do seu banco
    multipleStatements: true
})

//Select de todas as arrecadações
app.get ("/arrecadacao", (req, res) =>{
    connection.query("SELECT * FROM tb_arrecadacao", (err, results, fields) => {
         console.log(results)
         res.json(results)
    })
})

//Select de 1 arrecadação
app.get ("/arrecadacao/:id", (req, res) => {
    connection.query("SELECT * FROM tb_arrecadacao WHERE id_arrecadao = ?",[req.params.id], (err, results)=>{
        if (!err)
        res.json(results)
        else
        console.log(err)
    })
})

//Deleção da arrecadação
app.delete ("/arrecadacao/:id", (req, res) => {
    connection.query("DELETE FROM tb_arrecadacao WHERE id_arrecadao = ?",[req.params.id], (err, results)=>{
        if (!err)
        res.send('Deletado com sucesso.')
        else
        console.log(err)
    })
})

//Post de arrecadação
app.post ("/", (req, res) => {
    let arc = req.body
    let id = arc.ValId //Recebe o valor do Id
    let date = arc.Date // Recebe o valor da Data
    let val = arc.Val // Recebe o valor de arrecadação

    var sql = "SET @ValID = ?;SET @Date = ?;SET @Val = ?; \
    CALL ValorAddOrEdit(@ValID,@Date,@Val);"
    connection.query(sql, [id, date, val],(err, rows, results)=>{
        if (!err)
        rows.forEach(element => {
            if (element.constructor == Array)
            res.send('Arrecadação inserida com sucesso, ID: '+element[0].ValID)
            console.log(id, date, val)
        });
        else
        console.log(err)
    })
})



//Put de arrecadação
app.put ("/arrecadacao/", (req, res) => {
    let arc = req.body
    var sql = "SET @ValID = ?;SET @Date = ?;SET @Val = ?; \
    CALL ValorAddOrEdit(@ValID,@Date,@Val);"
    connection.query(sql,[arc.ValID, arc.Date, arc.Val], (err, rows, results)=>{
        if (!err)
        rows.forEach(element => {
            if (element.constructor == Array)
            res.send(`Atualizado com sucesso, ID: ${element[0].ValID}`)
        });
        else
        console.log(err)
    })
    
})

*/
//const porta = 3000
//app.listen(porta, () => console.log(`Executando porta ${porta}`))

app.listen(process.env.PORT || 3000);
