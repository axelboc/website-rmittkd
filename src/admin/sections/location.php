<section class="section">
	<h2 class="section-heading">Location</h2>
	<div class="section-content lh">
		<div class="admin-help" hidden>
      <p>This section controls the text and URL used in the location section on the homepage. Provide a concise textual location and <a href="http://maps.google.com.au">Google Maps</a> URL below.</p>
		</div>
		<form class="form row" action="/core/forms/form-admin.php?feature=location&action=update" method="post">
			<?php Helpers::printResult('location'); ?>
			<div class="form-row row">
				<label class="form-label" for="location-text">Location</label>
				<div class="form-field-wrap">
					<input id="location-text" name="location-text" class="form-field field" type="text" value="<?php echo Helpers::getData('location-text', Location::getText()); ?>" size="55" required>
					<?php Helpers::printError('location-text'); ?>
				</div>
			</div>
			<div class="form-row row">
				<label class="form-label" for="location-url">Google Maps URL</label>
				<div class="form-field-wrap">
					<input id="location-url" name="location-url" class="form-field field" type="text" value="<?php echo Helpers::getData('location-url', Location::getUrl()); ?>" size="55" required>
					<?php Helpers::printError('location-url'); ?>
				</div>
			</div>
			<div class="form-row form-row--submit row">
				<button class="form-submit button" type="submit"><span>Save</span></button>
			</div>
		</form>
	</div>
</section>