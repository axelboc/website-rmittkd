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
	 * @param {FormSubmission} $submission
	 */
	public static function update($submission) {
		$videos = self::getInstance()->xml->video;
		$i = 0;
		
		foreach ($submission->getData() as $field => $url) {
			// Look for the ID of the video in the URL
			$matches = array();
			preg_match(self::$urlRegex, $url, $matches);
			
			// Ensure that the URL is well formed
			if (count($matches) < 2) {
				$submission->addError($field, 'youtube-url', 'malformed');
				return;
			}
			
			// Store video URL and ID
			$videos[$i] = $url;
			$videos[$i]['id'] = $matches[1];
			$i++;
		}
		
		self::getInstance()->persist();
	}
	
}

?>
