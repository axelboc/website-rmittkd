<?php

/*
 * Admin forms and actions.
 * Requests must have GET parameters `feature` and `action` so they can be routed
 * to the correct feature class and action method.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Initialise new form submission
$formSubmission = new FormSubmission('/admin/');

// Authentication check
if (empty($_SESSION['authenticated'])) {
	$formSubmission->exitWithResult(false, 'Unauthorised access', '[form-admin] unauthorised access');
}

// Feature check
if (!isset($_GET['feature'])) {
	$formSubmission->exitWithResult(false, 'Unexpected error', '[form-admin] `feature` parameter not provided');
}

// Action check
if (!isset($_GET['action'])) {
	$formSubmission->exitWithResult(false, 'Unexpected error', '[form-admin] `action` parameter not provided');
}

// Save feature and action
$feature = filter_var($_GET['feature'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$action = filter_var($_GET['action'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

// Check that the feature class exists
$featureClass = ucfirst($feature);
if (!class_exists($featureClass)) {
	$formSubmission->exitWithResult(false, 'Unexpected error', '[form-admin] feature class not found: ' . $featureClass);
}

// Retrieve the feature's singleton instance
$featureInstance = $featureClass::getInstance();

// Check that the action method exists
if (!method_exists($featureInstance, $action)) {
	$formSubmission->exitWithResult(false, 'Unexpected error', '[form-admin] action method not found: '
									. $featureClass . '->' . $action);
}

// Store feature in session and add to form submission's redirect URL
$_SESSION['feature'] = $feature;
$formSubmission->setRedirectUrl($formSubmission->getRedirectUrl() . '#' . $feature);

// Pass form submission to feature instance and invoke action
$featureInstance->setFormSubmission($formSubmission);
$featureInstance->$action();

?>
