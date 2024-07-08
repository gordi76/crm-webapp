<?php

$servername = "sql303.infinityfree.com";
$username = "if0_36780543";
$password = "CRMdashboard1";
$dbname = "if0_36780543_crm_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = ('SELECT * FROM if0_36780543_crm_database.leads');
$result = $conn->query($sql);

$conn->close();
//$conn->set_charset("utf8");

?>