<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $bbdd = "ada";

    $objeto=$_GET['json'];    
    
     $cliente=json_decode($objeto,true); //Convertir a un array asociativo (parameter to true)
/*
    echo "Cliente:";
    echo "<br>";
    echo $cliente["genero"];
    echo "<br>";
    echo $cliente["fname"];
    echo "<br>";
    echo $cliente["lname"];

    echo "<br>";
    echo "<br>";
    var_dump($cliente);
    echo "<br>";    echo "<br>";
*/    

    // Create connection
    $conn = new mysqli($servidor, $usuario, $password, $bbdd);
   
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);        
    }

    $sql = "INSERT INTO clientes(genero, fname, lname,email,phone,passwd,country) VALUES ('". $cliente['genero']. "','" . $cliente['fname']. "','" . $cliente['lname']. "','" .$cliente['email']. "','" .$cliente['phone'] ."','". $cliente['passwd']."','".$cliente['country']."')";

    //echo $sql;


    if ($conn->query($sql) === TRUE) {
      //echo "<br>";
      //echo "nro registro insertado: ";
      echo $last_id = $conn->insert_id; 
   
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>
