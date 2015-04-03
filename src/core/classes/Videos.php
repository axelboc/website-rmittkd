<?php

class Videos extends Singleton {
	
	private static $iframeUrlFormat = '//www.youtube-nocookie.com/embed/{{id}}?rel=0&amp;wmode=transparent';
	
	private $ids;
	private $urls;
	
	/**
	 * Instanciate clas and parse XML data store.
	 */
	public function __construct() {
		// Load file
		$xmlVideos = loadXMLFile('videos');

		$this->ids = array();
		$this->urls = array();
		
		foreach ($xmlVideos->video as $xmlVideo) {
			$this->ids[] = $xmlVideo['id'];
			$this->urls[] = $xmlVideo['url'];
		}
	}

	/**
	 * Print the URL of a YouTube video.
	 * @param {Interger} $index - the index of the video in the XML data store
	 */
	public static function url($index) {
		echo self::getInstance()->urls[$index];
	}
	
	/**
	 * Print the iframe URL of a YouTube video.
	 * @param {Interger} $index - the index of the video in the XML data store
	 */
	public static function iframeUrl($index) {
		$id = self::getInstance()->ids[$index];
		echo str_replace('{{id}}', $id, self::$iframeUrlFormat);
	}
	
}

?>
