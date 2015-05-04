<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>404 | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:image" content="http://rmittkd.com/images/og/logo-og.png">
	<?php include 'includes/head_css.php'; ?>
	<?php include 'includes/head_js.php'; ?>
	<script>
		// Send exception to Google Analytics
		ga('send', 'exception', {
			'exDescription': '404',
			'exFatal': true
		});
	</script>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<section class="main row" role="main">
		<div class="main-wrap body-max">
			<div class="row">
				<div class="lay-main">
					<section class="section row">
						<h1 class="section-heading">Page Not Found</h1>
						<div class="section-content lh">
							<p><em>Ouch!</em> The board didn't break... We'd usually recommend perseverance, one of the tenets of Taekwon-Do, but it won't help you here: this URL just doesn't lead anywhere!</p>
						</div>
					</section>
		    	</div>
				<?php include 'includes/sidebar.php'; ?>
			</div>
		</div>
	</section>
</div>
<?php include 'includes/footer.php'; ?>
<?php include 'includes/foot_js.php'; ?>
</body>
</html>