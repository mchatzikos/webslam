<?php

// This function is for testing from the command line
function setGET( $argc, $argv )
{
	if( $argc > 1 )
	{
		foreach ($argv as $arg)
		{
			$e = explode( "=", $arg );
			if(count($e)==2)
				$_GET[ $e[0] ] = $e[1];
			else
			{
				$_GET[ $e[0] ] = 0;
			}
		}
	}
}

function getProperties()
{
	$properties = parse_ini_file( "webslam.properties" );

	return $properties;
}

// http://guid.us/GUID/PHP
function getUUID()
{
	return uniqid('slam_', true);
}

function getUniqueFileName()
{
	$now = round(microtime(TRUE));
	$filename = $now ."-" . getUUID() ;
	return $filename;
}

// Ignore empty params and the submit button
function getInputParams()
{
	$inputParams = array();
	foreach($_GET as $n => $v)
	{
		if ((!empty($v)) && ($n != "submit"))
		{
			$inputParams[$n] = $v;
		}
	}

	return $inputParams;
}

function convertOutputToJson ($output){

    $json = json_encode($output, JSON_PRETTY_PRINT);

    return $json;
}

?>
