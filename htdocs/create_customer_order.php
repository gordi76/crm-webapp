<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    $servername = "sql303.infinityfree.com";
    $username = "if0_36780543";
    $password = "CRMdashboard1";
    $dbname = "if0_36780543_crm_database";

    require_once('db_connect.php');
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
    }

    $part = $_POST["part"];
    $part_no = $_POST["partNo"];
    $customer = $_POST["customer"];
    $sales_value = $_POST["salesValue"];

    var_dump($_POST);
    var_dump($_SERVER);

    $sql = "INSERT INTO if0_36780543_crm_database.customer_orders (part, part_no, customer, sales_value) VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("ssss", $part, $part_no, $customer, $sales_value);
    
    $stmt->execute();

    if ($stmt->error) {
        echo "Fehler beim Erstellen der Bestellung: " . $stmt->error;
    } else {
        echo "Bestellung erfolgreich erfasst!";
    }
    $stmt->close();
} else {
    echo "Keine POST-Anfrage erhalten";
}
