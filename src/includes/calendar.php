<?php 

// Retrieve number and year of previous month
$lastMonth = strtotime('-1 month');
$month = (int) date('n', $lastMonth);
$year = (int) date('Y', $lastMonth);

// Add six months to the calendar
for ($i = 0; $i < 6; $i++) {
	// Get the month's events
	$events = Events::get($month, $year);
	
	// Convert month number to string ('January', 'February', etc.)
	$monthStr = Helpers::monthToString($month);
	
	?>
	<div class="cal-month car-slide" aria-hidden="<?php echo $i !== 1; ?>">
		<div class="cal-month-inner">
			<div class="respimg-wrap">
				<img class="cal-img respimg-crop lazy-loading" src="" data-src="images/calendar/<?php Months::image($month); ?>.jpg" width="408" height="150" alt="">
			</div>
			<div class="cal-caption backdrop">
				<h3 class="cal-heading"><?php echo $monthStr; ?></h3>
				<ul class="list-reset">
					<?php
					foreach ($events as $evt) {
						echo "<li><strong>$evt[day]</strong> $evt[label]</li>";
					}
					?>
				</ul>
			</div>
		</div>
	</div>
	<?php
	
	// Increment to the following month
	$month++;
	if ($month > 12) {
		$month = 1;
		$year++;
	}
}
?>