<?php

class FormSubmission {
	
	// Validation configurations for common field types
	public static $fieldConfigs = [
		'special' => [ 'sanitise' => FILTER_SANITIZE_FULL_SPECIAL_CHARS ],
		'url' => [
			'sanitise' => FILTER_SANITIZE_URL,
			'require' => 'Enter a URL',
			'validate' => [FILTER_VALIDATE_URL, 'Enter a valid URL']
		],
		'fee' => [
			'require' => 'Enter a number',
			'validate' => [FILTER_VALIDATE_INT, 'Enter a valid number']
		]
	];
	
	protected $redirectUrl;
	
	private $isAjax = false;
	private $data = array();
	private $errors = array();
	
	
	/**
	 * Construct a new FormSubmission object.
	 * @param {String} $redirectUrl
	 */
	public function __construct($redirectUrl) {
		$this->redirectUrl = $redirectUrl;
		
		// Check whether this is an Ajax request
		if (isset($_GET['ajax'])) {
			$this->isAjax = true;
		}
	}
	
	
	/**
	 * Sanitise and validate the form's fields.
	 * @param {Array} $fields - the fields to validate and their respective validation configurations.
	 * 		Each field is mapped to an array with the following keys:
	 * 		- {Integer} sanitise - sanitisation filter; if omitted, FILTER_SANITIZE_STRING is used
	 * 		- {String} require - error message sent when field is not provided; if omitted, field is considered optional
	 * 		- {Array} validate - if omitted, field is not validated
	 * 			[0] {Integer|String} validation filter or custom regex pattern
	 * 			[1] {String} error message sent when field does not validate
	 * @param {Boolean} $isGet - whether to look for the fields in $_GET instead of $_POST
	 * @return {Boolean} - whether all fields passed the validation process
	 */
	public function validate($fields, $isGet = false) {
		// Loop through the fields
		foreach ($fields as $field => $config) {
			// Ensure that the parameter is set and retrieve it
			if ($isGet) {
				if (!isset($_GET[$field])) {
					$this->exitWithResult(false, 'Unexpected error', '[FormSubmission] GET parameter not set: ' . $field);
				}
				$value = $_GET[$field];
			} else {
				if (!isset($_POST[$field])) {
					$this->exitWithResult(false, 'Unexpected error', '[FormSubmission] POST parameter not set: ' . $field);
				}
				$value = $_POST[$field];
			}

			// Sanitise
			$sanitisationFilter = isset($config['sanitise']) ? $config['sanitise'] : FILTER_SANITIZE_STRING;
			$value = filter_var($value, $sanitisationFilter);
			
			// Store the value
			$this->data[$field] = $value;
			
			// If no value has been provided, do not continue with validatation
			if ($value === '') {
				// Add an error if the field is required
				if (isset($config['require'])) {
					$this->addError($field, $config['require']);
				}
				continue;
			}

			// Validation
			if (isset($config['validate'])) {
				$validationConfig = $config['validate'];
				if (!is_array($validationConfig) || count($validationConfig) !== 2) {
					$this->exitWithResult(false, 'Unexpected error', '[FormSubmission] validation config invalid');
				}
				
				if (is_int($validationConfig[0])) {
					// Validation filter provided
					if (filter_var($value, $validationConfig[0]) === false) {
						$this->addError($field, $validationConfig[1]);
						continue;
					}
				} else {
					// Regular expression provided
					if (preg_match($validationConfig[0], $value) !== 1) {
						$this->addError($field, $validationConfig[1]);
						continue;
					}
				}

			}
		}
		
		return !$this->hasErrors();
	}

	/**
	 * Exit with result.
	 * @param {Boolean} $success
	 * @param {String} $message
	 * @param {String} $log - optional log message
	 */
	public function exitWithResult($success, $message = null, $log = null) {
		// Prepare result array
		$result = [
			'type' => $success ? 'success' : 'fail',
			'message' => $message
		];

		// Log
		if ($log !== null) {
			error_log($log);
		}
		
		// If Ajax request, return a JSON response (do not redirect)
		if ($this->isAjax) {
			echo json_encode($result);
			
		// Otherwise, store result and additional data in session
		} else {
			$_SESSION['data'] = $this->data;
			$_SESSION['errors'] = $this->errors;

			// If message provided, store the result in the session array
			if ($message !== null) { 
				$_SESSION['result'] = $result;
			}
			
			// Redirect
			header('Location: ' . $this->redirectUrl);
		}
		
		exit;
	}
	
	/**
	 * Get the redirect URL.
	 * @return {String}
	 */
	public function getRedirectUrl() {
		return $this->redirectUrl;
	}
	
	/**
	 * Set the redirect URL.
	 * @param {String} $redirectUrl
	 */
	public function setRedirectUrl($redirectUrl) {
		$this->redirectUrl = $redirectUrl;
	}
	
	/**
	 * Get the data parsed from the form submission.
	 * @return {Array}
	 */
	public function getData() {
		return $this->data;
	}
	
	/**
	 * Clear the data, typically after a successful form submission.
	 */
	public function clearData() {
		return $this->data = array();
	}
	
	/**
	 * Get the errors encountered while validating and parsing the form submission.
	 * @return {Array}
	 */
	public function getErrors() {
		return $this->errors;
	}
	
	/**
	 * Indicates whether errors have occured.
	 * @return {Boolean}
	 */
	public function hasErrors() {
		return (count($this->errors) > 0);
	}
	
	/**
	 * Add an error.
	 * @param {String} $field - the field responsible for the error
	 * @param {String} $message - the error message
	 */
	public function addError($field, $message) {
		$this->errors[$field] = $message;
	}
	
}

?>
