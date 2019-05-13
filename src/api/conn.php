<?php
     $severName = 'localhost';
     $userNaem  = 'root';
     $pastword = '';
     $dbname = 'vancl';
     //2创建链接 mysqli
     $conn = new mysqli($severName,$userNaem,$pastword,$dbname);
     //3检测链接 die 打印输出 connect_error()函数
     if ($conn->connect_error) {
         die("失败" . $conn->connect_error);
     }
?>