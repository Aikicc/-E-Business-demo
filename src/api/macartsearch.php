<?php
    include 'conn.php';
    $id =isset($_GET['id'])?$_GET['id']:"";
    $sql = "SELECT * FROM tejia WHERE id=$id";
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>