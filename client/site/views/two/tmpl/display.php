<?php

use Components\Webslam\Helpers\Utilities;
use Hubzero\Utility\Debug;

// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die('Restricted access');

// Push CSS to the document
//
// The css() method provides a quick and convenient way to attach stylesheets.
//
// 1. The name of the stylesheet to be pushed to the document (file extension is optional).
//    If no name is provided, the name of the component or plugin will be used. For instance,
//    if called within a view of the component com_tags, the system will look for a stylesheet named tags.css.
//
// 2. The name of the extension to look for the stylesheet. For components, this will be
//    the component name (e.g., com_tags). For plugins, this is the name of the plugin folder
//    and requires the third argument be passed to the method.
//
// Method chaining is also allowed.
// $this->css()
//      ->css('another');
//
	$this->css();

// Similarly, a js() method is available for pushing javascript assets to the document.
// The arguments accepted are the same as the css() method described above.
//  <!-- Optional theme -->
//  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
//
//
	$this->js('webslam-results');
?>

<div id="content-header">
	!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->

	<!-- Latest compiled and minified CSS -->
	<!--
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	-->

	<!-- Latest compiled and minified JavaScript -->
	<!--
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	-->

	<h2><?php echo JText::_('webSLAM Results'); ?></h2>
</div><!-- / #content-header -->

<div class="contentpaneopen">
	<div class="main section">
		<div class="subject">
			<div class="container">

				<br />

				<!-- test image goes thru controller TODO: remove -->
				<!--<p>
				<img src="<?php echo Route::url('index.php?option=' . $this->option . '&controller=getimage' . '&task=getimage&snap=56&merger=080_040_050&quant=sb'); ?>" alt="" />
				</p>
				-->
<?php
	// See contents of these variables by clicking the "Log" tab at the bottom of result page.
	dlog($this->dt);
	dlog($this->params);
	dlog($this->resultArray);

	outputTable($this->resultArray, $this->params);
	echo "\t\t<hr>";
	if( isset( $this->dt ) )
	{
		echo "\t\tQuery took: $this->dt sec<br/>\n";
	}


	function create_getimage_url_from_params($params)
	{
		// Uses hubzero controller "getimage", task "getimage".
		$baseUrl="/webslam/getimage/getimage?";
		return $baseUrl . Utilities::create_url_params( $params );
	}


	function writeTableRow( $row_array )
	{
		echo "\t\t\t<tr>\n";
		// Now loop thru all values in array and put into table header
	
		foreach ($row_array as $v)
		{
			echo "\t\t\t\t<th>";
			echo $v;
			echo "</th>\n";
		}
		echo "\t\t\t</tr>\n";
	}

	function outputTableHeader($paramArray)
	{
		$Request_header = array( "", "", "Requested:" );

		// # Merger	t-tFCC	toterr	sim-quant1	sim-quant2 ...
		$allParams = array("merger", "t-tFCC", "Total Error");
		$tableHeader = $allParams;
		$tableHeader[2] .= " (%)";

		// Build array for all the values
		foreach($paramArray as $n => $v)
		{
			if( ! ( $n == "cluster" || $n == "mode" || $n == "radius" ||
					$n == "axis" || $n == "excCore" || $n == "optimized" ) )
			{
				array_push($Request_header, $v);
				array_push($tableHeader, $n);
				array_push($allParams, $n);
			}
		}

		echo "\t\t\t<tbody>\n";
		writeTableRow( $Request_header );
		writeTableRow( $tableHeader );
		echo "\t\t\t</tbody>\n";

		return $allParams;
	}

	function write_row_of_match( $paramArray, $row )
	{
		$format_float = "%.3f";
		
		echo "\t\t\t\t<tr type='results'>\n";
		foreach( $paramArray as $param )
		{
			echo "\t\t\t\t\t<td>";
			#	echo "$param=";
			if( isset( $row["$param"] ) && ! empty( $row["$param"] ) )
			{
				if( strncmp( $param, "Total Error", 12 ) == 0 )
				{
					echo printf( $format_float, $row["$param"] * 100. );
				}
				else
				{
					echo $row["$param"];
				}
			}
			echo "</td>\n";
		}
		echo "\t\t\t\t</tr>\n";
	}

	function write_column_of_image( $merger, $snap, $band, $quant )
	{
		$img_params = array( 'merger' => $merger,
					'snap' => $snap,
					'axis' => 6,
					'band' => $band,
					"quant" => $quant );
		$img_url = create_getimage_url_from_params( $img_params );
		//echo $img_url ."\n";

		echo "\t\t\t\t\t<td>";
		echo "<img src=\"$img_url\" height=100 width=100 alt=\"$band $quant\"></img>";
		echo "</td>\n";
	}

	function write_row_of_images( $row )
	{
		echo "\t\t\t\t<tr type='images' class='not'>\n";
		write_column_of_image( $row['merger'], $row['snap'], 'xray', 'sb' );
		write_column_of_image( $row['merger'], $row['snap'], 'xray', 'tsl' );
		write_column_of_image( $row['merger'], $row['snap'], 'sze', 'nr' );
		echo "\t\t\t\t</tr>\n";
	}

	function assocArrayToTable( $paramArray, $resultArray )
	{
		echo "\t\t\t<tbody id='tblMatches'>\n";
		foreach( $resultArray as $row )
		{
			write_row_of_match( $paramArray, $row );
			write_row_of_images( $row );
		}
		echo "\t\t\t</tbody>\n";
	}

	function outputTable($resultArray, $paramArray)
	{
		echo "\n\t\t<table class='table table-bordered table-striped'>\n";
		$allParams = outputTableHeader($paramArray);
		assocArrayToTable( $allParams, $resultArray );
		echo "\t\t</table>\n";
	}
?>
			<br/>
			<div>
				<a href="/webslam/one" class="btn btn-default">webSLAM Search Form</a><br /><br />
			</div>
			</div><!-- / container -->
		</div><!-- / .subject -->
	</div><!-- / .main section -->
</div> <!-- contentpaneopen -->
