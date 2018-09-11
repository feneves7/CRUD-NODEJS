function newConnection(host, port, user, password, database){
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database
  });

  connection.connect(function(err){
    if(err) 
      return console.log(err);
    return console.log('Conectado');
  });

    return connection;
}


function createTable(connection){
  const sql = 'CREATE TABLE IF NOT EXISTS Clientes (\n ID int NOT NULL AUTO_INCREMENT,\nNome varchar(150) NOT NULL,\n CPF bigint(11) NOT NULL, \n PRIMARY KEY(ID)\n );';

  connection.query(sql, function(error, results, fields){
    if(error) 
      return console.log(error);
    console.log('Tabela Criada');  
  });
}

function addRow(connection){
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
    ['teste1', '12345678901'],
    ['teste1', '09876543210'],
    ['teste3', '12312312399']
  ];

  connection.query(sql,[values], function(error, results, fields){
    if(error) 
      return console.log(error);
    console.log('Registro Adicionado');
    connection.end(); // encerra a conexão
  });  
}




const host = '127.0.0.1';
const port = 3306;
const user = 'root';
const password = '123456';
const database = 'test';

var conexao = newConnection(host, port, user, password, database);

//var criarTabela = createTable(conexao);

var adicionarLinha = addRow(conexao);