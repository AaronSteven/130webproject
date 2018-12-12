<?php
$servername = "localhost";
$username = "csci130";
$password = "123456";
$dbname = "dbpicrossmr";

// checking connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>