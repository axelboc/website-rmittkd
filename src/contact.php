<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>Contact | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Get in touch! Meet us in person at the club, or simply fill in the contact form and we'll get back to you.">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Contact | RMIT ITF Taekwon-Do">
	<meta property="og:description" content="Get in touch! Meet us in person at the club, or simply fill in the contact form and we'll get back to you.">
	<meta property="og:image" content="http://rmittkd.com/images/og/hero-contact-og.jpg">
	<meta property="og:url" content="http://rmittkd.com/contact">
	<meta property="og:site_name" content="RMIT ITF Taekwon-Do">
	<?php include 'includes/header_css.php'; ?>
	<link rel="stylesheet" href="css/modules-contact.css">
	<?php include 'includes/header_js.php'; ?>
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
					<form id="contact-form" class="form row" action="includes/process-form.php" method="post">
						<div class="form-result hidden box" tabindex="-1">
							<p class="form-result-message"></p>
						</div>
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
			<div class="row">
				<div class="lay-main">
					<section class="faq section box">
						<h2 class="faq-heading section-heading">Frequently Asked Questions</h2>
						<dl class="faq-list section-content row">
							<dt class="faq-q">I'm a complete beginner. Is it okay?</dt>
								<dd class="faq-a lh">It sure is! We welcome any level of fitness and skills &ndash; no judgment, no pressure.</dd>
							<dt class="faq-q">What exactly do you do at training?</dt>
								<dd class="faq-a lh">We always start with a good warm-up and finish with stretching. The rest is usually a mix of fitness and strength training, and practice of techniques, patterns, sparring drills and self-defence.</dd>
							<dt class="faq-q">What should I bring to training?</dt>
								<dd class="faq-a lh">For your first classes, just come in gym clothes and bring a water bottle. That's all you need to get started!</dd>
							<dt class="faq-q">Don't I need a uniform?</dt>
								<dd class="faq-a lh">You will eventually, but there is no rush. Just discuss it with us at training once you become a member. By the way, the Taekwon-Do uniform is called a <em>dobok</em>.</dd>
							<dt class="faq-q">I've done martial arts before. Can I bring my own uniform and gear?</dt>
								<dd class="faq-a lh">Sorry, but only ITF Taekwon-Do uniforms are allowed in class. Gloves and boots are provided by the club.</dd>
							<dt class="faq-q">What time do classes start?</dt>
								<dd class="faq-a lh">Class times are displayed on the <a href="/" class="link-blend">homepage</a>. However, if it is your first class, please come in 15 minutes beforehand to introduce yourself and fill out some paperwork (contact details, next of kin, etc.)</dd>
							<dt class="faq-q">What happens if I get injured during class?</dt>
								<dd class="faq-a lh">All members (inc. non-RMIT) are covered by RMIT's insurance. You are also covered during your first 3 free classes.</dd>
						</dl>
					</section>
		    	</div>
				<?php include 'includes/sidebar.php'; ?>
			</div>
		</div>
	</section>
</div>
<?php include 'includes/footer.php'; ?>
<?php include 'includes/footer_js.php'; ?>
<script src="js/contact.js"></script>
</body>
</html>