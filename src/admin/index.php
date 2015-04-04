<?php require_once '../core/core.php'; ?>
<!DOCTYPE html>
<html lang="en-AU">
<head>
	<title>Administration | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include 'includes/head_css.php'; ?>
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include '../includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="main-wrap body-max">
			<?php
				// Authentication
				session_start();
				if (empty($_SESSION['authenticated'])) {
					include 'includes/login.php';
				} else {
					include 'includes/admin.php';
					include 'includes/videos.php';
				}
			?>
		</div>
	</article>
</div>
<?php include '../includes/footer.php'; ?>
</body>
</html>