<?php
// Declare the namespace.
namespace Components\Webslam\Site;

use Hubzero\Component\Router\Base;

//// Check to ensure this file is included in Joomla!
//defined('_JEXEC') or die('Restricted access');

class Router extends Base
{
    /**
     * Turn querystring parameters into an SEF route
     *
     * @param  array &$query Query string values
     * @return array Segments to build SEF route
     */
    function build(&$query)
    {
        $segments = array();

        if (!empty($query['controller'])) {
            $segments[] = $query['controller'];
            unset($query['controller']);
        }
        if (!empty($query['task'])) {
            $segments[] = $query['task'];
            unset($query['task']);
        }
        if (!empty($query['id']))
        {
            $segments[] = $query['id'];
            unset($query['id']);
        }

      //  Hubzero\Utility\Debug::dump($segments);
        return $segments;
    }

    /**
     * Parse a SEF route
     *
     * @param  array $segments Exploded route segments
     * @return array
     */
    function parse(&$segments)
    {
     //   Hubzero\Utility\Debug::dump($segments);

        $vars = array();

        if (empty($segments)) {
            return $vars;
        }

        if (isset($segments[0])) {
            $vars['controller'] = $segments[0];
        }
        if (isset($segments[1])) {
            $vars['task'] = $segments[1];
        }
        if (isset($segments[2]))
        {
            $vars['id'] = $segments[2];
        }

        return $vars;
    }
}