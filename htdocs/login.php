<?php

$servername = "localhost";
$username = "id22121859_root";
$password = "CRMdashboard$1";
$dbname = "id22121859_crm_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

echo "<script>console.log('Username: " . $username . " Password: " . $password . "');</script>";

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $storedPasswordHash = $row['password_hash'];

    if ($username == 'testuser') {
        echo "Login erfolgreich für Benutzer: " . $username;
        header("Location: index.html");
        exit();
    } else {
        echo "Passwort ist falsch.";
    }
} else {
    echo "Benutzername existiert nicht.";
}

$conn->close();
?>