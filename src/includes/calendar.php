<?php 
// Read calendar.xml
$calXML = simplexml_load_file("data/calendar.xml");
$months = $calXML->month;

// Compute ID of current month (e.g. '2014-3')
$now = new DateTime();
$currentMonthId = $now->format('Y-n');

// Compute ID of previous month
$currentYear = intval($now->format('Y'));
$currentMonth = intval($now->format('n'));
if ($currentMonth > 1) {
	$currentMonth--;
} else {
	$currentYear--;
	$currentMonth = 12;
}
$prevMonthId = $currentYear . '-' . $currentMonth;


// Loop through the months
foreach ($months as $m) {
	$monthId = (string)$m['id'];
	
	// Get filename of image
	$img = isset($m['img']) ? $m['img'] : 'placeholder';
	
	// Convert month index to string (e.g. 1 -> 'January', 2 -> 'February', etc.)
	$expMonthId = explode('-', $monthId);
	$monthStr = date('F', mktime(0, 0, 0, intval($expMonthId[1]), 1));
	
	?>
	<div class="cal-month car-slide" aria-hidden="<?php echo ($monthId === $currentMonthId ? 'false' : 'true'); ?>">
		<div class="cal-month-inner">
			<div class="respimg-wrap">
				<img class="cal-img respimg-crop lazy-loading" src="" data-src="images/calendar/<?php echo $img; ?>.jpg" width="408" height="150" alt="">
			</div>
			<div class="cal-caption backdrop">
				<h3 class="cal-heading"><?php echo $monthStr; ?></h3>
				<ul class="list-reset">
					<?php
					$events = $m->children();
					foreach ($events as $e) {
						switch ($e->getName()) {
						case 'event':
							?><li><strong><?php echo $e['date']; ?></strong> <?php echo $e; ?></li><?php
							break;
						case 'heading':
							?><li><strong><?php echo $e; ?></strong></li><?php
							break;
						}
					}
					?>
				</ul>
			</div>
		</div>
	</div>
	<?php
}
?>