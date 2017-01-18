<?php
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

$this->css( "webslam" );

 //Hubzero\Utility\Debug::dump(JPATH_COMPONENT);
 //Hubzero\Utility\Debug::dump($this->option);

// Similarly, a js() method is available for pushing javascript assets to the document.
// The arguments accepted are the same as the css() method described above.
//  <!-- Optional theme -->
//  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
//
//
// $this->js();
$this->js( "validate-input" );
$this->js( "menu" );

?>
<div id="content-header">

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

	<h2><?php echo JText::_('WebSLAM Search'); ?></h2>
</div><!-- / #content-header -->

<div class="contentpaneopen">
	<div class="main section">
		<div class="subject">
			<h3>Enter observables:</h3><br />
			<br />
			<form method="get" action="/webslam/two" role="form" class="form-horizontal" onsubmit="return validate( this )">
			<fieldset>
				<legend>Query Parameters</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="cluster">Cluster</label>
					<select id="cluster" name="cluster">
						<option value="1" selected>Primary cluster</option>
						<option value="2">Subcluster</option>
					</select>
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="mode">Integration type for X-ray / SZE cumulative measures</label>
					<select id="mode" onchange="reveal_menu( this )">
						<option disabled selected>-- select integration type --</option>
						<option value="total">Spherical Volume</option>
						<option value="proj">Projection (Cylindrical Volume)</option>
					</select>
				</div>
				<div class="not" id="totalInteg-radius">
					<label class="control-label col-xs-2" for="radius">Spherical Radius</label>
					<select id="radius">
						<option value="500">R500</option>
						<option value="200">R200</option>
					</select>
				</div>
				<div class="not" id="projInteg-axis">
					<label class="control-label col-xs-2" for="axis">Axis of Observation</label>
					<select id="axis">
						<option value="6" selected>z</option>
						<option value="5">y</option>
						<option value="4">x</option>
					</select>
				</div>
				<div class="not" id="projInteg-excCore">
					<label class="control-label col-xs-2" for="excCore">Exclude Core (0.15 R500) from Projected quantities</label>
					<select id="excCore">
						<option value="yes" selected>yes</option>
						<option value="no">no</option>
					</select>
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="optimized"
						title="Can improve query execution time by up to 7x for searches with many observables">
						Optimize query for time?</label>
					<input type="checkbox" name="optimized" id="optimized" value=1 checked>
				</div>
			</fieldset>
			<fieldset>
				<legend>Orbit</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R200_1" title="Units: kpc">R200  primary cluster</label>
					<input type="text" size="12" maxlength="12" id="R200_1" name="R200_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R500_1" title="Units: kpc">R500  primary cluster</label>
					<input type="text" size="12" maxlength="12" id="R500_1" name="R500_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R1000_1" title="Units: kpc">R1000 primary cluster</label>
					<input type="text" size="12" maxlength="12" id="R1000_1" name="R1000_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R2500_1" title="Units: kpc">R2500 primary cluster</label>
					<input type="text" size="12" maxlength="12" id="R2500_1" name="R2500_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M200_1" title="Units: Msol">M200  primary cluster</label>
					<input type="text" size="12" maxlength="12" id="M200_1" name="M200_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M500_1" title="Units: Msol">M500  primary cluster</label>
					<input type="text" size="12" maxlength="12" id="M500_1" name="M500_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M1000_1" title="Units: Msol">M1000 primary cluster</label>
					<input type="text" size="12" maxlength="12" id="M1000_1" name="M1000_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M2500_1" title="Units: Msol">M2500 primary cluster</label>
					<input type="text" size="12" maxlength="12" id="M2500_1" name="M2500_1"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R200_2" title="Units: kpc">R200  subcluster</label>
					<input type="text" size="12" maxlength="12" id="R200_2" name="R200_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R500_2" title="Units: kpc">R500  subcluster</label>
					<input type="text" size="12" maxlength="12" id="R500_2" name="R500_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R1000_2" title="Units: kpc">R1000 subcluster</label>
					<input type="text" size="12" maxlength="12" id="R1000_2" name="R1000_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="R2500_2" title="Units: kpc">R2500 subcluster</label>
					<input type="text" size="12" maxlength="12" id="R2500_2" name="R2500_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M200_2" title="Units: Msol">M200  subcluster</label>
					<input type="text" size="12" maxlength="12" id="M200_2" name="M200_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M500_2" title="Units: Msol">M500  subcluster</label>
					<input type="text" size="12" maxlength="12" id="M500_2" name="M500_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M1000_2" title="Units: Msol">M1000 subcluster</label>
					<input type="text" size="12" maxlength="12" id="M1000_2" name="M1000_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="M2500_2" title="Units: Msol">M2500 subcluster</label>
					<input type="text" size="12" maxlength="12" id="M2500_2" name="M2500_2"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="dist" title="Units: kpc">Cluster Distance</label>
					<input type="text" size="12" maxlength="12" id="dist" name="dist"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="vrel" title="Units: km/s">Relative Velocity</label>
					<input type="text" size="12" maxlength="12" id="vrel" name="vrel"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="m200_tot" title="Units: Msol">Total M200</label>
					<input type="text" size="12" maxlength="12" id="m200_tot" name="m200_tot"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="m500_tot" title="Units: Msol">Total M500</label>
					<input type="text" size="12" maxlength="12" id="m500_tot" name="m500_tot"<br />
				</div>
			</fieldset>
			<fieldset>
				<legend>X-ray Hardness Ratio</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Broad" title="Units: keV">Broad band temperature</label>
					<input type="text" size="12" maxlength="12" id="Broad" name="Broad"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Hard" title="Units: keV">Hard band temperature</label>
					<input type="text" size="12" maxlength="12" id="Hard" name="Hard"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Ratio" title="">Hardness ratio (hard / broad)</label>
					<input type="text" size="12" maxlength="12" id="Ratio" name="Ratio"<br />
				</div>
			</fieldset>
			<fieldset>
				<legend>SZE Observables</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="tSZE_nr" title="Units: Mpc^2">Freq-independent Thermal SZE, no Rel-cor</label>
					<input type="text" size="12" maxlength="12" id="tSZE_nr" name="tSZE_nr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="kSZE_nr" title="Units: Mpc^2">Freq-independent Kinetic SZE, no Rel-cor</label>
					<input type="text" size="12" maxlength="12" id="kSZE_nr" name="kSZE_nr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="tSZE_150" title="Units: Mpc^2">Thermal SZE @ 150 GHz</label>
					<input type="text" size="12" maxlength="12" id="tSZE_150" name="tSZE_150"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="kSZE_150" title="Units: Mpc^2">Kinetic SZE @ 150 GHz</label>
					<input type="text" size="12" maxlength="12" id="kSZE_150" name="kSZE_150"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="tSZE_220" title="Units: Mpc^2">Thermal SZE @ 220 GHz</label>
					<input type="text" size="12" maxlength="12" id="tSZE_220" name="tSZE_220"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="kSZE_220" title="Units: Mpc^2">Kinetic SZE @ 220 GHz</label>
					<input type="text" size="12" maxlength="12" id="kSZE_220" name="kSZE_220"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="tSZE_350" title="Units: Mpc^2">Thermal SZE @ 350 GHz</label>
					<input type="text" size="12" maxlength="12" id="tSZE_350" name="tSZE_350"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="kSZE_350" title="Units: Mpc^2">Kinetic SZE @ 350 GHz</label>
					<input type="text" size="12" maxlength="12" id="kSZE_350" name="kSZE_350"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="YSZ" title="Units: Mpc^2">Volume SZE, Freq-independent</label>
					<input type="text" size="12" maxlength="12" id="YSZ" name="YSZ"<br />
				</div>
			</fieldset>
			<fieldset>
				<legend>X-ray Observables</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_c_a" title="Units: erg/s">[0.7-7] APEC Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_c_a" name="Lx_c_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_c_a" title="Units: keV">[0.7-7] APEC Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_c_a" name="Tx_c_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_c_m" title="Units: erg/s">[0.7-7] MeKaL Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_c_m" name="Lx_c_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_c_m" title="Units: keV">[0.7-7] MeKaL Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_c_m" name="Tx_c_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_w_a" title="Units: erg/s">[0.5-4] APEC Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_w_a" name="Lx_w_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_w_a" title="Units: keV">[0.5-4] APEC Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_w_a" name="Tx_w_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_w_m" title="Units: erg/s">[0.5-4] MeKaL Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_w_m" name="Lx_w_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_w_m" title="Units: keV">[0.5-4] MeKaL Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_w_m" name="Tx_w_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_r_m" title="Units: erg/s">[2-10] MeKaL Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_r_m" name="Lx_r_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_r_m" title="Units: keV">[2-10] MeKaL Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_r_m" name="Tx_r_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_b_a" title="Units: erg/s">Bolometric APEC Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_b_a" name="Lx_b_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_b_a" title="Units: keV">Bolometric APEC Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_b_a" name="Tx_b_a"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx_b_m" title="Units: erg/s">Bolometric MeKaL Luminosity</label>
					<input type="text" size="12" maxlength="12" id="Lx_b_m" name="Lx_b_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx_b_m" title="Units: keV">Bolometric MeKaL Emission-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tx_b_m" name="Tx_b_m"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tsl" title="Units: keV">Spectroscopic-like Temp (V06)</label>
					<input type="text" size="12" maxlength="12" id="Tsl" name="Tsl"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Yx" title="Units: Msol keV">X-ray proxy for Thermal Energy</label>
					<input type="text" size="12" maxlength="12" id="Yx" name="Yx"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tmg" title="Units: keV">Mass-Weighted temp</label>
					<input type="text" size="12" maxlength="12" id="Tmg" name="Tmg"<br />
				</div>
			</fieldset>
			<fieldset>
				<legend>X-ray Substructure</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Dpk_cen" title="Units: R500">Peak--proj.center dist</label>
					<input type="text" size="12" maxlength="12" id="Dpk_cen" name="Dpk_cen"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P1P0_pk" title="">Power ratio ord=1 about peak</label>
					<input type="text" size="12" maxlength="12" id="P1P0_pk" name="P1P0_pk"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Dpk_pr" title="Units: R500">Peak--PR center dist</label>
					<input type="text" size="12" maxlength="12" id="Dpk_pr" name="Dpk_pr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_R500C" title="">P2/P0 ratio w/in 1.0 R500, core included</label>
					<input type="text" size="12" maxlength="12" id="P2P0_R500C" name="P2P0_R500C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_R500C" title="">P3/P0 ratio w/in 1.0 R500, core included</label>
					<input type="text" size="12" maxlength="12" id="P3P0_R500C" name="P3P0_R500C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_R500C" title="">P4/P0 ratio w/in 1.0 R500, core included</label>
					<input type="text" size="12" maxlength="12" id="P4P0_R500C" name="P4P0_R500C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_1C" title="">P2/P0 ratio w/in  500.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P2P0_1C" name="P2P0_1C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_1C" title="">P3/P0 ratio w/in  500.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P3P0_1C" name="P3P0_1C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_1C" title="">P4/P0 ratio w/in  500.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P4P0_1C" name="P4P0_1C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_2C" title="">P2/P0 ratio w/in 1000.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P2P0_2C" name="P2P0_2C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_2C" title="">P3/P0 ratio w/in 1000.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P3P0_2C" name="P3P0_2C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_2C" title="">P4/P0 ratio w/in 1000.0 kpc, core included</label>
					<input type="text" size="12" maxlength="12" id="P4P0_2C" name="P4P0_2C"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_R500E" title="">P2/P0 ratio w/in (0.05--1.0) R500</label>
					<input type="text" size="12" maxlength="12" id="P2P0_R500E" name="P2P0_R500E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_R500E" title="">P3/P0 ratio w/in (0.05--1.0) R500</label>
					<input type="text" size="12" maxlength="12" id="P3P0_R500E" name="P3P0_R500E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_R500E" title="">P4/P0 ratio w/in (0.05--1.0) R500</label>
					<input type="text" size="12" maxlength="12" id="P4P0_R500E" name="P4P0_R500E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_1E" title="">P2/P0 ratio w/in (  30.0-- 500.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P2P0_1E" name="P2P0_1E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_1E" title="">P3/P0 ratio w/in (  30.0-- 500.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P3P0_1E" name="P3P0_1E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_1E" title="">P4/P0 ratio w/in (  30.0-- 500.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P4P0_1E" name="P4P0_1E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0_2E" title="">P2/P0 ratio w/in (  30.0--1000.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P2P0_2E" name="P2P0_2E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0_2E" title="">P3/P0 ratio w/in (  30.0--1000.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P3P0_2E" name="P3P0_2E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0_2E" title="">P4/P0 ratio w/in (  30.0--1000.0) kpc</label>
					<input type="text" size="12" maxlength="12" id="P4P0_2E" name="P4P0_2E"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Wctr" title="Units: R500">Centroid Shift</label>
					<input type="text" size="12" maxlength="12" id="Wctr" name="Wctr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Dctr_pr" title="Units: R500">Centroid-PRcen dist</label>
					<input type="text" size="12" maxlength="12" id="Dctr_pr" name="Dctr_pr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="AxialRatio" title="">O'Hara et al. (2006) def</label>
					<input type="text" size="12" maxlength="12" id="AxialRatio" name="AxialRatio"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Ellipticity" title="">Hashimoto et al. (2007) def</label>
					<input type="text" size="12" maxlength="12" id="Ellipticity" name="Ellipticity"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Asymmetry" title="">Hashimoto et al. (2007) def</label>
					<input type="text" size="12" maxlength="12" id="Asymmetry" name="Asymmetry"<br />
				</div>
			</fieldset>
			<fieldset>
				<legend>SZE Substructure</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Dnr" title="Units: R500">NR Peak--proj.center dist</label>
					<input type="text" size="12" maxlength="12" id="Dnr" name="Dnr"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="D150" title="Units: R500">150 GHz Peak--proj.center dist</label>
					<input type="text" size="12" maxlength="12" id="D150" name="D150"<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="D350" title="Units: R500">350 GHz Peak--proj.center dist</label>
					<input type="text" size="12" maxlength="12" id="D350" name="D350"<br />
				</div>
			</fieldset>

			<p><input type="submit" value="Search Simulations" name="submit" class="btn btn-default"/></p>
		</form>
		</div><!-- / .subject -->
	</div><!-- / .main section -->
</div> <!-- class -->
