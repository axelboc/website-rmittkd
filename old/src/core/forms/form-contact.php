<?php

/*
 * Contact form.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Define success message
define('CONTACT_SUCCESS', "<strong>Thank you!</strong> Your message has been sent. We'll get in touch with you as soon as possible.");
define('CONTACT_FAILURE', 'Sorry, something went wrong. Try again later, or get in touch with us on <a href="https://www.facebook.com/rmittkd">Facebook</a>.');


// Initialise new form submission
$submission = new FormSubmission('/contact#contact');

// Prepare fields for validation
$fields = [
	'name' => [
		'require' => 'Enter your name.'
	],
	'email' => [
		'sanitise' => FILTER_SANITIZE_EMAIL,
		'require' => 'Enter your email address.',
		'validate' => [FILTER_VALIDATE_EMAIL, 'Enter a valid email address.']
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

// Get submission data
$data = $submission->getData();

// Spam trap: URL field must be left empty
if (isset($_POST['url']) && $_POST['url'] !== '') {
	// Prepare log message
	$log = '[form-contact] spam caught';
  $log .= ' - name="' . $data['name'] . '"';
  $log .= ' - email="' . $data['email'] . '"';
	$log .= ' - message="' .  $data['message'] . '"';
	
	// Make it look like the message was successfully sent
	$submission->exitWithResult(true, CONTACT_SUCCESS, $log);
}

// Prepare email body
$emailBody = '<p>A new message has been posted on the Taekwon Do club\'s website.</p>' .
			 '<p><strong>Name:</strong> ' . $data['name'] . '</p>' .
			 '<p><strong>Email:</strong> ' . $data['email'] . '</p>' .
			 '<p><strong>Message:</strong></p>' .
			 '<p>' . $data['message'] . '</p>';

// Prepare SendGrid API call
$emailConfig = [
  'to' => CLUB_EMAIL,
  'toname' => 'RMIT ITF Taekwon-Do',
  'subject' => 'New message on TKD website',
  'html' => $emailBody,
  'from' => CLUB_EMAIL,
  'fromname' => 'Website',
  'replyto' => $data['email']
];

// If BCC email provided, add it to the configuration
if (strlen(BCC_EMAIL) > 0) {
	$emailConfig['bcc'] = BCC_EMAIL;
}

// Prepare to call API
$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Authorization: Bearer ' . API_KEY,
  'Accept: application/json'
]);

curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($emailConfig));

curl_setopt($curl, CURLOPT_URL, 'https://api.sendgrid.com/api/mail.send.json');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Send email
$raw = curl_exec($curl);

// Check for cURL error
if (!$raw) {
	$submission->exitWithResult(false, CONTACT_FAILURE, '[form-contact] cURL error: ' . curl_error($curl));
} else {
	// Decode result
	$response = json_decode($raw);
  
	// Check SendGrid's response and exit accordingly
	if ($response && property_exists($response, 'message') && $response->message === 'success') {
		$submission->exitWithResult(true, CONTACT_SUCCESS);
	} else {
		$submission->exitWithResult(false, CONTACT_FAILURE, '[form-contact] SendGrid error: ' . $raw);
	}
}

?>
