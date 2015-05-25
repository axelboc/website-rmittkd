<?php

class Fees extends Feature {
	
	private static $instance = null;
	
	
	/**
	 * Print the yearly fee for a membership type.
	 * @param {String} $type - the membership type ('rmit|non-rmit')
	 */
	public static function fee($type) {
		$fee = self::getInstance()->collection->findOne(['type' => $type]);
		echo $fee ? $fee['value'] : 'NA';
	}

	/**
	 * Retrieve the yearly fee for a membership type.
	 * @param {String} $type - the membership type ('rmit|non-rmit')
	 * @return {String}
	 */
	public static function getFee($type) {
		$fee = self::getInstance()->collection->findOne(['type' => $type]);
		return $fee ? $fee['value'] : '';
	}
	
	/**
	 * Get instance.
	 * @return {Videos}
	 */
	public static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new static();
		}
		
		return self::$instance;
	}
	
	
	/**
	 * Update the fees.
	 */
	public function update() {
		// Process the fields
		$data = $this->processFields([
			'fee-rmit' => FormSubmission::$fieldConfigs['fee'],
			'fee-non-rmit' => FormSubmission::$fieldConfigs['fee']
		]);
		
		foreach ($data as $field => $value) {
			// Build fee document
			$type = substr($field, 4);
			$doc = [
				'type' => $type,
				'value' => $value
			];
			
			// Save document in collection
			if ($this->collection->update(['type' => $type], $doc) === 0) {
				// Document not found; insert it
				$res = $this->collection->insert($doc);
			}
		}
		
		// Conclude the action
		$this->conclude();
	}
	
}

?>
