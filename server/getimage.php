<?php

require 'util.php';

setGET( $argc, $argv );

$properties = getProperties();
$params = getInputParams();

// Execute script to get results into file
$image = callScript( $properties['fetchScript'],
		$params['merger'],
		$params['snap'],
		$params['axis'],
		$params['band'],
		$params['quant'] );


header('Content-Type: image/jpeg');
header('Content-Length: '. filesize( $image ));

readfile( $image );


/******************************************************/

// Execute the (Perl) script (specified in properties)
function callScript($scriptToRun, $merger, $snap, $axis, $band, $quant)
{
	$scriptCommand = $scriptToRun ." --snap=". $snap ." --axis=". $axis 
		." --band=". $band ." --quant=". $quant ." ". $merger;
	#	echo $scriptCommand ."\n";
	exec ($scriptCommand, $result, $exit_status);
	if( $exit_status != 0 )
		return;
	else
		return	$result[0];
}

?>
