<?php
	$self = $_SERVER['PHP_SELF'];
	$curr = ' class="nav-current"';
?>
<header class="header row" role="banner">
	<div class="body-max">
		<a class="logo" href="/"><img class="logo-img" src="/images/logo-rmit-itf.png" width="150" height="150" alt="RMIT ITF Taekwon-Do"></a>
		<a id="nav-trigger" class="nav-trigger hidden-text" href="#">Navigation</a>
		<nav id="nav" class="nav row" tabindex="-1" role="navigation" aria-hidden="false">
			<ul class="nav-list list-reset links-inv">
				<li><a<?php if ($self === '/index.php') echo $curr; ?> href="/">Home</a></li>
				<li><a<?php if ($self === '/tkd.php') echo $curr; ?> href="/tkd.php">Taekwon-Do</a></li>
				<li><a<?php if ($self === '/dojang.php') echo $curr; ?> href="/dojang.php">Our Dojang</a></li>
				<li class="nav-half"><a<?php if ($self === '/social.php') echo $curr; ?> href="/social.php">Social</a></li>
				<li><a<?php if ($self === '/fees.php') echo $curr; ?> href="/fees.php">Fees</a></li>
				<li><a<?php if ($self === '/contact.php') echo $curr; ?> href="/contact.php">Contact</a></li>
			</ul>
			<a class="nav-close hidden-text" href="#">Close navigation</a>
		</nav>
	</div>
</header>