<?php

class Singleton {
	
	private static $instance = null;
	
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
	
}

?>
