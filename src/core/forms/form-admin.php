<?php

/*
 * Admin forms action.
 * Handles POST requests to update the website's data stores.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Initialise new form submission (authentication and feature required)
$submission = new FormSubmission('/admin/', true, true);

// Process form submission based on feature
switch ($submission->getFeature()) {
	case 'videos':
		$submission->validateParam('video-1', 'url');
		$submission->validateParam('video-2', 'url');

		if (!$submission->hasErrors()) {
			Videos::update($submission);
		}
		break;

	default:
		// Clear feature and exit
		$feature = $submission->getFeature();
		$submission->setFeature(null);
		$submission->exitWithResult(false, 'Unexpected error', '[form-admin] unsuported value for `feature` parameter: '
									. $feature);
}

// Exit with result
if (!$submission->hasErrors()) {
	$submission->exitWithResult(true, 'Changes saved');
} else {
	$submission->exitWithResult(false, 'Changes not saved');
}

?>
