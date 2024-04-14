<?php

$servername = "localhost";
$username = "root";
$password = "crmdashboard";
$dbname = "crm_database";

require_once('db_connect.php');
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] === "POST") {
    $first_name = $_POST["firstName"];
    $last_name = $_POST["lastName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];

    $sql = "INSERT INTO crm_dashboard.leads (first_name, last_name, email, phone, company) VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("sssss", $first_name, $last_name, $email, $phone, $company);

    $stmt->execute();

    if($stmt->error) {
        echo "Fehler beim Einfügen des Leads: " . $stmt->error;
    } else {
        echo "Lead erfolgreich gespeichert!";
    }
    $stmt->close();
}

$sql = "SELECT * FROM crm_dashboard.leads";
$result = $conn->query($sql);

if(!$result) {
echo "Fehler beim Aufrufen der Leads: " . $conn->error;
}

?>