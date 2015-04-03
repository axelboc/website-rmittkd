<?php

class Feature {
	
	private static $instance = null;
	
	protected $store;
	protected $xml;
	
	/**
	 * Parse XML data store.
	 */
	public function __construct() {
		$this->store = strtolower(preg_replace('/[A-Z]([A-Z])/', '-$1', get_class($this)));
		$this->xml = simplexml_load_file(PATH_DATA . $this->store . '.xml');
	}
	
	/**
	 * Get instance.
	 * @return {Singleton}
	 */
	protected static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new static();
		}
		
		return self::$instance;
	}
	
	/**
	 * Persist XML to file.
	 */
	protected function persist() {
		file_put_contents(PATH_DATA . $this->store . '.xml', $this->xml->asXML());
	}
	
}

?>
