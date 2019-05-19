<?php
    include 'conn.php';
    $id =isset($_GET['id'])?$_GET['id']:"";
    $img =isset($_GET['img'])?$_GET['img']:"";
    $dazhe =isset($_GET['dazhe'])?$_GET['dazhe']:"";
    $mc =isset($_GET['mingcheng'])?$_GET['mingcheng']:"";
    //增加功能的sql语句
    $sql ="INSERT INTO addcart(id,img,dazhe,mingcheng) VALUES('$id','$img','$dazhe','$mc')";
    $res = $conn->query($sql); 
    

?>