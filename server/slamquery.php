<?php

require 'util.php';

header('Content-Type: application/json');

#	setGET( $argc, $argv );

$properties = getProperties();

$filepath = $properties["filepath"];
$scriptToRun = $properties["matchScript"];

// Unique filename using UUID + timestamp + .input
$filenameBase = getUniqueFileName();
$inputFilename = $filenameBase . ".input";
$outputFilename = $filenameBase . ".output";

$inputfile = $filepath .$inputFilename;
$outputfile = $filepath .$outputFilename;

$params = getInputParams();

parseInputParams( $params, $scriptOptions, $observedValues );

$scriptCmd = setScriptCmd( $scriptToRun, $scriptOptions, $inputfile, $outputfile );

// Write file to file system containing list of input params based on form values
createScriptInputParamFile( $inputfile, $scriptCmd, $observedValues );

// Execute script to get results into file
callScript( $scriptCmd );

$output_string = file_get_contents( $outputfile);
$json = json_decode( $output_string );
echo json_encode( $json, JSON_PRETTY_PRINT );

/******************************************************/

function parseInputParams( $params, &$scriptOptions, &$observedValues )
{
	foreach ($params as $n => $v)
	{
		if( $n == "cluster" )
		{
			$scriptOptions .= " -cl=". $v;
		}
		else if( $n == "mode" )
		{
			$scriptOptions .= " -m=". $v;
		}
		else if( $n == "radius" )
		{
			$scriptOptions .= " -r=". $v;
		}
		else if( $n == "axis" )
		{
			$scriptOptions .= " -a=". $v;
		}
		else if( $n == "excCore" )
		{
			if( $v == "no" )
			{
				$scriptOptions .= " -exc";
			}
		}
		else
		{
			$observedValues .= $n . " = " . $v . "\n";
		}
	}
}

function createScriptInputParamFile( $filename, $scriptCmd, $observedValues )
{
	$contents = "# ". $scriptCmd . "\n";
	$contents .= $observedValues;
	file_put_contents( $filename, $contents );
}

function setScriptCmd( $scriptToRun, $scriptOptions, $inputfile, $outputfile )
{
	$scriptCmd = $scriptToRun . $scriptOptions ." -w -o -n=all ". $inputfile;
	$scriptCmd .= " > ". $outputfile;
	return	$scriptCmd;
}

function callScript( $scriptCmd )
{
	exec( $scriptCmd, $result, $return_value );
	if( 0 )
	{
		echo $scriptCmd ."\n";
		print_r ( $result );
		echo "return_value:\t" . $return_value ."\n";
	}
}

#	// convert output to multidimensional array
#	function loadResultMultiArray($scriptOutput)
#	{
#	    $i = 0;
#	    $rownum = 0;
#	    $multiarray = array();
#	
#	    $startrow_index= 5;
#	
#	    foreach ($scriptOutput as $row) {
#	
#	        // trim off newline so it doesn't leave empty final value
#	        $row = rtrim($row);
#	
#	        // Split on whitespace (tab, spaces, newlines)
#	        $rowdata = preg_split('/[\s]+/', $row);
#	
#	        // Skip script header output (Is it always 5 lines?  Can we get result with no header?
#	        if ($rownum > $startrow_index) {
#	
#	            $multiarray[$i] = $rowdata;
#	
#	            $i++;
#	        }
#	
#	        $rownum++;
#	    }
#	
#	    $scriptdata = array("result" => $multiarray);
#	
#	    return $scriptdata;
#	}

?>
