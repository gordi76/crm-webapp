<?php

$servername = "localhost";
$username = "root";
$password = "crmdashboard";
$dbname = "crm_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = ('SELECT * FROM crm_database.leads');
$result = $conn->query($sql);

$conn->close();
//$conn->set_charset("utf8");

?>