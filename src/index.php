<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Come and meet a bunch of awesome people at the ITF Taekwon-Do club of RMIT University, Melbourne. Just drop by in gym cloths and enjoy 3 classes for free!">
	<meta property="og:type" content="website">
	<meta property="og:title" content="RMIT ITF Taekwon-Do">
	<meta property="og:description" content="Come and meet a bunch of awesome people at the ITF Taekwon-Do club of RMIT University, Melbourne. Just drop by in gym cloths and enjoy 3 classes for free!">
	<meta property="og:image" content="http://rmittkd.com/images/og/logo-og.png">
	<meta property="og:url" content="http://rmittkd.com/">
	<?php include 'includes/head_css.php'; ?>
	<link rel="stylesheet" href="css/modules-index.css?20150418">
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="body-max">
			<img class="index-hero hero respimg-fit lazy-loading" src="" data-src="images/hero/hero-index-suffix.jpg" width="825" height="610" alt="">
		</div>
		<div class="main-wrap body-max">
			<div class="row">
				<div class="lay-main lay-main--welcome">
					<div class="row">
						<header class="section section-1of2 box section--welcome row">
				        	<h1 class="section-heading">RMIT ITF Taekwon-Do</h1>
				        	<div class="section-content lh">
				        		<p>Forget about the gym! Fitness, cardio, strength, self-defence... <strong>Taekwon-Do</strong> does it all! From complete beginner to seasoned martial artist, our club welcomes all levels of fitness and experience.</p>
				        		<p>Enough to convince you? Have a look at the timetable below and join our next training session &ndash; you get <strong>3 classes for free!</strong> Otherwise, take a look around... We look forward to training with you!</p>
				        	</div>
						</header>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="lay-main">
					<div class="row">
						<section class="tmtbl-section section section-1of2 section-first box">
							<h2 class="section-heading">Timetable</h2>
							<div>
								<table class="tmtbl">
									<caption class="tmtbl-caption"><span class="tmtbl-legend hidden-text">Legend: </span><span><span class="tmtbl-legend-square tmtbl-training tmtbl-top tmtbl-bot"></span> Training</span> <span><span class="tmtbl-legend-square tmtbl-openmat tmtbl-top tmtbl-bot"></span> Open mat</span></caption>
									<thead>
										<tr>
											<th class="tmtbl-time" scope="col">Time</th>
											<th scope="col">Mon</th>
											<th scope="col">Wed</th>
											<th scope="col">Fri</th>
										</tr>
									</thead>
									<tbody>
										<tr class="tmtbl-odd">
											<th class="tmtbl-time" scope="row">18:00-18:30</th>
											<td></td>
											<td></td>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">18:30-19:00</th>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
										</tr>
										<tr class="tmtbl-odd">
											<th class="tmtbl-time" scope="row">19:00-19:30</th>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">19:30-20:00</th>
											<td><span class="tmtbl-training tmtbl-bot hidden-text">Training</span></td>
											<td><span class="tmtbl-training tmtbl-bot hidden-text">Training</span></td>
											<td><span class="tmtbl-openmat hidden-text">Open mat</span></td>
										</tr>
										<tr class="tmtbl-odd">
											<th class="tmtbl-time" scope="row">20:00-20:30</th>
											<td></td>
											<td></td>
											<td><span class="tmtbl-openmat tmtbl-bot hidden-text">Open mat</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
						<section class="section map-section section-1of2 box">
							<h2 class="section-heading">Location</h2>
							<div class="map-wrap inner">
								<a class="map-link link-inv respimg-wrap" href="https://goo.gl/maps/RYwxl" target="_blank">
									<img class="cal-img respimg-crop" src="images/map.png?20150121" width="473" height="149" alt="Map of 360 Swanston St, Melbourne, Australia">
									<span class="map-caption backdrop"><span>RMIT Building 8, Univeristy Function Room 08.02.08</span></span>
								</a>
							</div>
						</section>
					</div>
					<section class="section cal-section box">
						<h2 class="section-heading">Calendar</h2>
						<div class="section-content cal-wrapper">
							<div id="calendar" class="calendar">
								<a class="cal-arrow cal-arrow--prev hidden-text" href="#">Previous month</a>
								<div class="cal-months row">
									<?php include 'includes/calendar.php'; ?>
								</div>
								<a class="cal-arrow cal-arrow--next hidden-text" href="#">Following month</a>
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
<script src="js/calendar.js?20150424"></script>
</body>
</html>