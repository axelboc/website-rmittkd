<?php

/**
 * ==================================
 * 
 * Internal API.
 * Provides functions to retrieve and edit the website's XML data stores.
 * 
 * ==================================
 */


// Absolute path to root
define('PATH_ROOT', $_SERVER['DOCUMENT_ROOT'] . '/');
define('PATH_CORE', PATH_ROOT . 'core/');
define('PATH_DATA', PATH_ROOT . 'data/');

// Configuration
require_once PATH_CORE . 'config.php';

// Logging
ini_set('log_errors', 1);
ini_set('error_log', PATH_ROOT . 'data/error.log');

// Auto-load feature classes
function __autoload($class_name) {
    require_once PATH_CORE . 'classes/' . $class_name . '.php';
}


/**
 * Sanitise and validate a POST parameter.
 * @param {Array} &$data - the array in which to store the parameter's value after processing
 * @param {Array} &$errors
 * @param {String} $param - the name of the parameter
 * @param {String} $type - the parameter's type, used for sanitisation and validation
 * @param {Boolean} $isRequired - whether the parameter's value cannot be empty
 * @param {Boolean} $validate - whether to validate the parameter's value
 */
function validatePOSTParam(&$data, &$errors, $param, $type = 'text', $isRequired = true, $validate = true) {
	// Ensure that the parameter is set
	if (!isset($_POST[$param])) {
		$errors[] = 'Unexpected error.';
		error_log('[core] POST parameter not set: ' . $param);
		return;
	}

	// Determine sanitisation filter based on type
	switch ($type) {
		case 'url':
			$filter = FILTER_SANITIZE_URL;
			break;
		default:
			$errors[] = 'Unexpected error.';
			error_log('[core] unkown POST parameter type: ' . $type);
			return;
	}

	// Sanitise
	$value = filter_var($_POST[$param], $filter);

	// If required parameter, ensure that a value is provided
	if ($isRequired) {
		if ($value === '') {
			$errors[] = [$param, 'not-provided'];
			return;
		}
	}

	// If requested, validate the value according to the parameter's type
	if ($validate) {
		switch ($type) {
			case 'url':
				$filter = FILTER_VALIDATE_URL;
				break;
			default:
				$errors[] = 'Unexpected error.';
				error_log('[core] unkown POST parameter type: ' . $type);
				return;
		}

		// Validate
		if (filter_var($value, $filter) === false) {
			$errors[] = [$param, 'invalid'];
			return;
		}
	}
	
	$data[$param] = $value;
}


?>
