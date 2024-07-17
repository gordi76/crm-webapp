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

    $company = $_POST["company"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $contact = $_POST["contact"];
    $address = $_POST["address"];

    var_dump($_POST);
    var_dump($_SERVER);

    $sql = "INSERT INTO if0_36780543_crm_database.customer (company, email, phone, contact, address) VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("sssss", $company, $email, $phone, $contact, $address);

    $stmt->execute();

    if ($stmt->error) {
        echo "Fehler beim Erfassen des Kunden: " . $stmt->error;
    } else {
        echo "Kunde erfolgreich erfasst!";
    }
    $stmt->close();
} else {
    echo "Keine POST-Anfrage erhalten";
}
