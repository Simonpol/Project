<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
// Преобразуем символы(амперсант, кавычки итд)
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
// Декодирование url
$fio = urldecode($fio);
$email = urldecode($email);
// Удаление пробелов с начала и конца
$fio = trim($fio);
$email = trim($email);

// mail("d.romanuk@mail.ru", "Заявка с сайта", "ФИО:".$fio". E-mail:".$email ,"From: den_luapnov@mai.ru \r \n");
if (mail("d.romanuk@mail.ru", "Заявка с сайта", "ФИО:".$fio. "E-mail:".$email ,"From: den_luapnov@mai.ru \r \n"))
{ 
	echo "Сообщение отправлено";
}else{
	echo "Ошибка при отправке сообщения";
}
ini_set('display_errors','On');
error_reporting('E_ALL');


?>