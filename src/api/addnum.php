<?php
   include 'conn.php';
   $addnum=isset($_GET['num']) ? $_GET['num'] :'';
   $id=isset($_GET['id']) ? $_GET['id'] :'';
   $sql="UPDATE addcart SET total='$addnum' WHERE id=$id";
   $res = $conn->query($sql); 
   echo $res;

?>