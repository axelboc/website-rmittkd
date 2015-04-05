<?php

/*
 * Admin forms action.
 * Handles POST requests to update the website's data stores.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Start session
session_start();

// Ensure that the user is logged in
if (empty($_SESSION['authenticated'])) {
	exitWithResult('global', false, 'Unauthorised access.', '[form-admin] unauthorised access');
}

// Get feature
if (!isset($_GET['feature'])) {
	exitWithResult('global', false, 'Unexpected error.', '[form-admin] `feature` parameter not provided');
} else {
	$feature = $_GET['feature'];

	// Prepare data and error arrays
	$data = array();
	$errors = array();

	switch ($feature) {
		case 'videos':
			// Validate POST parameters
			validatePOSTParam($data, $errors, 'video-1', 'url');
			validatePOSTParam($data, $errors, 'video-2', 'url');

			if (empty($errors)) {
				// Pass update data to the feature's class
				Videos::update($data, $errors);
			}
			break;

		default:
			exitWithResult($feature, false, 'Unexpected error.', 
						   '[form-admin] unsuported value for `feature` parameter: ' . $feature);
	}
	
	// Exit with result
	if (empty($errors)) {
		exitWithResult($feature, true, 'Changes saved.');
	} else {
		$_SESSION['errors'] = $errors;
		exitWithResult($feature, false, 'Changes not saved.');
	}
}


/**
 * Exit with result.
 * @param {String} $feature
 * @param {Boolean} $success
 * @param {String} $message
 * @param {String} $log - optional log message
 */
function exitWithResult($feature, $success, $message, $log = null) {
	$_SESSION['feature'] = $feature;
	$_SESSION['result'] = [
		type => $success ? 'success' : 'fail',
		message => $message
	];
	
	if ($log !== null) {
		error_log($log);
	}
	
	header('Location: /admin/#' . $feature);
	exit();
}

// TODO: display server-side errors on admin page

?>
