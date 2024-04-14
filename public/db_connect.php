<?php

$servername = "localhost";
$username = "root";
$password = "crmdashboard";
$dbname = "crm_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// (Optional) Set character encoding (if needed)
$conn->set_charset("utf8");

?>