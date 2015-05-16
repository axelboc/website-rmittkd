<?php require_once 'core/core.php'; ?>
<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>Social | RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Want to join our growing community? Follow us on Youtube and Facebook or visit the websites of our associated clubs and organisations.">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Social | RMIT ITF Taekwon-Do">
	<meta property="og:description" content="Want to join our growing community? Follow us on Youtube and Facebook or visit the websites of our associated clubs and organisations.">
	<meta property="og:image" content="http://rmittkd.com/images/og/logo-og.png">
	<meta property="og:url" content="http://rmittkd.com/social">
	<meta property="og:site_name" content="RMIT ITF Taekwon-Do">
	<?php include 'includes/head_css.php'; ?>
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="main-wrap main-wrap--social body-max">
			<div class="yt-wrap row">
				<div class="video video--first">
					<iframe src="<?php Videos::iframeUrl(0); ?>" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="video">
					<iframe src="<?php Videos::iframeUrl(1); ?>" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			<div class="row">
				<div class="lay-main lay-main row">
					<section class="links-section section section-1of2 section-first">
						<h1 class="section-heading">Links</h1>
						<div class="links-wrap section-content row">
							<section class="box">
								<h2 class="section-heading-sub">International &amp; National Federations</h2>
								<ul class="list-reset links-inv row">
									<li class="resource"><a class="res-link" href="http://www.chitf.org/" target="_blank"><img src="images/social/logo-chitf.png" width="100" height="100" alt="">Chan Hun International Taekwon-Do Federation</a></li>
									<li class="resource"><a class="res-link" href="https://www.facebook.com/chitfaustralia" target="_blank"><img src="images/social/logo-chitf-australia.png" width="125" height="100" alt="">CHITF Australia</a></li>
								</ul>
							</section>
							<section class="box">
								<h2 class="section-heading-sub clubs-heading">Associated Lai Taekwon-Do Clubs</h2>
								<ul class="res-group list-reset links-inv row">
									<li class="resource--min"><a class="res-link--min" href="http://www.laitkd.com.au/" target="_blank"><img src="images/social/logo-lai.png" width="40" height="40" alt="" /> <span>St Albans Lai Taekwon-Do (<abbr title="Victoria">VIC</abbr>)</span></a></li>
									<li class="resource--min"><a class="res-link--min" href="http://www.facebook.com/pages/Melton-Lai-Taekwon-Do-ITF/119160461466076" target="_blank"><img src="images/social/logo-lai.png" width="40" height="40" alt=""> <span>Melton Lai Taekwon-Do (<abbr title="Victoria">VIC</abbr>)</span></a></li>
									<li class="resource--min"><a class="res-link--min" href="http://www.facebook.com/Laitkdtl" target="_blank"><img src="images/social/logo-lai.png" width="40" height="40" alt=""> <span>Taylors Lakes Lai Taekwon-Do (<abbr title="Victoria">VIC</abbr>)</span></a></li>
									<li class="resource--min"><a class="res-link--min" href="https://www.facebook.com/pages/South-East-Lai-Taekwondo/141973829187223" target="_blank"><img src="images/social/logo-lai.png" width="40" height="40" alt=""> <span>South East Lai Taekwon-Do (<abbr title="Victoria">VIC</abbr>)</span></a></li>
									<li class="resource--min"><a class="res-link--min" href="http://goulburnmartialartacademy.squarespace.com/" target="_blank"><img src="images/social/logo-gmaa.png" width="40" height="40" alt=""> <span>Goulburn Martial Arts Academy (<abbr title="New South Wales">NSW</abbr>)</span></a></li>
									<li class="resource--min"><a class="res-link--min" href="http://www.tkdsomerset.com/" target="_blank"><img src="images/social/logo-somerset.png" width="40" height="40" alt=""> <span>Somerset Lai Taekwon-Do (<abbr title="Tasmania">TAS</abbr>)</span></a></li>
								</ul>
							</section>
						</div>
					</section>
					<section id="facebook-feed" class="fb-section section section-1of2">
						<div id="fb-root"></div>
						<div class="fb-loading" hidden>
							<h2 class="section-heading">Facebook</h2>
							<img class="fb-spinner" src="images/spinner.png" alt="Loading..." width="100" height="100">
						</div>
						<div class="fb-page" data-href="https://www.facebook.com/rmittkd" data-width="375" data-height="427" data-hide-cover="false" data-show-facepile="false" data-show-posts="true">
							<div class="fb-xfbml-parse-ignore">
								<div class="fb-fallback">
									<h2 class="section-heading">Facebook</h2>
									<div class="section-content">
										<p class="fb-fallback-txt"><a href="https://www.facebook.com/rmittkd">RMIT ITF Taekwon-Do</a></p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
	   			<?php include 'includes/sidebar.php'; ?>
	   		</div>
   		</div>
	</article>
</div>
<?php include 'includes/footer.php'; ?>
<?php include 'includes/foot_js.php'; ?>
</body>
</html>