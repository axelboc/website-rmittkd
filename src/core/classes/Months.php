<?php

class Months extends Feature {
	
	public static $defaultImage = 'placeholder';
	
	private static $instance = null;
	private static $options = null;
	private static $imgPath = 'images/calendar/';
	
	
	/**
	 * Print a month's image.
	 * @param {Integer} $index - the index of the month
	 */
	public static function image($index) {
		$month = self::getInstance()->collection->findOne(['index' => $index]);
		
		if ($month && file_exists(PATH_ROOT . self::$imgPath . $month['image'] . '.jpg')) {
			echo $month['image'];
		} else {
			echo self::$defaultImage;
		}
	}
	
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
		if (!self::$options) {
			// Scan the calendar images directory
			$files = scandir(PATH_ROOT . 'images/calendar');
			
			// Keep only JPEGs and remove file extensions
			self::$options = array_reduce($files, function ($arr, $img) {
				if (preg_match('/^[a-z]+[0-9]*\.jpg$/', $img) === 1) {
					$arr[] = substr($img, 0, -4);
				}
				
				return $arr;
			}, []);
		}
		
		return self::$options;
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
			if (!file_exists(PATH_ROOT . self::$imgPath . $image . '.jpg')) {
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
