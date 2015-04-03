<?php

class Videos extends Feature {
	
	private static $urlRegex = '/^.+youtube\.com\/watch\?v=(.+)(&.*)?$/';
	private static $iframeUrlFormat = '//www.youtube-nocookie.com/embed/{{id}}?rel=0&amp;wmode=transparent';

	/**
	 * Print the URL of a YouTube video.
	 * @param {Interger} $index - the index of the video in the XML data store
	 */
	public static function url($index) {
		echo self::getInstance()->xml->video[$index];
	}
	
	/**
	 * Print the iframe URL of a YouTube video.
	 * @param {Interger} $index - the index of the video in the XML data store
	 */
	public static function iframeUrl($index) {
		$id = self::getInstance()->xml->video[$index]['id'];
		echo str_replace('{{id}}', $id, self::$iframeUrlFormat);
	}
	
	/**
	 * Set the URLs of the videos and persist the changes to the store.
	 * @param {Array} $urls
	 */
	public static function setUrls($urls) {
		$videos = self::getInstance()->xml->video;
		
		foreach ($urls as $index => $url) {
			// Look for the ID of the video in the URL
			$matches = array();
			preg_match(self::$urlRegex, $url, $matches);
			
			$videos[$index] = $url;
			$videos[$index]['id'] = $matches[1];
		}
		
		self::getInstance()->persist();
	}
	
}

?>
