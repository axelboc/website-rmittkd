
(function () {
	
	$(function () {
		
		var $form = $(document.getElementById("contact-form"));
		var $fields = $form.find(".form-field");
		
		$form.submit(function (evt) {
			evt.preventDefault();
			
			/* ===== Client-side validation ===== */
			
			// Check for empty fields
			$fields.each(function () {
				
			});
			
			
			return false;
		});
		
	});
	
}());
