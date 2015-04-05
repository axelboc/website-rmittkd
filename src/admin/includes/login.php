<section class="section box">
	<h2 class="section-heading">Administration</h2>
	<div class="section-content lh">
		<p>A password is required to access the administration console of the website.</p>
		<form class="form row" action="/core/forms/form-login.php" method="post">
			<?php printResult(); ?>
			<div class="form-row row">
				<label class="form-label" for="pwd">password</label>
				<div class="form-field-wrap">
					<input id="pwd" name="pwd" class="form-field box" type="password" size="15">
					<?php printError('pwd'); ?>
				</div>
			</div>
			<div class="form-row form-row--submit row">
				<button class="form-submit box" type="submit"><span>Log in</span></button>
			</div>
		</form>
	</div>
</section>