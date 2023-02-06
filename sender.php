<?php

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$to = "orimouswork@gmail.com";
$date = date ("d.m.Y");
$time = date ("h:1");
$from = $email;
$subject = "Заявка с сайта";

$msg="
Имя: $name /n
Почта: $email /n
Текст: $text";
mail($to, $subject, $msg, "From: $to ");

?>