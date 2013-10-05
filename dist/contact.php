<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="description" content="Questions, suggestions? Get in touch!">
	<meta name="viewport" content="initial-scale=1">
	<title>Contact | RMIT ITF Taekwon-Do</title>
	<?php include 'includes/head_css.php'; ?>
	<link rel="stylesheet" href="css/modules-contact.css">
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<section class="main row" role="main">
		<div class="main-wrap body-max">
			<section class="section box">
				<h1 class="section-heading">Contact</h1>
				<div class="section-content">
					<form class="form row">
						<p class="form-row row">
							<label class="form-label" for="name">name</label>
							<input class="form-field box" id="name" name="name" type="text">
						</p>
						<p class="form-row row">
							<label class="form-label" for="email">email</label>
							<input class="form-field box" id="email" name="email" type="text">
						</p>
						<p class="form-row row">
							<label class="form-label" for="subject">subject</label>
							<input class="form-field box" id="subject" name="subject" type="text">
						</p>
						<p class="form-row row">
							<label class="form-label" for="message">message</label>
							<textarea id="message" class="form-field box" name="message" rows="6"></textarea>
						</p>
						<p class="form-row row"><input class="form-submit" type="submit" value="Submit"></p>
					</form>
				</div>
			</section>
		</div>
	</section>
	<?php include 'includes/footer.php'; ?>
	<?php include 'includes/bottom_js.php'; ?>
</div>
</body>
</html>