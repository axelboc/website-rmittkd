<?php

/*
 * Admin forms action.
 * Handles POST requests to update the website's data stores.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Initialise new form submission (authentication and feature required)
$submission = new FormSubmission('/admin/', true, true);

// Validate fields based on feature and process submission
switch ($submission->getFeature()) {
	case 'videos':
		$fields = [
			'video-1' => FormSubmission::$DEFAULTS['url'],
			'video-2' => FormSubmission::$DEFAULTS['url']
		];

		if ($submission->validate($fields)) {
			Videos::update($submission);
		}
		break;

	default:
		// Clear feature (don't want to redirect to /admin/#inexistent-feature) and exit
		$feature = $submission->getFeature();
		$submission->setFeature(null);
		$submission->exitWithResult(false, 'Unexpected error', 
									'[form-admin] unsuported value for `feature` parameter: ' . $feature);
}

// Exit with result
if (!$submission->hasErrors()) {
	$submission->exitWithResult(true, 'Changes saved');
} else {
	$submission->exitWithResult(false, 'Changes not saved');
}

?>
