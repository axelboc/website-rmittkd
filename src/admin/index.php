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
			<!--<section class="section box">
				<h1 class="section-heading">Administration</h1>
				<div class="section-content lh"></div>
			</section>
			<section class="section box">
				<h2 class="section-heading">Calendar</h2>
				<div class="section-content lh"></div>
			</section>
			<section class="section box">
				<h2 class="section-heading">Merchandising</h2>
				<div class="section-content lh"></div>
			</section>
			<section class="section box">
				<h2 class="section-heading">Executive committee</h2>
				<div class="section-content lh"></div>
			</section>-->
			<section class="section box">
				<h2 class="section-heading">Videos</h2>
				<div class="section-content lh">
					<?php include 'includes/videos.php'; ?>
				</div>
			</section>
			<!--<section class="section box">
				<h2 class="section-heading">Membership fees</h2>
				<div class="section-content lh"></div>
			</section>-->
		</div>
	</article>
</div>
<?php include '../includes/footer.php'; ?>
</body>
</html>