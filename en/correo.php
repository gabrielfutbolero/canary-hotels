<?php
 //conectamos Con el servidor
 $host ="localhost";
 $user ="root";
 $pass ="";
 $db="dudas";

 //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
 $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al Conectar");
 mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");


 //recuperar las variables
 $nombre=$_POST['nombre'];
 $correo=$_POST['correo'];
 $asunto=$_POST['asunto'];
 $mensaje=$_POST['mensaje'];
 //hacemos la sentencia de sql
 $sql="INSERT INTO datos VALUES('$nombre','$correo','$asunto','$mensaje')";
 //ejecutamos la sentencia de sql
 $ejecutar=mysqli_query($con,$sql);
 //verificamos la ejecucion
 if(!$ejecutar){
  echo"Hubo Algun Error";
 }else{
  echo"Data saved successfully <br><a href='contacto.html'>Return</a>";
 }
?>