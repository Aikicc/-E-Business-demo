<?php
include 'conn.php';
$sql = "SELECT * FROM search ORDER BY dazhe LIMIT 0,1000";
$res = $conn->query($sql);
$content =  $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>