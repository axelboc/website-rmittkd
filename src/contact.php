<!DOCTYPE html>
<html lang="en-AU">
<head>
	<meta name="description" content="Get in touch! Meet us in person at the club, or simply fill in the contact form and we'll get back to you.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
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
			<section class="contact-section section box">
				<h1 class="section-heading">Contact</h1>
				<img class="contact-image hero respimg-fit lazy-loading" src="" data-src="images/hero/hero-contact-suffix.png" width="384" height="520" alt="">
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
						<p class="form-row row"><button class="form-submit box" type="submit"><span>Submit</span></button></p>
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