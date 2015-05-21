<?php

class Feature {
	
	protected $dbClient;
	protected $collectionName;
	protected $collection;
	protected $formSubmission;
	
	/**
	 * Feature constructor.
	 */
	public function __construct() {
		// Deduce feature name from class name
		$this->collectionName = strtolower(preg_replace('/[A-Z]([A-Z])/', '-$1', get_class($this)));
		
		// Retrieve the database
		$this->dbClient = new MongoLite\Client(PATH_DATA);
		
		// Select feature's collection
		$this->collection = $this->dbClient->db->selectCollection($this->collectionName);
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
	
	/**
	 * Clear the feature's database collection.
	 */
	public function clearCollection() {
		$this->dbClient->db->dropCollection($this->collectionName);
		$this->collection = $this->dbClient->db->selectCollection($this->collectionName);
	}
	
	/**
	 * Debug the feature's database collection.
	 */
	public function debugCollection() {
		$entries = $this->collection->find();
		foreach($entries as $e) {
			var_dump($e);
		}
	}
	
}

?>
