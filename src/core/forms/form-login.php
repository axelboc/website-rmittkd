<?php

/*
 * Admin login form.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Initialise new form submission
$submission = new FormSubmission('/admin/');

// Prepare password field for validation
$fields = [
	'pwd' => [
		'require' => 'Enter a password'
	]
];

// Perform validation
if ($submission->validate($fields)) {
	if ($submission->getData()['pwd'] === ADMIN_PWD) {
		// Successful authentication
		$_SESSION['authenticated'] = true;
		$submission->exitWithResult(true);
	} else {
		// Wrong password
		$submission->addError('pwd', 'Wrong password');
	}
}

// Unsuccessful authentication
$submission->exitWithResult(false, 'Log in unsuccessful');

?>
