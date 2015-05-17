<?php

class Events extends Feature {
	
	private static $instance = null;
	
	
	/**
	 * Retrieve all the events.
	 * @return {SimpleXMLElement}
	 */
	public static function getAll() {
		return self::getInstance()->xml->event;
	}
	
	/**
	 * Get instance.
	 * @return {Singleton}
	 */
	public static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new static();
		}
		
		return self::$instance;
	}
	
	
	/**
	 * Add a new event.
	 */
	public function add() {
		// Process the fields
		$data = $this->processFields([
			'evt-month' => [
				'require' => 'Select a month',
				'validate' => ['/^[0-9]{2}\/[0-9]{4}$/', 'Select a valid month (mm/yyyy)']
			],
			'evt-day' => [
				'require' => 'Enter a day',
				'validate' => [
					'/^([0-9]{1,2}(, [0-9]{1,2})*|[0-9]{1,2}\-[0-9]{1,2}|TBC)$/',
					'Enter a valid day (cf. instructions)'
				]
			],
			'evt-label' => [
				'require' => 'Enter a label'
			]
		]);
		
		// Add new event
		$evt = $this->xml->addChild('event', $data['evt-label']);
		$evt->addAttribute('month', $data['evt-month']);
		$evt->addAttribute('day', $data['evt-day']);
		
		// Conclude the action
		$this->conclude();
	}
	
	/**
	 * Remove an event.
	 */
	public function remove() {
		// Process the GET parameter `index`
		$data = $this->processFields([
			'index' => [ 'sanitise' => FILTER_SANITIZE_NUMBER_INT ]
		], true);
		
		// Retrieve index of event to remove
		$index = $data['index'];
		
		// Fail if index is not provided
		// The 'require' validation is not used here because this is a system error, not a user input error
		if ($index === '') {
			$this->formSubmission->exitWithResult(false, 'Unexpected error', '[Events] `index` parameter is empty');
		}
		
		// Retrieve the event
		$index = (int)$index;
		$evt = $this->xml->event[$index];
		
		// Fail if event not found
		if (is_null($evt)) {
			$this->formSubmission->exitWithResult(false, 'Unexpected error', '[Events] event not found at index: ' . $index);
		}
		
		// Remove the event and conclude the action
		unset($this->xml->event[$index]);
		$this->conclude();
	}
	
}

?>
