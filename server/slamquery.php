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

// Write file to file system containing list of input params based on form values
createScriptInputParamFile($inputfile, $params);

// Execute script to get results into file
callScript($scriptToRun, $inputfile, $outputfile);

$output_string = file_get_contents( $outputfile);
$json = json_decode( $output_string );
echo json_encode( $json, JSON_PRETTY_PRINT );

/******************************************************/

function createScriptInputParamFile($filename, $params)
{
	$current = "";
	// Append a new param to the file
	foreach ($params as $n => $v)
	{
		$current .= $n . " = " . $v . "\n";
	}

	// Write the contents back to the file
	file_put_contents($filename, $current);
}

// Execute the (Perl) script (specified in properties)
function callScript($scriptToRun, $inputFile, $outputFile)
{
	$scriptCommand = $scriptToRun ." -w -o -n=all ". $inputFile;
	exec ($scriptCommand .' > ' .$outputFile, $result);
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
