<?php

/*
 * Contact form action.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Define success message
define('CONTACT_SUCCESS', "<strong>Thank you!</strong> Your message has been sent. We'll get in touch with you as soon as possible.");
define('CONTACT_FAILURE', "Sorry, something went wrong. Try again later, or get in touch with us on <a href=\"https://www.facebook.com/rmittkd\" class=\"link-blend\">Facebook</a>.");


// Initialise new form submission (authentication and feature not required)
$submission = new FormSubmission('/contact#contact');

// Spam trap: URL field must be left empty
if (isset($_POST['url']) && $_POST['url'] !== '') {
	// Prepare log message
	$log = '[form-contact] spam caught';
	if (isset($_POST['message']) {
		 $log .= ' - message="' .  strip_tags($_POST['message']) . '"';
	}
	
	// Make it look like the message was successfully sent
	$submission->exitWithResult(true, CONTACT_SUCCESS, $log);
}

// Prepare fields for validation
$fields = [
	'name' => [
		'require' => 'Enter your name.'
	],
	'email' => [
		'sanitise' => 'email',
		'require' => 'Enter your email address.',
		'validate' => 'Enter a valid email address.'
	],
	'message' => [
		'require' => 'Enter your message.'
	]
];

// Perform validation
if (!$submission->validate($fields)) {
	// Unsuccessful submission
	$submission->exitWithResult(false, "Sorry, something's not quite right.");
}

// Prepare email body
$data = $submission->getData();
$emailBody = '<p>A new message has been posted on the Taekwon Do club\'s website.</p>' .
			 '<p><strong>Name:</strong> ' . $data['name'] . '</p>' .
			 '<p><strong>Email:</strong> ' . $data['email'] . '</p>' .
			 '<p><strong>Message:</strong></p>' .
			 '<p>' . $data['message'] . '</p>';

// Prepare Mandrill API call
$emailConfig = [
	'key' => API_KEY,
	'message' => [
		'html' => $emailBody,
		'subject' => 'New message on TKD website',
		'from_email' => CLUB_EMAIL,
		'from_name' => 'Website',
		'to' => [
			[
				'email' => CLUB_EMAIL,
				'name' => 'RMIT ITF Taekwon-Do',
				'type' => 'to'
			]
		],
		'headers' => [
			'Reply-To' => ($data['name'] . ' <' . $data['email'] . '>')
		]
	]
];

// If BCC email provided, add it to the configuration
if (strlen(BCC_EMAIL) > 0) {
	$emailConfig['message']['to'][] = [
		'email' => BCC_EMAIL,
		'type' => 'bcc'
	];
}

// Prepare to send email via Mandrill
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($emailConfig));

curl_setopt($curl, CURLOPT_URL, 'https://mandrillapp.com/api/1.0/messages/send.json');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Send email
$raw = curl_exec($curl);

// Check for cURL error
if (!$raw) {
	$submission->exitWithResult(false, CONTACT_FAILURE, '[form-contact] cURL error: ' . curl_error($curl));
} else {
	// Decode result
	$response = json_decode($raw);
	
	// Check Mandrill's response and exit accordingly
	if (is_array($response) && count($response) > 0 && $response[0]->status === 'sent') {
		$submission->exitWithResult(true, CONTACT_SUCCESS);
	} else {
		$submission->exitWithResult(false, CONTACT_FAILURE, '[form-contact] Madrill error: ' . $raw);
	}
}

?>
