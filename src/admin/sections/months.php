<section class="admin-months section">
	<h2 class="section-heading">Calendar images</h2>
	<div class="section-content lh">
		<div class="admin-help" hidden>
			<p>This section controls the background images used for each month of the calendar on the homepage.</p>
		</div>
		<form class="admin-months-form row" action="/core/forms/form-admin.php?feature=months&action=update" method="post">
			<?php Helpers::printResult('months'); ?>
			<?php Helpers::printError('months'); ?>
			<?php
			// Retrieve the months from the database
			$months = Months::getAll()->toArray();

			// Check if database is corrupted
			if (count($months) !== 12) {
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
			foreach ($months as $index => $month) {
				// Split field on two columns
				if ($index === 0 || $index === 6) {
					?><div class="unit tab-1-2"><?php
				}
				
				$field = 'months-' . $month['index'];
				$monthName = Helpers::monthToString($month['index']);
				?>
				<div class="form-row row">
					<label class="form-label" for="<?php echo $field; ?>"><?php echo $monthName; ?></label>
					<div class="form-field-wrap">
						<select id="<?php echo $field; ?>" name="<?php echo $field; ?>" class="form-field field field--select">
							<?php Helpers::printOptions(Months::getImageOptions(), $month['image']); ?>
						</select>
					</div>
				</div>
			<?php
				// Close columns
				if ($index === 5) {
					?></div><?php
				} 
			}
			?>
				<div class="form-row form-row--submit row">
					<button class="admin-btn form-submit button" type="submit"><span>Save</span></button>
				</div>
			</div>
		</form>
	</div>
</section>