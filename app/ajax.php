<?php

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$form = htmlspecialchars($_POST["msg"]);

if (!empty($phone)) {

	$to = 'khripunovpp@gmail.com, danikkiselev@gmail.ru';
	$subject = 'Новый заказ';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; utf-8' . "\r\n";
	$headers .= 'From: OWL-WING <info@owl-wing.ru>' . "\r\n";
	$message = "
							<table>
								<tr>
									<td><b>Имя заказчика</b></td>
									<td>$name</td>
								</tr>
								<tr>
									<td><b>Контактный телефон</b></td>
									<td>$tell</td>
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

	$jsonout = '{"status": "success", "Спасибо! Ваша заявка принята."}';

} else {

	$jsonout = '{"status": "error", "Без номера телефона мы не сможем связаться с вами!"}';
	
}

echo $jsonout;

?>