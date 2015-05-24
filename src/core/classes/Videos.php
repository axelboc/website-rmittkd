<?php

class Videos extends Feature {
	
	private static $instance = null;
	private static $urlRegex = '/^.+youtube\.com\/watch\?v=(.+)(&.*)?$/';
	private static $iframeUrlFormat = 'https://www.youtube.com/embed/{{id}}?rel=0&amp;wmode=transparent';

	/**
	 * Print the URL of a YouTube video.
	 * @param {Integer} $index - the index of the video
	 */
	public static function url($index) {
		$video = self::getInstance()->collection->findOne(['index' => $index]);
		echo $video ? $video['url'] : '';
	}
	
	/**
	 * Print the iframe URL of a YouTube video.
	 * @param {Integer} $index - the index of the video
	 */
	public static function iframeUrl($index) {
		$video = self::getInstance()->collection->findOne(['index' => $index]);
		echo $video ? $video['iframeUrl'] : '';
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
	 * Set the URLs of the videos.
	 */
	public function update() {
		// Process the fields
		$data = $this->processFields([
			'video-1' => FormSubmission::$fieldConfigs['url'],
			'video-2' => FormSubmission::$fieldConfigs['url']
		]);
		
		$i = 1;
		foreach ($data as $field => $url) {
			// Look for the ID of the video in the URL
			$matches = array();
			preg_match(self::$urlRegex, $url, $matches);
			
			// Ensure that the URL is well formed
			if (count($matches) < 2) {
				$this->formSubmission->addError($field, 'Enter a valid YouTube URL');
				$this->conclude();
			}
			
			// Use video ID to compute iframe URL
			$iframeUrl = str_replace('{{id}}', $matches[1], self::$iframeUrlFormat);
			
			// Build video document
			$doc = [
				'index' => $i,
				'url' => $url,
				'iframeUrl' => $iframeUrl
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
