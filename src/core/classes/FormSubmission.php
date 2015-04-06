<?php

class FormSubmission {
	
	public static $DEFAULTS = [
		'url' => [
			'sanitise' => 'url',
			'require' => 'Enter a URL',
			'validate' => 'Enter a valid URL'
		],
		'password' => [
			'require' => 'Enter a password',
		]
	];
	
	private $redirectUrl;
	private $isAjax = false;
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
		
		// Check whether this is an Ajax request
		if (isset($_GET['ajax'])) {
			$this->isAjax = true;
		}
		
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
	 * Sanitise and validate the form's fields.
	 * @param {Array} $fields - the fields and their corresponding error messages
	 * return {Boolean} - whether the validation process has not uncovered any error
	 */
	public function validate($fields) {
		// Loop through the fields
		foreach ($fields as $field => $actions) {
			// Ensure that the parameter is set
			if (!isset($_POST[$field])) {
				$this->exitWithResult(false, 'Unexpected error', '[FormSubmission] POST parameter not set: ' . $field);
			}

			// Sanitisation
			if (isset($actions['sanitise'])) {
				// Determine sanitisation filter
				switch ($actions['sanitise']) {
					case 'email':
						$sanitisationFilter = FILTER_SANITIZE_EMAIL;
						$validationFilter = FILTER_VALIDATE_EMAIL;
						break;
					case 'url':
						$sanitisationFilter = FILTER_SANITIZE_URL;
						$validationFilter = FILTER_VALIDATE_URL;
						break;
					default:
						$this->exitWithResult(false, 'Unexpected error', 
											  '[FormSubmission] sanitisation not supported for: ' . $actions['sanitise']);
				}

				// Sanitise
				$value = filter_var($_POST[$field], $sanitisationFilter);
			} else {
				// Do not sanitise, but still strip tags
				$value = strip_tags($_POST[$field]);
			}
			
			// Store the value
			$this->data[$field] = $value;
			
			// If the field is required, ensure that a value has been provided
			if (isset($actions['require'])) {
				if ($value === '') {
					$this->addError($field, $actions['require']);
					continue;
				}
			}

			// Validation
			if (isset($actions['validate'])) {
				if (!isset($validationFilter)) {
					$this->exitWithResult(false, 'Unexpected error', '[FormSubmission] validation filter not set');
				}

				if (filter_var($value, $validationFilter) === false) {
					$this->addError($field, $actions['validate']);
					continue;
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
			$_SESSION['feature'] = $this->feature;
			$_SESSION['data'] = $this->data;
			$_SESSION['errors'] = $this->errors;

			// If message provided, store the result in the session array
			if ($message !== null) { 
				$_SESSION['result'] = $result;
			}
			
			// Redirect
			header('Location: ' . $this->redirectUrl . ($this->feature !== null ? '#' . $this->feature : ''));
		}
		
		exit;
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
	 * @param {String} $message - the error message
	 */
	public function addError($field, $message) {
		$this->errors[$field] = $message;
	}
	
}

?>
