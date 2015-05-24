<section class="section">
	<h2 class="section-heading">Calendar images</h2>
	<div class="section-content lh">
		<p>This section controls the background images used for each month of the calendar on the homepage.</p>
		<form class="form row" action="/core/forms/form-admin.php?feature=months&action=update" method="post">
			<?php Helpers::printResult('months'); ?>
			<?php Helpers::printError('months'); ?>
			<?php
			// Retrieve the months from the database
			$months = Months::getAll();

			// Check if database is corrupted
			if ($months->count() !== 12) {
				// Initialise months with placeholder images
				$months = [];
				for ($i = 1; $i < 13; $i++) {
					$months[] = [
						'index' => $i,
						'image' => Months::$defaultImage
					];
				}
			}
			
			// Add form row for each month
			foreach ($months as $month) {
				$field = 'months-' . $month['index'];
				$monthName = Helpers::monthToString($month['index']);
				?>
				<div class="form-row row">
					<label class="form-label" for="<?php echo $field; ?>"><?php echo $monthName; ?></label>
					<div class="form-field-wrap">
						<select id="<?php echo $field; ?>" name="<?php echo $field; ?>">
							<?php Helpers::printOptions(Months::getImageOptions(), $month['image']); ?>
						</select>
					</div>
				</div>
			<?php } ?>
			<div class="form-row form-row--submit row">
				<button class="form-submit" type="submit"><span>Save</span></button>
			</div>
		</form>
	</div>
</section>