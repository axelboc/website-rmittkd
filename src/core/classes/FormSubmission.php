<?php

class FormSubmission {
	
	private static $ERROR_MESSAGES = [
		'url' => [
			'not-provided' => 'Enter a URL',
			'invalid' => 'Enter a valid URL'
		],
		'password' => [
			'not-provided' => 'Enter a password',
			'invalid' => 'Wrong password'
		],
		'youtube-url' => [
			'malformed' => 'Enter a valid YouTube URL'
		]
	];
	
	private $redirectUrl;
	private $feature;
	private $data = array();
	private $errors = array();
	
	
	/**
	 * Construct a new FormSubmission object.
	 * @param {String} $redirectUrl
	 * @param {Boolean} $authenticationRequired - whether the user must be authenticated to submit the form
	 * @param {Boolean} $featureRequired - whether the submission must include a GET parameter named `feature`
	 */
	public function __construct($redirectUrl, $authenticationRequired = false, $featureRequired = false) {
		$this->redirectUrl = $redirectUrl;
		
		// Authentication check
		if ($authenticationRequired) {
			if (empty($_SESSION['authenticated'])) {
				$this->exitWithResult(false, 'Unauthorised access', '[form-admin] unauthorised access');
			}
		}

		// Feature check
		if ($featureRequired) {
			if (!isset($_GET['feature'])) {
				$this->exitWithResult(false, 'Unexpected error', '[form-admin] `feature` parameter not provided');
			} else {
				$this->feature = $_GET['feature'];
			}
		}
	}
	
	
	/**
	 * Sanitise and validate a POST parameter.
	 * @param {String} $param - the name of the parameter
	 * @param {String} $type - the parameter's type, used for sanitisation and validation
	 * @param {Boolean} $isRequired - whether the parameter's value cannot be empty
	 * @param {Boolean} $validate - whether to validate the parameter's value
	 */
	public function validateParam($param, $type = 'text', $isRequired = true, $validate = true) {
		// Ensure that the parameter is set
		if (!isset($_POST[$param])) {
			$this->exitWithResult(false, 'Unexpected error', '[core] POST parameter not set: ' . $param);
		}

		// Determine sanitisation filter based on type
		switch ($type) {
			case 'url':
				$filter = FILTER_SANITIZE_URL;
				break;
			case 'password':
				$filter = FILTER_DEFAULT;
				break;
			default:
				$this->exitWithResult(false, 'Unexpected error', 
							   '[core] sanitisation not supported for POST parameter type: ' . $type);
		}

		// Sanitise
		$value = filter_var($_POST[$param], $filter);

		// If required parameter, ensure that a value is provided
		if ($isRequired) {
			if ($value === '') {
				$this->addError($param, $type, 'not-provided');
				return;
			}
		}

		// If requested, validate the value according to the parameter's type
		if ($validate) {
			switch ($type) {
				case 'url':
					$filter = FILTER_VALIDATE_URL;
					break;
				default:
					$this->exitWithResult(false, 'Unexpected error', 
								   '[core] validation not supported for POST parameter type: ' . $type);
			}

			// Validate
			if (filter_var($value, $filter) === false) {
				$this->addError($param, $type, 'invalid');
				return;
			}
		}

		$this->data[$param] = $value;
	}

	/**
	 * Exit with result.
	 * @param {Boolean} $success
	 * @param {String} $message
	 * @param {String} $log - optional log message
	 */
	public function exitWithResult($success, $message = null, $log = null) {
		$_SESSION['feature'] = $this->feature;
		$_SESSION['errors'] = $this->errors;
		
		// If message provided, store the result in the session array
		if ($message !== null) { 
			$_SESSION['result'] = [
				'type' => $success ? 'success' : 'fail',
				'message' => $message
			];
		}

		if ($log !== null) {
			error_log($log);
		}

		header('Location: ' . $this->redirectUrl . ($this->feature !== null ? '#' . $this->feature : ''));
		exit();
	}
	
	/**
	 * Get the feature of the form.
	 * @return {String}
	 */
	public function getFeature() {
		return $this->feature;
	}
	
	/**
	 * Set the feature of the form.
	 * @param {String} $feature
	 */
	public function setFeature($feature) {
		$this->feature = $feature;
	}
	
	/**
	 * Get the data parsed from the form submission.
	 * @return {Array}
	 */
	public function getData() {
		return $this->data;
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
	 * @param {String} $type - the type of the field
	 * @param {String} $errorType - the type of the error
	 */
	public function addError($field, $type, $errorType) {
		if (isset(self::$ERROR_MESSAGES[$type]) && isset(self::$ERROR_MESSAGES[$type][$errorType])) {
			$this->errors[$field] = self::$ERROR_MESSAGES[$type][$errorType];
		} else {
			$this->exitWithResult(false, 'Unexpected error', '[form-admin] error message unavailable for field type: ' 
								  . $type . ', and error type: ' . $errorType);
		}
	}
	
}

?>
