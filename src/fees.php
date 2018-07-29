<?php require_once 'core/core.php'; ?>
<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>Fees | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Find out about our club's amazingly cheap membership and training fees for 2013. Not convinced yet? Just come by the club and enjoy 3 classes for free!">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Fees | RMIT ITF Taekwon-Do">
	<meta property="og:description" content="Find out about our club's amazingly cheap membership and training fees for 2013. Not convinced yet? Just come by the club and enjoy 3 classes for free!">
	<meta property="og:image" content="http://rmittkd.com/images/og/hero-fees-og.jpg">
	<meta property="og:url" content="http://rmittkd.com/fees">
	<meta property="og:site_name" content="RMIT ITF Taekwon-Do">
	<?php include 'includes/head_css.php'; ?>
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="main-wrap body-max">
			<header class="section">
				<h1 class="section-heading">Membership Fees</h1>
				<img id="fees-hero" class="fees-hero hero respimg-fit lazy-loading" src="" data-src="images/hero/hero-fees-suffix--tkd.png" width="384" height="311" alt="">
				<div class="section-content">
					<div class="mbrship-intro">
						<p><a href="https://rmitlink.rmit.edu.au/Account/Register?returnUrl=/Clubs/taekwondoitf" target="_blank">Register to RMIT Link</a> to purchase your membership. As a member, you can train up to <strong>four times a week</strong> across our two locations! Choose the <em>Bundoora classes only</em> option if you wish to train only at our Bundoora location. Semester options are available.</p>
						<p class="with-icon">
							<svg class="with-icon__icon" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#000000" d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
							</svg>
							<span class="with-icon__body">Bring another RMIT Student along with you, and you both get <strong>50% off</strong> your membership! (<em>RMIT student</em> option only.)</span>
						</p>
					</div>
					<ul class="mbrship-options list-reset row">
						<li class="mbrship-opt">
							<a href="<?php echo CLUB_SHOP_URL; ?>" class="mbrship-opt-link row">
								<span class="mbrship-fee"><span class="mbrship-val">FREE</span></span></span>
								<span class="mbrship-group"><span>First 3</span> classes</span>
							</a>
						</li>
						<li class="mbrship-opt">
							<a href="<?php echo CLUB_SHOP_URL; ?>" class="mbrship-opt-link mbrship-opt-link--primary row">
								<span class="mbrship-fee"><span class="mbrship-val">$<?php echo Fees::fee('rmit'); ?></span> <span class="mbrship-period">per year</span></span>
								<span class="mbrship-group"><span>RMIT</span> student</span>
							</a>
						</li>
						<li class="mbrship-opt">
							<a href="<?php echo CLUB_SHOP_URL; ?>" class="mbrship-opt-link row">
								<span class="mbrship-fee"><span class="mbrship-val">$<?php echo Fees::fee('non-rmit'); ?></span> <span class="mbrship-period">per year</span></span>
								<span class="mbrship-group"><span>Public</span> non-RMIT</span>
							</a>
						</li>
						<li class="mbrship-opt">
							<a href="<?php echo CLUB_SHOP_URL; ?>" class="mbrship-opt-link row">
								<span class="mbrship-fee"><span class="mbrship-val">$<?php echo Fees::fee('bundoora-only'); ?></span> <span class="mbrship-period">per year</span></span>
								<span class="mbrship-group"><span>Bundoora</span> classes only</span>
							</a>
						</li>
					</ul>
				</div>
			</header>
		</div>
	</article>
</div>
<?php include 'includes/footer.php'; ?>
<?php include 'includes/foot_js.php'; ?>
</body>
</html>
