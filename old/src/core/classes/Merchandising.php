<?php

class Merchandising extends Feature {
	
	private static $instance = null;
	
	
	/**
	 * Retrieve a random merchandising item.
	 * @return {MongoLite\Cursor}
	 */
	public static function getRandom() {
		$items = self::getInstance()->collection->find()->toArray();
		return $items[array_rand($items)];
	}
	
	/**
	 * Retrieve all the merchandising items.
	 * @return {MongoLite\Cursor}
	 */
	public static function getAll() {
		return self::getInstance()->collection->find();
	}
	
	/**
	 * Get instance.
	 * @return {Merchandising}
	 */
	public static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new static();
		}
		
		return self::$instance;
	}
	
	
	/**
	 * Add a new merchandising item.
	 */
	public function add() {
		// Process the fields
		$doc = $this->processFields([
			'merch-title' => [
				'require' => 'Enter a title'
			],
			'merch-desc' => [
				'require' => 'Enter a description'
			],
			'merch-image' => [
				'sanitise' => FILTER_SANITIZE_URL,
				'validate' => [FILTER_VALIDATE_URL, 'Enter a valid URL']
			]
		]);

		// Insert document in collection
		$res = $this->collection->insert($doc);

		// Conclude the action
		$this->conclude();
	}
	
	/**
	 * Remove a merchandising item.
	 */
	public function remove() {
		// Process GET parameter `id`
		$data = $this->processFields([
			'id' => FormSubmission::$fieldConfigs['special']
		], true);
		
		// Find item to remove
		$item = $this->collection->findOne(['_id' => $data['id']]);
		
		// Fail if no item found with ID
		if (!$item) {
			$this->formSubmission->exitWithResult(false, 'Unexpected error',
												  '[Merchandising] no item found with id=' . $data['id']);
		}
		
		// Remove the item and conclude the action
		$this->collection->remove(['_id' => $data['id']]);
		$this->conclude();
	}
	
}

?>
