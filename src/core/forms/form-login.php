<?php

/*
 * Admin login form action.
 */

// Require core API
require_once $_SERVER['DOCUMENT_ROOT'] . '/core/core.php';

$error = null;
if (!isset($_POST['pwd']) or $_POST['pwd'] === '') {
	$error = 'not-provided';
} else if ($_POST['pwd'] !== ADMIN_PWD) {
	$error = 'invalid';
} else {
	session_start();
	$_SESSION['authenticated'] = true;
}

header('Location: /admin/' . ($error ? '?' . $error : ''));

?>
