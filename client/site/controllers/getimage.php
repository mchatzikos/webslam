<?php

use Hubzero\Utility\Debug;


/**
 * Getimage controller class
 */
class WebslamControllerGetimage extends Hubzero\Component\SiteController
{
	/**
	 * Display default task
	 *
	 * @return  void
	 */
	public function execute()
	{
		dlog('In execute getimage');
		$this->registerTask('__default', 'getimage');
		parent::execute();
	}

	/**
	 * Get Image task
	 *
	 * @return  void
	 */
	public function getimageTask()
	{
		/* TODO: pass all params to server side script.  Is this all? */
		$merger = Request::getVar('merger', '');
		$snap = Request::getVar('snap', '');
		$axis = Request::getVar('axis', '');
		$band = Request::getVar('band', '');
		$quant = Request::getVar('quant', '');

		/*
		 *  NOTE: Call server side script which contains no echo statements
		 */
		$config = Component::params('com_webslam');
		$hostname = $config->get('host');
		$getimageurl = $config->get('getimageurl');

		$url = $hostname . '/' . $getimageurl . '?'
			.	'quant=' . $quant
			.	'&merger=' . $merger
			.	'&snap=' . $snap
			.	'&axis=' . $axis
			.	'&band=' . $band;

		$content = file_get_contents( $url );

		$response = Response::getRoot();
		$response->headers->set('content-type', 'image/jpeg');
		$response->setContent($content);
		$response->send();

		exit();
	}
}
