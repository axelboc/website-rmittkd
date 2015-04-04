<?php

/*
 * Admin forms action.
 * Handles POST requests to update the website's data stores.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

// Check user is logged in
session_start();
if (empty($_SESSION['authenticated'])) {
	header('Location: /admin/');
	exit();
}

// Get feature
$feature = $_GET['feature'];

switch ($feature) {
	case 'videos':
		$urls = array();
		$urls[] = $_POST['video-1'];
		$urls[] = $_POST['video-2'];
	
		Videos::setUrls($urls);
		break;
	
	default:
}

// TODO: server-side error handling
// TODO: no Ajax behaviour => redirect to admin page?
// TODO: call this from Ajax
// TODO: exit with JSON result
// TODO: client-side error handling

?>
