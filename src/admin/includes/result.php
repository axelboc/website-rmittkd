<?php 
	if (isset($_SESSION['result'])) {
		?><div class="form-result-wrap" tabindex="-1">
			<p class="form-result form-result--<?php echo $_SESSION['result']['type']; ?> box"><?php echo $_SESSION['result']['message']; ?></p>
		</div><?php
		unset($_SESSION['feature']); 
		unset($_SESSION['result']); 
	}
?>