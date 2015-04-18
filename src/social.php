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
	<link rel="stylesheet" href="css/modules-social.css?20150418">
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="main-wrap body-max">
			<div class="row">
				<section class="yt-section section box row">
					<h2 class="section-heading">YouTube</h2>
					<div class="yt-wrap section-content row">
						<div class="yt-subscribe">
							<div class="g-ytsubscribe" data-channelid="UCC6zmnN4NLQyvlFLfdr18Dw" data-layout="full" data-count="hidden"></div>
						</div>
						<div class="video video--first">
							<iframe src="<?php Videos::iframeUrl(0); ?>" frameborder="0" allowfullscreen></iframe>
						</div>
						<div class="video">
							<iframe src="<?php Videos::iframeUrl(1); ?>" frameborder="0" allowfullscreen></iframe>
						</div>
					</div>
				</section>
			</div>
			<div class="row">
				<div class="lay-main">
					<section class="section section-1of2 section-first box">
						<h1 class="section-heading">Links</h1>
						<div class="links-wrap section-content row">
							<section class="box">
								<h2 class="section-heading-sub">International &amp; National Federations</h2>
								<ul class="list-reset links-inv links-blend row">
									<li class="resource box"><a class="res-link" href="http://www.chitf.org/" target="_blank"><img src="images/social/logo-chitf.png" width="100" height="100" alt="">Chan Hun International Taekwon-Do Federation</a></li>
									<li class="resource box"><a class="res-link" href="https://www.facebook.com/chitfaustralia" target="_blank"><img src="images/social/logo-chitf-australia.png" width="125" height="100" alt="">CHITF Australia</a></li>
								</ul>
							</section>
							<section class="box">
								<h2 class="section-heading-sub clubs-heading">Associated Lai Taekwon-Do Clubs</h2>
								<ul class="res-group list-reset links-inv links-blend row">
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
					<section class="section section-1of2 box">
						<h2 class="section-heading">Facebook</h2>
						<div class="fb-wrap section-content">
							<iframe class="fb-box" src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Frmittkd&amp;width=292&amp;height=404&amp;colorscheme=light&amp;show_faces=false&amp;header=false&amp;stream=true&amp;show_border=false"></iframe>
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
<script src="https://apis.google.com/js/platform.js"></script>
</body>
</html>