<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $bbdd = "ada";

    $objeto=$_POST['json'];    
    
    $cliente=json_decode($objeto,true); //Convertir a un array asociativo (parameter to true)
    //var_dump($cliente);

   // echo $cliente["id"];

    // Create connection
    $conn = new mysqli($servidor, $usuario, $password, $bbdd);
   
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);        
    }

    $sql = "update clientes ";
    $sql =$sql."SET fname = '".$cliente["fname"]."',";
    $sql =$sql."lname = '".$cliente["lname"]."',";
    $sql =$sql."email = '".$cliente["email"]."',";
    $sql =$sql."phone = '".$cliente["phone"]."',";
    $sql =$sql."passwd = '".$cliente["passwd"]."',";
    $sql =$sql."country= '".$cliente["country"]."'";
    $sql = $sql." WHERE  clientes.id =".$cliente["id"].";";

   // echo $sql;


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
