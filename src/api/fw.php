<?php
   include 'conn.php';
   $mix = isset($_GET['min'])?$_GET['min']:'';
   $max = isset($_GET['max'])?$_GET['max']:'';
   $sql = "SELECT *FROM search WHERE dazhe BETWEEN $mix AND $max";
   $res = $conn->query($sql);
   $content = $res->fetch_all(MYSQL_ASSOC);
   echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>