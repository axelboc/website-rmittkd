<?php

class Feature {
	
	protected $store;
	protected $xml;
	protected $formSubmission;
	
	/**
	 * Parse XML data store.
	 */
	public function __construct() {
		$this->store = strtolower(preg_replace('/[A-Z]([A-Z])/', '-$1', get_class($this)));
		$this->xml = simplexml_load_file(PATH_DATA . $this->store . '.xml');
	}
	
	/**
	 * Validate fields and return their values.
	 * @param {Array} $fields
	 * @param {Boolean} $isGet
	 */
	protected function processFields($fields, $isGet = false) {
		// Validate the fields
		if (!$this->formSubmission->validate($fields, $isGet)) {
			$this->formSubmission->exitWithResult(false, 'Changes not saved');
		}
		
		// Return the new form submission data
		return $this->formSubmission->getData();
	}
	
	/**
	 * Conclude an action: persist XML to file and exit.
	 */
	protected function conclude() {
		// Check if errors
		if ($this->formSubmission->hasErrors()) {
			$this->formSubmission->exitWithResult(false, 'Changes not saved');
		}
		
		// Persist XML to file
		file_put_contents(PATH_DATA . $this->store . '.xml', $this->xml->asXML());
		
		// Clear data from session
		$this->formSubmission->clearData();
		
		// Action successful
		$this->formSubmission->exitWithResult(true, 'Changes saved');
	}
	
	/**
	 * Set the form submission instance.
	 * @param {FormSubmission} $formSubmission
	 */
	public function setFormSubmission($formSubmission) {
		$this->formSubmission = $formSubmission;
	}
	
}

?>
