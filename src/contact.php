<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>Contact | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Get in touch! Meet us in person at the club, or simply fill in the contact form and we'll get back to you.">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Contact | RMIT ITF Taekwon-Do">
	<meta property="og:image" content="http://rmittkd.com/images/og/hero-contact-og.jpg">
	<meta property="og:url" content="http://rmittkd.com/contact">
	<meta property="og:site_name" content="RMIT ITF Taekwon-Do">
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
					<form id="contact-form" class="form row">
						<div class="form-row row">
							<label class="form-label" for="name">name</label>
							<div class="form-field-wrap">
								<input class="form-field box" id="name" name="name" type="text" aria-required="true">
								<div class="form-error form-error--blank hidden">Enter your name</div>
							</div>
						</div>
						<div class="form-row row">
							<label class="form-label" for="email">email</label>
							<div class="form-field-wrap">
								<input class="form-field box" id="email" name="email" type="text" aria-required="true">
								<div class="form-error form-error--blank hidden">Enter your email address</div>
								<div class="form-error form-error--email hidden">Enter a valid email address</div>
							</div>
						</div>
						<div class="form-row row">
							<label class="form-label" for="message">message</label>
							<div class="form-field-wrap">
								<textarea id="message" class="form-field box" name="message" rows="6" aria-required="true"></textarea>
								<div class="form-error form-error--blank hidden">Enter your message</div>
							</div>
						</div>
						<div class="form-row row">
							<button class="form-submit box" type="submit"><span>Submit</span></button>
						</div>
					</form>
				</div>
			</section>
		</div>
	</section>
	<?php include 'includes/footer.php'; ?>
	<?php include 'includes/bottom_js.php'; ?>
	<script src="js/contact.js"></script>
</div>
</body>
</html>