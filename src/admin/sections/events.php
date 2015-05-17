<section id="events" class="section">
	<h2 class="section-heading">Calendar events</h2>
	<div class="section-content lh">
		<p>This section controls the events displayed in the calendar on the <a href="/">homepage</a>. (Note that only six months are shown in the calendar: the current month, the month before and four months after.)</p>
		<p>The <em>day</em> field indicates the day(s) of the month the event is to take place. It must be one of the following: a single number, a list of numbers separated by commas (e.g. &ldquo;<em>1, 8, 15</em>&rdquo;), two numbers separated by a dash (e.g. &ldquo;<em>24-25</em>&rdquo;), or &ldquo;<em>TBC</em>&rdquo;. Do not use leading zeros.</p>
		<form class="form form--wider row" action="/core/forms/form-admin.php?feature=events&action=add" method="post">
			<?php printResult('events', true); ?>
			<table>
				<thead>
					<tr>
						<th scope="col"><label for="evt-month">Month</label></th>
						<th scope="col"><label for="evt-day">Day</label></th>
						<th scope="col"><label for="evt-label">Label</label></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody><?php 
					$index = 0;
					$events = Events::getAll();
					foreach ($events as $evt) {
						?>
						<tr>
							<td><?php echo $evt['month']; ?></td>
							<td><?php echo $evt['day']; ?></td>
							<td><?php echo $evt; ?></td>
							<td>
								<a href="/core/forms/form-admin.php?feature=events&action=remove&index=<?php echo $index; ?>">Remove</a>
							</td>
						</tr>
						<?php
						$index += 1;
					} ?>
					<tr>
						<td>
							<select id="evt-month" name="evt-month">
								<option>04/2015</option>
								<option selected>05/2015</option>
								<option>06/2015</option>
								<option>07/2015</option>
								<option>08/2015</option>
								<option>09/2015</option>
								<option>10/2015</option>
								<option>11/2015</option>
								<option>12/2015</option>
								<option>01/2016</option>
								<option>02/2016</option>
								<option>03/2016</option>
							</select>
						</td>
						<td><input id="evt-day" name="evt-day" type="text" value="<?php printData('evt-day'); ?>"></td>
						<td><input id="evt-label" name="evt-label" type="text" value="<?php printData('evt-label'); ?>"></td>
						<td><button type="submit">Add</button></td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
</section>