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

// Auto-load feature classes
function __autoload($class_name) {
    require_once PATH_CORE . 'classes/' . $class_name . '.php';
}


/**
 * Load the XML file with given name.
 * @param {String} $name - the name of the file without the XML extension
 * @return {SimpleXMLElement}
 */
function loadXMLFile($name) {
	return simplexml_load_file(PATH_DATA . $name . '.xml');
}

/*function exitWithResult($status, $message = '') {
	echo json_encode(array(array(
		'status' => $status,
		'message' => $message
	)));
	exit;
}*/


?>
