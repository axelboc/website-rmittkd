<?php

/*
 * Admin login form action.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Initialise new form submission (authentication and feature not required)
$submission = new FormSubmission('/admin/');

// Validate password field
$submission->validateParam('pwd', 'password', true, false);

// Manual validation
if (!$submission->hasErrors()) {
	if ($submission->getData()['pwd'] !== ADMIN_PWD) {
		$submission->addError('pwd', 'password', 'invalid');
	}
}

if (!$submission->hasErrors()) {
	$_SESSION['authenticated'] = true;
	$submission->exitWithResult(true);
} else {
	$submission->exitWithResult(false);
}

?>
