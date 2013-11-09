<?php

define('TRY_AGAIN', 'Please try again. If the problem persists, please get in touch with us on Facebook.');

function exitWithResult($sucess, $message) {
	echo json_encode(array(
		'success' => $sucess,
		'message' => $message
	));
	exit;
}


/* ===== Name validation ===== */

// Check presence
if (!isset($_POST['name'])) {
	exitWithResult(false, 'Name not provided. ' . TRY_AGAIN);
}

// Retrieve value
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

// Check length
if (strlen($name) === 0) {
	exitWithResult(false, 'Please enter your name.');
}


/* ===== Email validation ===== */

// Check presence
if (!isset($_POST['email'])) {
	exitWithResult(false, 'Email address not provided. ' . TRY_AGAIN);
}

// Retrieve value
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

// Check length
if (strlen($email) === 0) {
	exitWithResult(false, 'Please enter your email address.');
}

// Check validity
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	exitWithResult(false, 'Please enter your email address.');
}


/* ===== Message validation ===== */

// Check presence
if (!isset($_POST['message'])) {
	exitWithResult(false, 'Message not provided. ' . TRY_AGAIN);
}

// Retrieve value
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// Check length
if (strlen($message) === 0) {
	exitWithResult(false, 'Please enter your message.');
}


/* ===== Prepare and send email ===== */

include('config.php');

// PHPMailer
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

// SMTP configuration (via config.php)
$mail->isSMTP();
$mail->Host = SMTP_HOST;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPDebug = 1;
$mail->SMTPSecure = 'ssl';
$mail->Username = SMTP_USERNAME;
$mail->Password = SMTP_PASSWORD;

// Build email
$mail->isHTML(false);
$mail->setFrom(CLUB_EMAIL, 'Club website');
//$mail->addAddress(CLUB_EMAIL, 'RMIT ITF Taekwon-Do');
$mail->addAddress(TEST_EMAIL, 'Test');
$mail->addReplyTo($email, $name);

$mail->Subject = 'New message';
$mail->AltBody = "== Name ==\r\n$name\r\n\r\n" .
				 "== Email ==\r\n$email\r\n\r\n" .
				 "== Message ==\r\n$message";

if(!$mail->send()) {
	exitWithResult(false, '');
}

// Success
exitWithResult(true, '<strong>Thank you!</strong> Your message has been sent. We\'ll get in touch with you as soon as possible.');

?>
