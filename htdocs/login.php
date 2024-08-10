<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($_POST['username']) ? htmlspecialchars($_POST['username']) : '';
    $password = isset($_POST['password']) ? htmlspecialchars($_POST['password']) : '';

    echo "<h1>Formulardaten</h1>";
    echo "<p><strong>Benutzername:</strong> " . $username . "</p>";
    echo "<p><strong>Passwort:</strong> " . $password . "</p>";
} else {
    echo "Ungültige Anfragemethode.";
}
?>