<?php
    include 'conn.php';
    //接受ajax
    $user = isset($_POST['name'])? $_POST['name']: '';
    $pw = isset($_POST['pw'])? $_POST['pw']: '';
    //php sql语句
    $sql = "SELECT * FROM user WHERE tel='$user' AND psw='$pw'";
    //执行
    $res = $conn->query($sql);
	if($res->num_rows) {
		//找到，允许登陆
		echo 'yes';
	}else{
		//找不到，不允许登陆
		echo 'no';
	}
?>