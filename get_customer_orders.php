<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

$servername = "sql303.infinityfree.com";
$username = "if0_36780543";
$password = "CRMdashboard1";
$dbname = "if0_36780543_crm_database";

require_once('db_connect.php');
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

header('Content-Type: application/json');

$sql_select = "SELECT * FROM if0_36780543_crm_database.customer_orders";
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    $orders = array();
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
    echo json_encode($orders);
} else {
    echo json_encode(array());
}

$conn->close();
?>