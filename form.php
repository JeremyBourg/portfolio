<?php
require 'config.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($mysqli->connect_error) {
    die(json_encode(["success" => false, "databaseError" => true, "errorCode" => $mysqli->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? null;
    $email = $_POST['email'] ?? null;
    $message = $_POST['message'] ?? null;

    if (!$name || !$email || !$message) {
        echo json_encode(["success" => false, "missing" => true, "name" => $name, "email" => $email, "message" => $message]);
        exit;
    }

    $stmt = $mysqli->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param('sss', $name, $email, $message);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "databaseError" => true, "errorCode" => $stmt->error]);
    }

    $stmt->close();
}
$mysqli->close();
?>
