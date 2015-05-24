<?php

class Helpers {
	
	/**
	 * Print the result of a form submission.
	 * @param {String} $feature - the feature for which to print the results
	 */
	static function printResult($feature = null, $includeErrors = false) {
		// If no result or message to display, return;
		if (!isset($_SESSION['result'])) {
			return;
		}

		// If given feature matches session feature, print feature
		$globalMatch = $feature === null && !isset($_SESSION['feature']);
		$localMatch = $feature !== null && isset($_SESSION['feature']) && $feature === $_SESSION['feature'];
		
		if ($globalMatch || $localMatch) {
			echo '<div ' . ($feature ? "id=$feature " : '') . 'class="form-result-wrap lh" tabindex="-1">';
			echo '	<div class="form-result form-result--' . $_SESSION['result']['type'] . ' box">';
			echo '		<p>' . $_SESSION['result']['message'] . '</p>';

			if ($includeErrors && isset($_SESSION['errors']) && count($_SESSION['errors']) > 0) {
				echo '		<ul>';
				foreach ($_SESSION['errors'] as $err) {
					echo '			<li>' . $err . '</li>';
				}
				echo '		</ul>';
			}

			echo '	</div>';
			echo '</div>';
			
			// Remove result from session object
			unset($_SESSION['feature']); 
			unset($_SESSION['result']); 
		}	
	}
	
	/**
	 * Print the error message for a field.
	 * This function clears the error message from the session object after it is printed.
	 * @param {String} $field
	 */
	static function printError($field) {
		if (isset($_SESSION['errors']) && isset($_SESSION['errors'][$field])) {
			// Print error message
			echo '<div class="form-error">' . $_SESSION['errors'][$field] . '</div>';
			
			// Clear error message
			unset($_SESSION['errors'][$field]);
		}
	}
	
	/**
	 * Print the data that was provided for a field during the latest form submission.
	 * This function clears the data from the session object after it is printed.
	 * @param {String} $field
	 */
	static function printData($field) {
		if (isset($_SESSION['data']) && isset($_SESSION['data'][$field])) {
			// Print data
			echo $_SESSION['data'][$field];
			
			// Clear data
			unset($_SESSION['data'][$field]);
		}
	}
	
	/**
	 * Print a list of drop-down menu options, optionally selecting one of them.
	 * @param {Array} $options - array of strings, or array of arrays with 'value' and 'label' keys
	 * @param {String} $selectedOpt
	 */
	static function printOptions($options, $selectedOpt = '') {
		error_log('selectedOpt: ' . gettype($selectedOpt));
		// Print the options
		foreach ($options as $opt) {
			if (is_array($opt)) {
				error_log(gettype($opt['value']) . '  ' . gettype($opt['label']));
				$selected = $opt['value'] === $selectedOpt ? ' selected' : '';
				echo "<option value=\"$opt[value]\"$selected>$opt[label]</option>";
			} else {
				error_log(gettype($opt));
				$selected = $opt === $selectedOpt ? ' selected' : '';
				echo "<option$selected>$opt</option>";
			}
		}
	}
	
	/**
	 * Similar to `printData`, but returns the data instead of printing it.
	 * @param {String} $field
	 * @param {String} $fallback - return value if no data found for field in session object
	 */
	static function getData($field, $fallback) {
		$data = $fallback;
		
		if (isset($_SESSION['data']) && isset($_SESSION['data'][$field])) {
			// Retrieve data
			$data = $_SESSION['data'][$field];
			
			// Clear data
			unset($_SESSION['data'][$field]);
		}
		
		return $data;
	}
	
	/**
	 * Convert a month number to string ('January', 'February', etc.)
	 * @param {Integer} $month
	 */
	static function monthToString($month) {
		return date('F', mktime(0, 0, 0, $month, 1));
	}
	
}

?>
