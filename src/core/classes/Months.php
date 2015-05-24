<?php

class Months extends Feature {
	
	private static $instance = null;
	private static $options = null;
	
	
	/**
	 * Retrieve all twelve month images.
	 * @return {MongoLite\Cursor}
	 */
	public static function getAll() {
		$months = self::getInstance()->collection->find();
		return $months->sort(['month' => 1]);
	}
	
	/**
	 * Get the month image options.
	 * @return {Array}
	 */
	public static function getOptions() {
		if (!$this->options) {
			// Scan the calendar images directory
			$files = scandir(PATH_ROOT . 'images/calendar');
			
			// Remove JPG extension
			$this->options = array_map(function ($img) {
				return substr($img, 0, -4);
			}, $files);
		}
		
		return $this->options;
	}
	
	/**
	 * Get instance.
	 * @return {Months}
	 */
	public static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new static();
		}
		
		return self::$instance;
	}
	
	
	/**
	 * Update the month images.
	 */
	public function update() {
		// Build the fields array
		$fields = [];
		for ($i = 1; $i < 13; $i++) {
			$fields['months-' . $i] = [
				'sanitise' => FILTER_SANITIZE_FULL_SPECIAL_CHARS
			];
		}
		
		// Process the fields
		$data = $this->processFields($fields);
		
		$i = 1;
		foreach ($data as $field => $image) {
			// Ensure that the image file exists
			if (!file_exists(PATH_ROOT . 'images/calendar/' . $image . '.jpg')) {
				$this->formSubmission->exitWithResult(false, 'Unexpected error',
													  '[Months] no image found with name=' . $image);
			}
			
			// Build month document
			$doc = [
				'index' => $i,
				'image' => $image
			];
			
			// Save document in collection
			if ($this->collection->update(['index' => $i], $doc) === 0) {
				// Document not found; insert it
				$res = $this->collection->insert($doc);
			}
			
			$i++;
		}
		
		// Conclude the action
		$this->conclude();
	}
	
}

?>
