<?php

use Components\Webslam\Helpers\Utilities;

// No direct access
defined('_JEXEC') or die('Restricted access');

/**
 * Controller two
 *
 * Accepts an array of configuration values to the constructor. If no config
 * passed, it will automatically determine the component and controller names.
 * Internally, sets the $database, $user, $view, and component $config.
 *
 * Executable tasks are determined by method name. All public methods that end in
 * "Task" (e.g., displayTask, editTask) are callable by the end user.
 *
 * View name defaults to controller name with layout defaulting to task name. So,
 * a $controller of "One" and a $task of "two" will map to:
 *
 *    /{component name}
 *        /views
 *            /one
 *                /tmpl
 *                    /two.php
 */
class WebslamControllerTwo extends \Hubzero\Component\SiteController
{
    /**
     * Default task
     *
     * @return     void
     */
    public function displayTask()
    {
        include_once(dirname(dirname(__DIR__)) . DS . 'helpers' . DS . 'utilities.php');

        /*
        // Require login to access page
        if (User::isGuest())
        {
            App::abort(403, Lang::txt('You must be logged in to run webSLAM'));
        }
        */

        // Set view variables
        $inputParams = $this->_getFormInputParams();
        $stubQuery = false;
        $response = $this->_getQueryResponse($inputParams, $stubQuery);

        $resultArray = json_decode($response, true);

        $this->view->dt = $this->_get_duration($resultArray);
        $this->view->params = $inputParams;
        $this->view->resultArray = $resultArray;


        // Set the page title
        $this->_buildTitle();

        // Set the pathway
        $this->_buildPathway();

        // Pass error messages to the view
        if ($this->getError()) {
            foreach ($this->getErrors() as $error) {
                $this->view->setError($error);
            }
        }

        // Output the HTML
        $this->view->display();
    }

    /******************************************************/
    // Ignore empty params and the submit button
    protected function _getFormInputParams()
    {
        $inputParams = array();
        foreach ($_GET as $n => $v) {
            // Exclude certain params, like the submit button and things added by hubzero
            if ((!empty($v)) && ($n != "submit") && ($n != "option") && ($n != "controller")) {
                $inputParams[$n] = $v;
            }
        }
        return $inputParams;
    }

    protected function _getQueryResponse($inputParams, $stubQuery)
    {
        if (!$stubQuery)
        {
            // Perform search to get json
            $url = $this->_create_query_url_from_params($inputParams);
            $response = $this->_download_json($url);
        }
        else
        {
            // For faster testing
            $response = '{
                "1": {
                    "merger": "200_100_026",
                    "snap": 72,
                    "t-tFCC": -0.4366,
                    "Total Error": 0.017698097107368,
                    "dist": 1982.6356029238,
                    "vrel": 1969.1557415552
                },
                "2": {
                    "merger": "200_100_075",
                    "snap": 73,
                    "t-tFCC": -0.4503,
                    "Total Error": 0.017841780925639,
                    "dist": 1978.8284373561,
                    "vrel": 1971.2757676946
                },
                "3": {
                    "merger": "200_100_050",
                    "snap": 72,
                    "t-tFCC": -0.4666,
                    "Total Error": 0.024099481224771,
                    "dist": 2014.3690872055,
                    "vrel": 1953.9927254215
                },
                "4": {
                    "merger": "200_100_000",
                    "snap": 71,
                    "t-tFCC": -0.4502,
                    "Total Error": 0.024833424577029,
                    "dist": 2001.6371476461,
                    "vrel": 1950.3601404869
                },
                "5": {
                    "merger": "200_040_000",
                    "snap": 61,
                    "t-tFCC": -0.5272,
                    "Total Error": 0.070030440560888,
                    "dist": 2093.9772200246,
                    "vrel": 2103.8524556156
                }
            }';
        }
        return $response;
    }

    protected function _create_query_url_from_params($params)
    {
        $config = Component::params('com_webslam');
        $hostname = $config->get('host');
        $queryurl = $config->get('queryurl');

        $baseUrl = $hostname . '/' . $queryurl . '?';

        return $baseUrl . Utilities::create_url_params($params);
    }


    // Call CURL, get JSON result back into array
    protected function _download_json($url)
    {
        $ch = curl_init($url);
        // define options
        $curl_options = array(
            CURLOPT_RETURNTRANSFER => true
        );
        // apply those options
        curl_setopt_array($ch, $curl_options);
        // grab URL and pass it to the browser
        $result = curl_exec($ch);
        // close cURL resource, and free up system resources
        curl_close($ch);
        return $result;
    }

    /******************************************************/
    protected function _get_duration(&$resultArray)
    {
        $dt = NULL;
        if( array_key_exists( "stat", $resultArray ) )
        {
            if( isset( $resultArray['stat']['dt'] ) )
            {
                $dt = $resultArray['stat']['dt'];
            }
            unset($resultArray['stat']);
        }
        #	echo count( $resultArray ) ."<br/>";
        return $dt;
    }


    /**
     * Method to set the document path
     *
     * @param      array $tags Tags currently viewing
     * @return     void
     */
    protected function _buildPathway($tags = null)
    {
        $pathway = JFactory::getApplication()->getPathway();

        if (count($pathway->getPathWay()) <= 0) {
            $pathway->addItem(
                JText::_(strtoupper($this->_option)),
                'index.php?option=' . $this->_option
            );
        }
        if ($this->_task && $this->_task != 'display') {
            $pathway->addItem(
                JText::_(strtoupper($this->_option) . '_' . strtoupper($this->_task)),
                'index.php?option=' . $this->_option . '&task=' . $this->_task
            );
        }
    }

    /**
     * Method to build and set the document title
     *
     * @param      array $tags Tags currently viewing
     * @return     void
     */
    protected function _buildTitle($tags = null)
    {
        $this->view->title = JText::_(strtoupper($this->_option));
        if ($this->_task && $this->_task != 'display') {
            $this->view->title .= ': ' . JText::_(strtoupper($this->_option) . '_' . strtoupper($this->_task));
        }

        JFactory::getDocument()->setTitle($this->view->title);
    }
}
