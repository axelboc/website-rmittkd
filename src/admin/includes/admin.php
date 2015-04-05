<section id="global" class="section section-admin--global box row">
	<h2 class="section-heading">Administration</h2>
	<div class="section-content lh">
		<?php 
			if (isset($_SESSION['feature']) && $_SESSION['feature'] === 'global') {
				include 'includes/result.php';
			}
		?>
		<p>Welcome to the administration console of the website. Please be aware that changes made here are <strong>applied instantly</strong> and <strong>cannot be rolled back</strong>. Read the instructions carefully and do not hesitate to ask for advice.</p>
	</div>
</section>