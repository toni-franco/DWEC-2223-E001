<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $bbdd = "ada";

    $objeto=$_POST['json'];    
    
    $cliente=json_decode($objeto,true); //Convertir a un array asociativo (parameter to true)
    //var_dump($cliente);

    echo $cliente["id"];

    // Create connection
    $conn = new mysqli($servidor, $usuario, $password, $bbdd);
   
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);        
    }

    $sql = "DELETE FROM clientes WHERE clientes.id =".  $cliente["id"].";";

    echo $sql;


    if ($conn->query($sql) === TRUE) {
      //echo "<br>";
      //echo "nro registro insertado: ";
      echo "1"; 
   
    } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
      echo "Error";
    }

    $conn->close();

?>
