<?php

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$form = htmlspecialchars($_POST["msg"]);

if (!empty($email)) {

	$to = 'khripunovpp@gmail.com';
	$subject = 'Новый заказ';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; utf-8' . "\r\n";
	$headers .= 'From: OWL-WING <info@owlwing.ru>' . "\r\n";
	$message = "
							<table>
								<tr>
									<td><b>Имя заказчика</b></td>
									<td>$name</td>
								</tr>
								<tr>
									<td><b>Контакт</b></td>
									<td>$email</td>
								</tr>
								<tr>
									<td><b>Сообщение</b></td>
									<td>$msg</td>
								</tr>
								<tr>
									<td colspan=\"2\">Сообщение создано автоматически!</td>
								</tr>
							</table>
							";
				
	mail($to, $subject, $message, $headers);

	$jsonout = '{"status": "success", "message": "Спасибо! Ваша заявка принята."}';

} else {

	$jsonout = '{"status": "error", "message": "Без адреса електронной почты мы не сможем связаться с вами!"}';
	
}

echo $jsonout;

?>