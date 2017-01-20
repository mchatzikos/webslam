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
					<label class="control-label col-xs-2" for="cluster">
						Cluster
					</label>
					<select id="cluster" name="cluster">
						<option value="1" selected>Primary cluster</option>
						<option value="2">Subcluster</option>
					</select>
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="mode">
						Integration type for X-ray / SZE cumulative measures
					</label>
					<select id="mode" onchange="reveal_menu( this )">
						<option disabled selected>-- select integration type --</option>
						<option value="total">Spherical Volume</option>
						<option value="proj">Projection (Cylindrical Volume)</option>
					</select>
				</div>
				<div class="not" id="totalInteg-radius">
					<label class="control-label col-xs-2" for="radius">
						Spherical Radius
					</label>
					<select id="radius">
						<option value="500">R500</option>
						<option value="200">R200</option>
					</select>
				</div>
				<div class="not" id="projInteg-axis">
					<label class="control-label col-xs-2" for="axis">
						Axis of Observation
					</label>
					<select id="axis">
						<option value="6" selected>z</option>
						<option value="5">y</option>
						<option value="4">x</option>
					</select>
				</div>
				<div class="not" id="projInteg-excCore">
					<label class="control-label col-xs-2" for="excCore">
						Exclude Core (0.15 R500) from Projected quantities
					</label>
					<select id="excCore">
						<option value="yes" selected>yes</option>
						<option value="no">no</option>
					</select>
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="optimized" title="Can improve query execution time by up to 7x for searches with many observables">
						Optimize query for time?
					</label>
					<input type="checkbox" name="optimized" id="optimized" value=1 checked>
				</div>
			</fieldset>
			<br />
			<fieldset>
				<legend>Orbit</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Mass" title="Units: Msol">
						Mass, in Msol
					</label>
					<select id="Mass-odens" onchange="process_mass_option( this )">
						<option disabled selected>-- select overdensity --</option>
						<option value="2500">2500</option>
						<option value="1000">1000</option>
						<option value="500">500</option>
						<option value="200">200</option>
					</select>
					<input type="text" size="12" maxlength="12" id="Mass" name="Mass">
					<button type="button" class="btn btn-default" id="btnAddMass" onclick="add_mass_option()">
						Add Mass Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Radius" title="Units: kpc">
						Radius, in kpc
					</label>
					<select id="Radius-odens" onchange="process_radius_option( this )">
						<option disabled selected>-- select overdensity --</option>
						<option value="2500">2500</option>
						<option value="1000">1000</option>
						<option value="500">500</option>
						<option value="200">200</option>
					</select>
					<input type="text" size="12" maxlength="12" id="Radius" name="Radius">
					<button type="button" class="btn btn-default" id="btnAddRadius" onclick="add_radius_option()">
						Add Radius Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="dist" title="Units: kpc">
						Cluster Distance, in kpc
					</label>
					<input type="text" size="12" maxlength="12" id="dist" name="dist">
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="vrel" title="Units: km/s">
						Relative Velocity, in km/s
					</label>
					<input type="text" size="12" maxlength="12" id="vrel" name="vrel">
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="m200_tot" title="Units: Msol">
						Total M200, in Msol
					</label>
					<input type="text" size="12" maxlength="12" id="m200_tot" name="m200_tot">
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="m500_tot" title="Units: Msol">
						Total M500, in Msol
					</label>
					<input type="text" size="12" maxlength="12" id="m500_tot" name="m500_tot">
					<br />
				</div>
			</fieldset>
			<br />
			<fieldset>
				<legend>Cumulative X-ray Observables</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Lx" title="Units: erg/s">
						Luminosity, in erg/s
					</label>
					<select id="Lx-band" onchange="process_xray_option( this )">
						<option disabled selected>-- select band --</option>
						<option value="_c_a">APEC, [0.7-7] keV</option>
						<option value="_w_a">APEC, [0.5-4] keV</option>
						<option value="_b_a">APEC, Bolometric</option>
						<option value="_c_m">MeKaL, [0.7-7] keV</option>
						<option value="_w_m">MeKaL, [0.5-4] keV</option>
						<option value="_r_m">MeKaL, [2-10] keV</option>
						<option value="_b_m">MeKaL, Bolometric</option>
					</select>
					<input type="text" size="12" maxlength="12" id="Lx" name="Lx">
					<button type="button" class="btn btn-default" id="btnAddLx" onclick="add_lx_option()">
						Add Luminosity Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Tx" title="Units: keV">
						Temperature, in keV
					</label>
					<select id="Tx-band" onchange="process_xray_option( this )">
						<option disabled selected>-- select band --</option>
						<option value="_c_a">Emission-Weighted, APEC, [0.7-7] keV</option>
						<option value="_w_a">Emission-Weighted, APEC, [0.5-4] keV</option>
						<option value="_b_a">Emission-Weighted, APEC, Bolometric</option>
						<option value="_c_m">Emission-Weighted, MeKaL, [0.7-7] keV</option>
						<option value="_w_m">Emission-Weighted, MeKaL, [0.5-4] keV</option>
						<option value="_r_m">Emission-Weighted, MeKaL, [2-10] keV</option>
						<option value="_b_m">Emission-Weighted, MeKaL, Bolometric</option>
						<option value="Tsl">Spectroscopic-like (V06), MeKaL, [0.3-10] keV, nH=4e20 cm^{-2}, z=0.05</option>
						<option value="Broad">Spectroscopic-like (V06), MeKaL, [0.7-7] keV, nH=4e20 cm^{-2}, z=0.05</option>
						<option value="Hard">Spectroscopic-like (V06), MeKaL, [2-7] keV, nH=4e20 cm^{-2}, z=0.05</option>
						<option value="Tmg">Mass-Weighted</option>
					</select>
					<input type="text" size="12" maxlength="12" id="Tx" name="Tx">
					<button type="button" class="btn btn-default" id="btnAddTx" onclick="add_tx_option()">
						Add Temperature Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Yx" title="Units: Msol keV">
						YX, in Msol keV
					</label>
					<input type="text" size="12" maxlength="12" id="Yx" name="Yx">
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Ratio">
						Hardness Ratio, T(2-7 keV) / T(0.7-7 keV)
					</label>
					<input type="text" size="12" maxlength="12" id="Ratio" name="Ratio">
					<br />
				</div>
			</fieldset>
			<br />
			<fieldset>
				<legend>Cumulative SZE Observables</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="tSZE" title="Units: Mpc^2">
						Thermal SZE
					</label>
					<select id="tSZE-freq" onchange="process_sze_option( this )">
						<option disabled selected>-- select band --</option>
						<option value="_nr">Freq. Independent</option>
						<option value="_150">150 GHz</option>
						<option value="_220">220 GHz</option>
						<option value="_350">350 GHz</option>
					</select>
					<input type="text" size="12" maxlength="12" id="tSZE" name="tSZE">
					<button type="button" class="btn btn-default" id="btnAddtSZE" onclick="add_tsze_option()">
						Add tSZE Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="kSZE" title="Units: Mpc^2">
						Kinetic SZE
					</label>
					<select id="kSZE-freq" onchange="process_sze_option( this )">
						<option disabled selected>-- select band --</option>
						<option value="_nr">Freq. Independent</option>
						<option value="_150">150 GHz</option>
						<option value="_220">220 GHz</option>
						<option value="_350">350 GHz</option>
					</select>
					<input type="text" size="12" maxlength="12" id="kSZE" name="kSZE">
					<button type="button" class="btn btn-default" id="btnAddkSZE" onclick="add_ksze_option()">
						Add kSZE Constraint
					</button>
					<br />
				</div>
			</fieldset>
			<br />
			<fieldset>
				<legend>X-ray Image Substructure</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P2P0">
						Power Ratio: P2 / P0
					</label>
					<select id="P2P0-aper" onchange="process_xray_struc_option( this )">
						<option disabled selected>-- select aperture --</option>
						<option value="_R500C">(0 -- 1) x R500</option>
						<option value="_1C">(0 -- 500) kpc</option>
						<option value="_2C">(0 -- 1000) kpc</option>
						<option value="_R500E">(0.05 -- 1) x R500</option>
						<option value="_1E">(30 -- 500) kpc</option>
						<option value="_2E">(30 -- 1000) kpc</option>
					</select>
					<input type="text" size="12" maxlength="12" id="P2P0" name="P2P0">
					<button type="button" class="btn btn-default" id="btnAddP2P0" onclick="add_p2p0_option()">
						Add P2/P0 Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P3P0">
						Power Ratio: P3 / P0
					</label>
					<select id="P3P0-aper" onchange="process_xray_struc_option( this )">
						<option disabled selected>-- select aperture --</option>
						<option value="_R500C">(0 -- 1) x R500</option>
						<option value="_1C">(0 -- 500) kpc</option>
						<option value="_2C">(0 -- 1000) kpc</option>
						<option value="_R500E">(0.05 -- 1) x R500</option>
						<option value="_1E">(30 -- 500) kpc</option>
						<option value="_2E">(30 -- 1000) kpc</option>
					</select>
					<input type="text" size="12" maxlength="12" id="P3P0" name="P3P0">
					<button type="button" class="btn btn-default" id="btnAddP3P0" onclick="add_p3p0_option()">
						Add P3/P0 Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P4P0">
						Power Ratio: P4 / P0
					</label>
					<select id="P4P0-aper" onchange="process_xray_struc_option( this )">
						<option disabled selected>-- select aperture --</option>
						<option value="_R500C">(0 -- 1) x R500</option>
						<option value="_1C">(0 -- 500) kpc</option>
						<option value="_2C">(0 -- 1000) kpc</option>
						<option value="_R500E">(0.05 -- 1) x R500</option>
						<option value="_1E">(30 -- 500) kpc</option>
						<option value="_2E">(30 -- 1000) kpc</option>
					</select>
					<input type="text" size="12" maxlength="12" id="P4P0" name="P4P0">
					<button type="button" class="btn btn-default" id="btnAddP4P0" onclick="add_p4p0_option()">
						Add P4/P0 Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="offset" title="Units: R500">
						Offset , in R500
					</label>
					<select id="offset-aper" onchange="process_xray_struc_option( this )">
						<option disabled selected>-- select offset --</option>
						<option value="Dpk_cen">SB peak -- cluster center</option>
						<option value="Dpk_pr">SB peak -- PR center</option>
						<option value="Dctr_pr">CS center -- PR center</option>
					</select>
					<input type="text" size="12" maxlength="12" id="offset" name="offset">
					<button type="button" class="btn btn-default" id="btnAddOffset" onclick="add_offset_option()">
						Add Offset Constraint
					</button>
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="P1P0">
						Power Ratio: P1 / P0 (within R500)
					</label>
					<input type="text" size="12" maxlength="12" id="P1P0" name="P1P0">
					<br />
				</div>
				<div class="form-group">
					<label class="control-label col-xs-2" for="Wctr" title="Units: R500">
						Centroid Shift, in R500
					</label>
					<input type="text" size="12" maxlength="12" id="Wctr" name="Wctr">
					<br />
				</div>
			</fieldset>
			<br />
			<fieldset>
				<legend>SZE Image Substructure</legend>
				<div class="form-group">
					<label class="control-label col-xs-2" for="szeOffset" title="Units: R500">
						Offset , in R500
					</label>
					<select id="szeOffset-offset" onchange="process_sze_struc_option( this )">
						<option disabled selected>-- select offset --</option>
						<option value="D150">cluster center -- 150 GHz peak</option>
						<option value="D350">cluster center -- 350 GHz peak</option>
					</select>
					<input type="text" size="12" maxlength="12" id="szeOffset" name="szeOffset">
					<button type="button" class="btn btn-default" id="btnAddSZEOffset" onclick="add_sze_offset_option()">
						Add Offset Constraint
					</button>
					<br />
				</div>
			</fieldset>
			<br />

			<p><input type="submit" value="Search Simulations" name="submit" class="btn btn-default"/></p>
		</form>
		</div><!-- / .subject -->
	</div><!-- / .main section -->
</div> <!-- class -->
