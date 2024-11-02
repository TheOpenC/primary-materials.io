<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];


        $to = "ddudak@gmail.com";
        $subject = "Message from primarymaterials.io";
        $body = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}