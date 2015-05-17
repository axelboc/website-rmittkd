<?php

class Videos extends Feature {
	
	private static $instance = null;
	private static $urlRegex = '/^.+youtube\.com\/watch\?v=(.+)(&.*)?$/';
	private static $iframeUrlFormat = 'https://www.youtube.com/embed/{{id}}?rel=0&amp;wmode=transparent';

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
	 * Set the URLs of the videos.
	 */
	public function update() {
		// Process the fields
		$data = $this->processFields([
			'video-1' => FormSubmission::$fieldConfigs['url'],
			'video-2' => FormSubmission::$fieldConfigs['url']
		]);
		
		// Retrieve the video elements from the data store
		$videos = $this->xml->video;
		$i = 0;
		
		foreach ($data as $field => $url) {
			// Look for the ID of the video in the URL
			$matches = array();
			preg_match(self::$urlRegex, $url, $matches);
			
			// Ensure that the URL is well formed
			if (count($matches) < 2) {
				$this->formSubmission->addError($field, 'Enter a valid YouTube URL');
				$this->conclude();
			}
			
			// Store video URL and ID
			$videos[$i] = $url;
			$videos[$i]['id'] = $matches[1];
			$i++;
		}
		
		// Conclude the action
		$this->conclude();
	}
	
}

?>
