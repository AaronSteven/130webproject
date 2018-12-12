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

// sql code to create table
$sql = "CREATE TABLE IF NOT EXISTS players(
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
		age INT(2) NOT NULL,
		username(255) NOT NULL,
		gender ENUM('m','f') NOT NULL,
        email VARCHAR(50) NOT NULL,
		staddress VARCHAR(255) NOT NULL,
		state VARCHAR(20) NOT NULL,
		country VARCHAR(255) NOT NULL
        )";
		
		$sql = "CREATE TABLE IF NOT EXISTS games()"
		$sql = "CREATE TABLE IF NOT EXISTS levels()"


if ($conn->query($sql) === TRUE) {
    echo "Table players created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>