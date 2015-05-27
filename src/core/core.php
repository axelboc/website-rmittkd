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

// Configuration
require_once PATH_CORE . 'config.php';

// Logging
ini_set('log_errors', 1);
ini_set('error_log', PATH_CORE . 'error.log');

// Start session
session_start();


/**
 * Auto-load classes.
 * @param {String} $className
 */
function __autoload($className) {
	if (file_exists(PATH_CORE . "classes/$className.php")) {
    	require_once PATH_CORE . "classes/$className.php";
	} else {
		$className = preg_replace('/\\\\/', '/', $className);
		if (file_exists(PATH_CORE . "vendor/$className.php")) {
			require_once PATH_CORE . "vendor/$className.php";
		}
	}
}

?>
