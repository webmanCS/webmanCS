<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "vinesDB";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $name = $conn->real_escape_string($_POST['name']);
      $email = $conn->real_escape_string($_POST['email']);
      $message = $conn->real_escape_string($_POST['message']);

      $sql = "INSERT INTO forms (name, email, message) VALUES ('$name', '$email', '$message')";

      if ($conn->query($sql) === TRUE) {
        header("Location: index.html?status=success");
        header("Refresh:0");
      } else {
        header("Location: index.html?status=error");
      }
      
      // Close connection
      $conn->close();

?>