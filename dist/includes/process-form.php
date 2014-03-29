<?php

define('TRY_AGAIN', 'Please try again. If the problem persists, please get in touch with us on Facebook.');

function exitWithResult($status, $message = '') {
	echo json_encode(array(
		'status' => $status,
		'message' => $message
	));
	exit;
}


/* ===== Name validation ===== */

// Check presence
if (!isset($_POST['name'])) {
	exitWithResult('error', 'Name not provided. ' . TRY_AGAIN);
}

// Retrieve value
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

// Check length
if (strlen($name) === 0) {
	exitWithResult('error', 'Please enter your name.');
}


/* ===== Email validation ===== */

// Check presence
if (!isset($_POST['email'])) {
	exitWithResult('error', 'Email address not provided. ' . TRY_AGAIN);
}

// Retrieve value
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

// Check length
if (strlen($email) === 0) {
	exitWithResult('error', 'Please enter your email address.');
}

// Check validity
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	exitWithResult('error', 'Please enter your email address.');
}


/* ===== Message validation ===== */

// Check presence
if (!isset($_POST['message'])) {
	exitWithResult('error', 'Message not provided. ' . TRY_AGAIN);
}

// Retrieve value
$message = strip_tags($_POST['message']);

// Check length
if (strlen($message) === 0) {
	exitWithResult('error', 'Please enter your message.');
}


/* ===== Prepare and send email ===== */

/**
 * File includes/config.php must define two constants:
 * - API_KEY, the Mandrill API key (https://mandrillapp.com/)
 * - CLUB_EMAIL, the club's email address
 *
 * config.php must be used only in development.
 * It must not be version-controlled and must not exist in the production environment (Heroku).
 * 
 * In production, config variables must be set:
 * https://devcenter.heroku.com/articles/config-vars
 */
if (file_exists('config.php')) {
	include('config.php');
}

$emailBody = "A new message was posted on the website.\r\n\r\n" .
			 "=== Name ===\r\n$name\r\n\r\n" .
			 "=== Email ===\r\n$email\r\n\r\n" .
			 "=== Message ===\r\n$message";

$data = array(
	"key" => API_KEY,
	"message" => array(
		"text" => $emailBody,
		"subject" => "New message",
		"from_email" => CLUB_EMAIL,
		"from_name" => "Website",
		"to" => array(
			array(
				"email" => CLUB_EMAIL,
				"name" => "RMIT ITF Taekwon-Do",
				"type" => "to"
			)
		),
		"headers" => array(
			"Reply-To" => ($name . ' <' . $email . '>')
		)
	)
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));

curl_setopt($curl, CURLOPT_URL, "https://mandrillapp.com/api/1.0/messages/send.json");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($curl);

?>
