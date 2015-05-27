<section class="admin-merch section">
	<h2 class="section-heading">Merchandising</h2>
	<div class="section-content lh">
		<div class="admin-help" hidden>
			<p>This section controls the merchandising items displayed in the sidebar. Don't hesitate to write a funny description. The image is optional but recommended&mdash;if a photo is used on the item's product page on RMIT Link, provide its URL in the field below: right click on the photo, select <em>View image</em>, then copy the URL from your browser's address bar.</p>
		</div>
		<form action="/core/forms/form-admin.php?feature=merchandising&action=add" method="post">
			<?php Helpers::printResult('merchandising', true); ?>
			<table class="admin-table">
				<thead>
					<tr>
						<th scope="col"><label for="merch-title">Title</label></th>
						<th scope="col"><label for="merch-desc">Description</label></th>
						<th scope="col"><label for="merch-image">Image URL</label></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody class="links-inv"><?php 
					$merchItems = Merchandising::getAll();
					foreach ($merchItems as $merchItem) {
						?>
						<tr>
							<td><?php echo $merchItem['merch-title']; ?></td>
							<td><?php echo $merchItem['merch-desc']; ?></td>
							<td><?php echo $merchItem['merch-image']; ?></td>
							<td>
								<a href="/core/forms/form-admin.php?feature=merchandising&action=remove&id=<?php echo $merchItem['_id']; ?>" title="Remove item">[x]</a>
							</td>
						</tr>
						<?php
					} ?>
					<tr class="admin-row--add">
						<td><input id="merch-title" name="merch-title" class="field" type="text" value="<?php Helpers::printData('merch-title'); ?>" size="30"></td>
						<td><textarea id="merch-desc" name="merch-desc" class="field" rows="2"><?php Helpers::printData('merch-desc'); ?></textarea></td>
						<td><input id="merch-image" name="merch-image" class="field" type="url" value="<?php Helpers::printData('merch-image'); ?>" size="80"></td>
						<td><button class="admin-btn button" type="submit">Add</button></td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
</section>