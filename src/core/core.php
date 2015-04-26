<?php

/**
 * ==================================
 * 
 * Internal API.
 * Provides functions to retrieve and edit the website's XML data stores.
 * 
 * ==================================
 */


// Absolute paths
define('PATH_ROOT', $_SERVER['DOCUMENT_ROOT'] . '/');
define('PATH_CORE', PATH_ROOT . 'core/');
define('PATH_DATA', PATH_ROOT . 'data/');

// Configuration
require_once PATH_CORE . 'config.php';

// Logging
ini_set('log_errors', 1);
ini_set('error_log', PATH_ROOT . 'data/error.log');

// Start session
session_start();


/**
 * Auto-load classes.
 * @param {String} $className
 */
function __autoload($className) {
    require_once PATH_CORE . 'classes/' . $className . '.php';
}


/**
 * Print the result of a form submission.
 * @param {String} $feature - the feature for which to print the results
 */
function printResult($feature = null) {
	// If no result or message to display, return;
	if (!isset($_SESSION['result'])) {
		return;
	}
	
	// If given feature matches session feature, print feature
	$globalMatch = $feature === null && !isset($_SESSION['feature']);
	$localMatch = $feature !== null && isset($_SESSION['feature']) && $feature === $_SESSION['feature'];
	
	if ($globalMatch || $localMatch) {
		echo '<div class="form-result-wrap lh" tabindex="-1">' . PHP_EOL .
			 '	<p class="form-result form-result--' . $_SESSION['result']['type'] . '">' .
			 		$_SESSION['result']['message'] . '</p>' . PHP_EOL .
			 '</div>';
		
		unset($_SESSION['feature']); 
		unset($_SESSION['result']); 
	}	
}

function printError($field) {
	if (isset($_SESSION['errors']) && isset($_SESSION['errors'][$field])) {
		echo '<div class="form-error">' . $_SESSION['errors'][$field] . '</div>';
		unset($_SESSION['errors'][$field]);
	}
}

function printData($field) {
	if (isset($_SESSION['data']) && isset($_SESSION['data'][$field])) {
		echo $_SESSION['data'][$field];
		unset($_SESSION['data'][$field]);
	}
}

?>
