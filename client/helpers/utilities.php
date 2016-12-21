<?php
namespace Components\Webslam\Helpers;

/**
 * For now, a general class for utility functions
 */
class Utilities
{

    public static function create_url_params($params)
    {
        $url = "";
        // Append each param
        foreach ($params as $n => $v) {
            if (!empty($v)) {
                #	echo "\$params[$n] => $v.\n";
                $url .= $n . "=" . $v . "&";
            }
        }
        // trim off final "&"
        $url = rtrim($url, "&");
        //	echo "\URL: $url\n";
        return $url;
    }
}
