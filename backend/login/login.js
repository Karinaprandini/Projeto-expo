// var mysql = require('mysql');
// var express = require('express');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     port: '3306',
//     password: 'talize',
//     database: 'db_covidonation'
// });
// // 
// var app = express();
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', function(request, response) {
//     response.sendFile(path.join(__dirname + '/login.html'));
// });

// app.post('/auth', function(request, response) {
//     var username = request.body.username;
//     var password = request.body.password;
//     if (username && password) {
//         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ? AND status = 1', [username, password], function(error, results, fields) {
//             if (results.length > 0) {
//                 request.session.loggedin = true;
//                 request.session.username = username;
//                 response.redirect('/gerencial');
//             } else {
//                 response.send('Usuario ou senha incorreto!');
//             }
//             response.end();
//         });
//     } else {
//         response.send('Por favor coloque o usuario e senha!');
//         response.end();
//     }
// });

// app.get('/gerencial', function(request, response) {
//     response.sendFile(path.join(__dirname + '/gerencial.html'));
// });

// // app.listen(4000);