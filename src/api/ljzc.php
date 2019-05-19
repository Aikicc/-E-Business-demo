<?php
    include 'conn.php';
    //接收前端数据
    $name = isset($_POST['name'])? $_POST['name']:"";
    $psw = isset($_POST['psw'])? $_POST['psw']:"";
    //写sql 把用户名密码存入sql 
    $sql = "INSERT INTO user(tel,psw) VALUES('$name','$psw')";
    $res = $conn->query($sql);
    if($res) {
		//插入成功
		echo 'yes';
	}else{
		echo 'no';
	}
?>