<section class="section">
	<h2 class="section-heading">Membership fees</h2>
	<div class="section-content lh">
		<div class="admin-help" hidden>
			<p>This section controls the membership fees displayed on the <a href="/fees.php"><em>Fees</em></a> page. Provide the prices of a full-year membership below.</p>
		</div>
		<form class="form row" action="/core/forms/form-admin.php?feature=fees&action=update" method="post">
			<?php Helpers::printResult('fees'); ?>
			<div class="form-row row">
				<label class="form-label" for="fee-rmit">RMIT</label>
				<div class="form-field-wrap">
					<input id="fee-rmit" name="fee-rmit" class="form-field field" type="text" value="<?php echo Helpers::getData('fee-rmit', Fees::getFee('rmit')); ?>" size="55" required>
					<?php Helpers::printError('fee-rmit'); ?>
				</div>
			</div>
			<div class="form-row row">
				<label class="form-label" for="fee-non-rmit">non-RMIT</label>
				<div class="form-field-wrap">
					<input id="fee-non-rmit" name="fee-non-rmit" class="form-field field" type="text" value="<?php echo Helpers::getData('fee-non-rmit', Fees::getFee('non-rmit')); ?>" size="55" required>
					<?php Helpers::printError('fee-non-rmit'); ?>
				</div>
			</div>
			<div class="form-row form-row--submit row">
				<button class="form-submit button" type="submit"><span>Save</span></button>
			</div>
		</form>
	</div>
</section>