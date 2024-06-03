<?php

$servername = "localhost";
$username = "id22121859_root";
$password = "CRMdashboard$1";
$dbname = "id22121859_crm_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = ('SELECT * FROM id22121859_crm_database.leads');
$result = $conn->query($sql);

$conn->close();
//$conn->set_charset("utf8");

?>