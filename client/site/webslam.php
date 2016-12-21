<?php
// No direct access
defined('_JEXEC') or die('Restricted access');

// Determine which controller we're using
$controllerName = JRequest::getCmd('controller', 'one');

// Make extra sure that controller exists
if (!file_exists(JPATH_COMPONENT . DS . 'controllers' . DS . $controllerName . '.php'))
{
    $controllerName = 'one';
}
require_once(JPATH_COMPONENT . DS . 'controllers' . DS . $controllerName . '.php');

// Build the class name
$controllerName = 'WebslamController' . ucfirst(strtolower($controllerName));

// Instantiate controller
$controller = new $controllerName();
// Execute whatever task(s)
$controller->execute();
// Redirect as needed
$controller->redirect();
