<?php

class Feature {
	
	protected $collection;
	protected $formSubmission;
	
	/**
	 * Feature constructor.
	 */
	public function __construct() {
		// Deduce feature name from class name
		$name = strtolower(preg_replace('/[A-Z]([A-Z])/', '-$1', get_class($this)));
		
		// Retrieve the database
		$dbClient = new MongoLite\Client(PATH_DATA);
		//$dbClient->db->dropCollection($name);
		
		// Select feature's collection
		$this->collection = $dbClient->db->selectCollection($name);
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
	 * Conclude an action.
	 */
	protected function conclude() {
		// If errors, exit with failure
		if ($this->formSubmission->hasErrors()) {
			$this->formSubmission->exitWithResult(false, 'Changes not saved');
		}
		
		// Clear data from session
		$this->formSubmission->clearData();
		
		/*$entries = $this->collection->find();
		if ($entries->count()) {
			foreach($entries->toArray() as $e) {
				var_dump($e);
			}
		}*/
		
		// Action successful; exit with success
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
