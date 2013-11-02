<?php

define('EMAIL', 'itftaekwondo.club@rmit.edu.au');
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
	exitWithResult(FALSE, 'Name not provided. ' . TRY_AGAIN);
}

// Retrieve value
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

// Check length
if (strlen($name) === 0) {
	exitWithResult(FALSE, 'Please enter your name.');
}


/* ===== Email validation ===== */

// Check presence
if (!isset($_POST['email'])) {
	exitWithResult(FALSE, 'Email address not provided. ' . TRY_AGAIN);
}

// Retrieve value
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

// Check length
if (strlen($email) === 0) {
	exitWithResult(FALSE, 'Please enter your email address.');
}

// Check validity
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	exitWithResult(FALSE, 'Please enter your email address.');
}


/* ===== Message validation ===== */

// Check presence
if (!isset($_POST['message'])) {
	exitWithResult(FALSE, 'Message not provided. ' . TRY_AGAIN);
}

// Retrieve value
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// Check length
if (strlen($message) === 0) {
	exitWithResult(FALSE, 'Please enter your message.');
}


/* ===== Prepare and send email ===== */

$to = 'RMIT ITF Taekwon-Do <' . EMAIL . '>';
$from = 'Club website <' . EMAIL . '>';
$subject = 'New message!';
$body = 	"== Name ==\r\n$name\r\n\r\n" .
			"== Email ==\r\n$email\r\n\r\n" .
			"== Message ==\r\n$message";

$headers = 'MIME-Version: 1.0' . PHP_EOL;
$headers .= 'Content-Type: text/plain; charset=utf-8' . PHP_EOL;
$headers .= 'From: ' . $from . PHP_EOL;
$headers .= 'Reply-To: ' . $email;

$result = @mail($to, $subject, $body, $headers);

// Fail
if (!$result) {
	exitWithResult(FALSE, '');
}

// Success
exitWithResult(TRUE, '<strong>Thank you!</strong> Your message has been sent. We\'ll get in touch with you as soon as possible.');

?>