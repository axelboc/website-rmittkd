<section class="section">
	<h2 class="section-heading">Videos</h2>
	<div class="section-content lh">
		<p>This section controls the two YouTube videos displayed on the <a href="/social.php"><em>Social</em></a> page. Go to the club's <a href="https://www.youtube.com/user/rmittkd/videos" target="_blank">YouTube channel</a>, click on a video, copy its URL, and then paste it in one of the fields below.</p>
		<form class="form form--wider row" action="/core/forms/form-admin.php?feature=videos&action=update" method="post">
			<?php Helpers::printResult('videos'); ?>
			<div class="form-row row">
				<label class="form-label" for="video-1">video #1</label>
				<div class="form-field-wrap">
					<input id="video-1" name="video-1" class="form-field" type="url" value="<?php echo Helpers::getData('video-1', Videos::getUrl(1)); ?>" size="55" required>
					<?php Helpers::printError('video-1'); ?>
				</div>
			</div>
			<div class="form-row row">
				<label class="form-label" for="video-2">video #2</label>
				<div class="form-field-wrap">
					<input id="video-2" name="video-2" class="form-field" type="url" value="<?php echo Helpers::getData('video-2', Videos::getUrl(2)); ?>" size="55" required>
					<?php Helpers::printError('video-2'); ?>
				</div>
			</div>
			<div class="form-row form-row--submit row">
				<button class="form-submit" type="submit"><span>Save</span></button>
			</div>
		</form>
	</div>
</section>