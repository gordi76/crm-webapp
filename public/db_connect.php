<?php

$servername = "localhost";
$username = "root";
$password = "crmdashboard";
$dbname = "crm_database";

$conn = new mysqli($servername, $username, $password, $dbname);
echo "connected";

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = ('SELECT * FROM crm_database.leads');
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["first_name"] . "<br>";
    }
} else {
    echo "Keine Ergebnisse gefunden";
}

$conn->close();
//$conn->set_charset("utf8");

?>