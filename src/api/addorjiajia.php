<?php
      include 'conn.php';
      $id =isset($_GET['id'])?$_GET['id']:"";
      $sql = "SELECT *FROM addcart WHERE id=$id";
      $res=$conn->query($sql);
    if($res->num_rows) {
        //有这个商品 数量加1
        echo 'yes';
    }else{//没有种类加进去
        echo 'no';
    }   
?>