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
$from = $name . ' <' . $email . '>';
$subject = 'Message from ' . $name;
$body = 	'A new message was posted from the website:' . PHP_EOL . 
			'Name: ' . $name . PHP_EOL .
			'Email: ' . $email . PHP_EOL . 
			'Message:\n' . $message;

$headers = 'MIME-Version: 1.0' . PHP_EOL;
$headers .= 'Content-type: text/html; charset=iso-8859-1' . PHP_EOL;
$headers .= 'From: ' . $from . PHP_EOL;

$result = @mail($to, $subject, $body, $headers);

// Fail
if (!$result) {
	exitWithResult(FALSE, '');
}

// Success
exitWithResult(TRUE, '<strong>Thank you!</strong> Your message has been sent. We\'ll get in touch with you as soon as possible.');

?>