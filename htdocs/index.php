<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    $servername = "sql303.infinityfree.com";
    $username = "if0_36780543";
    $password = "CRMdashboard1";
    $dbname = "if0_36780543_crm_database";

    require_once('db_connect.php');
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
    }

        $first_name = $_POST["firstName"];
        $last_name = $_POST["lastName"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $company = $_POST["company"];

        var_dump($_POST);
        var_dump($_SERVER);

        $sql = "INSERT INTO if0_36780543_crm_database.leads (first_name, last_name, email, phone, company) VALUES (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param("sssss", $first_name, $last_name, $email, $phone, $company);

        $stmt->execute();

        if ($stmt->error) {
            echo "Fehler beim Einfügen des Leads: " . $stmt->error;
        } else {
            echo "Lead erfolgreich gespeichert!";
        }
        $stmt->close();
}
else {
    echo "Keine POST-Anfrage erhalten";
}
?>