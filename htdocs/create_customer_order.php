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

$customerName = $_POST['customerName'];
$orderDescription = $_POST['orderDescription'];

// SQL-Query zum Einfügen der neuen Customer Order
$sql_insert = "INSERT INTO if0_36780543_crm_database.customer_orders (customerName, orderDescription) VALUES ('$customerName', '$orderDescription')";

if ($conn->query($sql_insert) === TRUE) {
    echo json_encode(array("message" => "Customer Order erfolgreich erstellt."));
} else {
    echo json_encode(array("error" => "Fehler beim Erstellen der Customer Order: " . $conn->error));
}

$conn->close();
?>