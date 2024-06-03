<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

$servername = "localhost";
$username = "id22121859_root";
$password = "CRMdashboard$1";
$dbname = "id22121859_crm_database";

require_once('db_connect.php');
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

header('Content-Type: application/json');

$sql_select = "SELECT * FROM id22121859_crm_database.leads";
$result = $conn->query($sql_select);

 if($result->num_rows > 0) {
    $leads = array();
    while($row = $result->fetch_assoc()) {
        $leads[] = $row;
    }
    echo json_encode($leads);
} else {
    echo json_encode(array());
}

$conn->close();

?>
