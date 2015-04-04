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


?>
