<?php

//nome do servidor (127.0.0.1)
$servidor = "127.0.0.1";

//usuário do banco de dados
$user = "root";

//senha do banco de dados
$senha = "123";

//nome da base de dados
$db = "extjs";

//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$conexao = mysql_connect($servidor,$user,$senha) or die (mysql_error());

//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
$banco = mysql_select_db($db, $conexao) or die(mysql_error());

?>