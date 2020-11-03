<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "=?utf-8?B?".base64_encode("Заявка с сайта")."?=";
$headers = "From: $email\r\nReply to: $email\r\nContent-type: text/html; charset=utf-8\r\n";



$name = trim($name);
$name = trim($email);

if (isset($name) && isset($email) && isset($message)){
    $success = mail("d.romanuk@mail.ru", $subject, $message, $headers);
    echo $success;
}
ini_set("display_errors","1");
ini_set("display_startup_errors","1");
ini_set('error_reporting', E_ALL);

?>