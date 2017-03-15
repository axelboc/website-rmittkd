<?php require_once 'core/core.php'; ?>
<!DOCTYPE html>
<html lang="en-AU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<title>RMIT ITF Taekwon-Do</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Come and meet a bunch of awesome people at the ITF Taekwon-Do club of RMIT University, Melbourne. Just drop by in gym clothes and enjoy 3 classes for free!">
	<meta property="og:type" content="website">
	<meta property="og:title" content="RMIT ITF Taekwon-Do">
	<meta property="og:description" content="Come and meet a bunch of awesome people at the ITF Taekwon-Do club of RMIT University, Melbourne. Just drop by in gym clothes and enjoy 3 classes for free!">
	<meta property="og:image" content="http://rmittkd.com/images/og/logo-og.png">
	<meta property="og:url" content="http://rmittkd.com/">
	<?php include 'includes/head_css.php'; ?>
	<?php include 'includes/head_js.php'; ?>
</head>
<body>
<div class="body-wrap">
	<?php include 'includes/header.php'; ?>
	<article class="main row" role="main">
		<div class="body-max">
			<img class="index-hero hero respimg-fit lazy-loading" src="" data-src="images/hero/hero-index-suffix.jpg" width="825" height="610" alt="">
		</div>
		<div class="main-wrap main-wrap--index body-max">
			<div class="row">
				<div class="lay-main lay-main--welcome">
					<div class="row">
						<header class="section unit tab-1-2 row">
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
						<section class="tmtbl-section section unit tab-1-2">
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
										<tr>
											<th class="tmtbl-time" scope="row">18:30-19:00</th>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
											<td><span class="tmtbl-training tmtbl-top hidden-text">Training</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">19:00-19:30</th>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">19:30-20:00</th>
											<td><span class="tmtbl-training tmtbl-bot hidden-text">Training</span></td>
											<td><span class="tmtbl-training tmtbl-bot hidden-text">Training</span></td>
											<td><span class="tmtbl-training hidden-text">Training</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">20:00-20:30</th>
											<td></td>
											<td></td>
											<td><span class="tmtbl-openmat hidden-text">Open mat</span></td>
										</tr>
										<tr>
											<th class="tmtbl-time" scope="row">20:30-21:00</th>
											<td></td>
											<td></td>
											<td><span class="tmtbl-openmat tmtbl-bot hidden-text">Open mat</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
						<section class="map-section section unit tab-1-2">
							<h2 class="section-heading">Location</h2>
							<div class="map-wrap inner">
								<a class="map-link link-inv respimg-wrap" href="<?php echo Location::url(); ?>" target="_blank">
									<img class="cal-img respimg-crop" src="images/map.jpg" width="473" height="149" alt="Map of Melbourne, Australia, showing the location of RMIT University's CBD campus">
									<span class="map-caption backdrop"><span><?php echo Location::text(); ?></span></span>
								</a>
							</div>
						</section>
					</div>
					<section class="nloc-section section row">
						<div class="section-content lh">
							<h2 class="nloc-heading">New Location!</h2>
							<p>The club now runs classes at the <a href="https://www.google.com.au/maps/place/RMIT+Sports+Centre/@-37.6798996,145.059177,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad64f36b51778cd:0xece131753ee3cdb2!8m2!3d-37.6799039!4d145.0613657" target="_blank">RMIT Sports Centre</a> in <strong>Bundoora</strong>. Come train with us <strong>every Tuesday</strong> from 6:30 to 8pm!</p>
						</div>
					</section>
					<section class="cal-section section">
						<h2 class="section-heading">Calendar</h2>
						<div id="calendar" class="calendar">
							<button class="cal-arrow cal-arrow--prev car-prev hidden-text">Previous month</button>
							<div class="cal-inner">
								<div class="cal-months car-container row" data-position="1" data-max-position="4">
									<?php include 'includes/calendar.php'; ?>
								</div>
							</div>
							<button class="cal-arrow cal-arrow--next car-next hidden-text">Next month</button>
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
