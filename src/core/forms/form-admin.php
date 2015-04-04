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
	error_log('[form-admin] unauthorised access');
	header('Location: /admin/');
	exit();
}

// Get feature
if (!isset($_GET['feature'])) {
	$errors[] = 'Unexpected error.';
	error_log('[form-admin] `feature` parameter not provided');
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
			$errors[] = 'Unexpected error.';
			error_log('[form-admin] unsuported value for `feature` parameter: ' . $feature);
	}
}

// Store errors in session and redirect
$_SESSION['errors'] = $errors;
header('Location: /admin/');


// TODO: display server-side errors on admin page

// TODO: call this from Ajax
// TODO: exit with JSON result
// TODO: client-side error handling

?>
