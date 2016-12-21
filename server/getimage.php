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

switch( $params['quant'] )
{
	case 'sb':
		$image = "/opt/slam/data/M008.00_001.60_075/Analysis-Extra/Images/M008_002_075_s130_a6_xraySB.jpeg";
		break;
	case 'tsl':
		$image = "/opt/slam/data/M008.00_001.60_075/Analysis-Extra/Images/M008_002_075_s130_a6_Tsl.jpeg";
		break;
	case 'nr':
		$image = "/opt/slam/data/M008.00_001.60_075/Analysis-Extra/Images/M008_002_075_s130_a6_SZEnr.jpeg";
		break;
	default:
		break;
}

header('Content-Type: image/jpeg');
header('Content-Length: '. filesize( $image ));

#	echo $image ."\n";
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
