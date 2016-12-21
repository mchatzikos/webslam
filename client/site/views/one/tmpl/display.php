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

$this->css();

 //Hubzero\Utility\Debug::dump(JPATH_COMPONENT);
 //Hubzero\Utility\Debug::dump($this->option);

// Similarly, a js() method is available for pushing javascript assets to the document.
// The arguments accepted are the same as the css() method described above.
//  <!-- Optional theme -->
//  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
//
//
// $this->js();

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


Enter variables: <br />
<br />

<form method="get" action="/webslam/two" role="form" class="form-horizontal">

    <div class="form-group">
        <label class="control-label col-xs-2" title="Distance, in light years">Dist:</label>
        <input type="text" size="12" maxlength="12" name="dist"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="Relative velocity, in m/s">Vrel:</label>
        <input type="text" size="12" maxlength="12" name="vrel"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="R500_2 description">R500_2:</label>
        <input type="text" size="12" maxlength="12" name="R500_2"><br />
    </div>

    <div class="form-group">
        <label class="control-label col-xs-2" title="[0.7-7] APEC Luminosity, in erg/s">Lx_c_a:</label>
        <input type="text" size="12" maxlength="96" name="Lx_c_a"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="Spectroscopic-like Temp (V06), in keV">Tsl:</label>
        <input type="text" size="12" maxlength="96" name="Tsl"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="X-ray proxy for Thermal Energy, in Msol keV">Yx:</label>
        <input type="text" size="12" maxlength="96" name="Yx"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="M500  primary cluster, in Msol">M500_1:</label>
        <input type="text" size="12" maxlength="96" name="M500_1"><br />
    </div>
    <div class="form-group">
        <label class="control-label col-xs-2" title="R500  primary cluster, in kpc">R500_1:</label>
        <input type="text" size="12" maxlength="96" name="R500_1"><br />
    </div>

    <p><input type="submit" value="Search Simulations" name="submit" class="btn btn-default"/></p>
</form>
	</div><!-- / .subject -->
</div><!-- / .main section -->
</div> <!-- class -->