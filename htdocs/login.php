<?php
include 'db_connect.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($_POST['username']) ? htmlspecialchars($_POST['username']) : '';
    $password = isset($_POST['password']) ? htmlspecialchars($_POST['password']) : '';

    $stmt = $conn->prepare("SELECT password_hash FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($password_hash);
        $stmt->fetch();
        
        if (password_verify($password, $password_hash)) {
            header("Location: index.html");
            exit();
        } else {
            header("Location: login.html?error=1");
            exit();
        }
    } else {
        header("Location: login.html?error=1");
            exit();
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Ungültige Anfragemethode.";
}
?>