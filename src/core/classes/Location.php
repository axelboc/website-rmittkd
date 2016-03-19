<?php

class Location extends Feature {
	
	private static $instance = null;
	private static $docType = 'location';
	
	
	/**
	 * Print the location text.
	 */
	public static function text() {
		$loc = self::getInstance()->collection->findOne(['type' => self::$docType]);
		echo $loc ? $loc['text'] : 'RMIT University, Melbourne';
	}
	
	/**
	 * Print the location URL.
	 */
	public static function url() {
		$loc = self::getInstance()->collection->findOne(['type' => self::$docType]);
		echo $loc ? $loc['url'] : 'https://www.google.com.au/maps/place/RMIT+University+-+Melbourne+Campus/@-37.8080978,144.9623788,17z/data=!3m1!4b1!4m2!3m1!1s0x6ad642cb0a2ff0fb:0x8a729628b77319df';
	}

	/**
	 * Retrieve the location text.
	 * @return {String}
	 */
	public static function getText() {
		$loc = self::getInstance()->collection->findOne(['type' => self::$docType]);
		return $loc ? $loc['text'] : '';
	}

	/**
	 * Retrieve the location URL.
	 * @return {String}
	 */
	public static function getUrl() {
		$loc = self::getInstance()->collection->findOne(['type' => self::$docType]);
		return $loc ? $loc['url'] : '';
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
	 * Update the location.
	 */
	public function update() {
		// Process the fields
		$data = $this->processFields([
			'location-text' => [
				'require' => 'Enter a location'
			],
			'location-url' => FormSubmission::$fieldConfigs['url']
		]);
		
    // Build location document
    $doc = [
      'type' => self::$docType,
      'text' => $data['location-text'],
      'url' => $data['location-url']
    ];
    
    // Save document in collection
    if ($this->collection->update(['type' => self::$docType], $doc) === 0) {
      // Document not found; insert it
      $res = $this->collection->insert($doc);
    }
		
		// Conclude the action
		$this->conclude();
	}
	
}

?>
