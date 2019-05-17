<?php
   include 'conn.php';
   //接收前端
   $name =isset($_POST['name']) ? $_POST['name'] :'';
   	//1.写sql语句
   $sql = "SELECT * FROM user WHERE tel=$name";
   	//2.执行sql语句
	$res = $conn->query($sql);//结果集
    if($res->num_rows) {
		//找出，存在，不给注册
		echo 'no';
	}else{
		//找不到，可以注册
		echo 'yes';
	}

?>