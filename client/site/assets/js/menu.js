'use strict';


function reveal_menu( menu )
{
	menu.name = 'mode';
	var integration_type = menu.value;
	//      alert( "integration_type is " + integration_type );

	if( integration_type === "total" )
	{
		$('#totalInteg-radius').removeClass( "not" );
		$('#totalInteg-radius').addClass( "form-group" );
		$('#totalInteg-radius').children('select').attr({ "name": "radius" });

		$('#projInteg-axis').removeClass( "form-group" );
		$('#projInteg-axis').addClass( "not" );
		$('#projInteg-axis').children('select').attr({ "name": "" });

		$('#projInteg-excCore').removeClass( "form-group" );
		$('#projInteg-excCore').addClass( "not" );
		$('#projInteg-excCore').children('select').attr({ "name": "" });
	}
	else if( integration_type === "proj" )
	{
		$('#projInteg-axis').addClass( "form-group" );
		$('#projInteg-axis').removeClass( "not" );
		$('#projInteg-axis').children('select').attr({ "name": "axis" });

		$('#projInteg-excCore').addClass( "form-group" );
		$('#projInteg-excCore').removeClass( "not" );
		$('#projInteg-excCore').children('select').attr({ "name": "excCore" });

		$('#totalInteg-radius').addClass( "not" );
		$('#totalInteg-radius').removeClass( "form-group" );
		$('#totalInteg-radius').children('select').attr({ "name": "" });
	}
}

function process_orbit_option( option, prefix )
{
	var odens = document.getElementById( option.id ).value;
	var cluster = document.getElementById( "cluster" ).value;
	var new_id = prefix + odens.toString() + "_" + cluster.toString();

	var field_id = option.id.replace( /-odens/, '' );
	document.getElementById( field_id ).id = new_id;
	document.getElementById( new_id ).name = new_id;
	//	alert( "new field ID:\t" +  document.getElementById( new_id ).id );

	option.id = new_id + "-odens";
}

function process_mass_option( option )
{
	process_orbit_option( option, "M" );
}

function process_radius_option( option )
{
	process_orbit_option( option, "R" );
}


function define_mass_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"Mass\" title=\"Units: Msol\">" + "\n";
	this_menu += "Mass, in Msol" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"Mass-odens\" onchange=\"process_mass_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select overdensity --</option>" + "\n";
	this_menu += "<option value=\"2500\">2500</option>" + "\n";
	this_menu += "<option value=\"1000\">1000</option>" + "\n";
	this_menu += "<option value=\"500\">500</option>" + "\n";
	this_menu += "<option value=\"200\">200</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"Mass\" name=\"Mass\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddMass\" onclick=\"add_mass_option()\">" + "\n";
	this_menu += "Add Mass Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_mass_option()
{
	var this_div = $('#btnAddMass').parent('div');
	$('#btnAddMass').remove();
	var new_menu = define_mass_option();
	$(new_menu).insertAfter( this_div );
}


function define_radius_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"Radius\" title=\"Units: kpc\">" + "\n";
	this_menu += "Radius, in kpc" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"Radius-odens\" onchange=\"process_radius_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select overdensity --</option>" + "\n";
	this_menu += "<option value=\"2500\">2500</option>" + "\n";
	this_menu += "<option value=\"1000\">1000</option>" + "\n";
	this_menu += "<option value=\"500\">500</option>" + "\n";
	this_menu += "<option value=\"200\">200</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"Radius\" name=\"Radius\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddRadius\" onclick=\"add_radius_option()\">" + "\n";
	this_menu += "Add Radius Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_radius_option()
{
	var this_div = $('#btnAddRadius').parent('div');
	$('#btnAddRadius').remove();
	var new_menu = define_radius_option();
	$(new_menu).insertAfter( this_div );
}

function process_xray_option( option )
{
	var suffix = option.value;
	var field_id = option.id.replace( /-band/, '' );
	var new_id;

	if( /^_/.test( suffix ) )
	{
		new_id = field_id + suffix;
	}
	else
	{
		new_id = suffix;
	}

	document.getElementById( field_id ).id = new_id;
	document.getElementById( new_id ).name = new_id;
	//	alert( "new field ID:\t" +  document.getElementById( new_id ).id );

        $('#'+new_id).siblings('label').attr( { 'for': new_id } );

	option.id = new_id + "-band";
}


function define_lx_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"Lx\" title=\"Units: erg/s\">" + "\n";
	this_menu += "Luminosity, in erg/s" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"Lx-band\" onchange=\"process_xray_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select band --</option>" + "\n";
	this_menu += "<option value=\"_c_a\">APEC, [0.7-7] keV</option>" + "\n";
	this_menu += "<option value=\"_w_a\">APEC, [0.5-4] keV</option>" + "\n";
	this_menu += "<option value=\"_b_a\">APEC, Bolometric</option>" + "\n";
	this_menu += "<option value=\"_c_m\">MeKaL, [0.7-7] keV</option>" + "\n";
	this_menu += "<option value=\"_w_m\">MeKaL, [0.5-4] keV</option>" + "\n";
	this_menu += "<option value=\"_r_m\">MeKaL, [2-10] keV</option>" + "\n";
	this_menu += "<option value=\"_b_m\">MeKaL, Bolometric</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"Lx\" name=\"Lx\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddLx\" onclick=\"add_lx_option()\">" + "\n";
	this_menu += "Add Luminosity Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_lx_option()
{
	var this_div = $('#btnAddLx').parent('div');
	$('#btnAddLx').remove();
	var new_menu = define_lx_option();
	$(new_menu).insertAfter( this_div );
}


function define_tx_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"Tx\" title=\"Units: keV\">" + "\n";
	this_menu += "Temperature, in keV" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"Tx-band\" onchange=\"process_xray_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select band --</option>" + "\n";
	this_menu += "<option value=\"_c_a\">Emission-Weighted, APEC, [0.7-7] keV</option>" + "\n";
	this_menu += "<option value=\"_w_a\">Emission-Weighted, APEC, [0.5-4] keV</option>" + "\n";
	this_menu += "<option value=\"_b_a\">Emission-Weighted, APEC, Bolometric</option>" + "\n";
	this_menu += "<option value=\"_c_m\">Emission-Weighted, MeKaL, [0.7-7] keV</option>" + "\n";
	this_menu += "<option value=\"_w_m\">Emission-Weighted, MeKaL, [0.5-4] keV</option>" + "\n";
	this_menu += "<option value=\"_r_m\">Emission-Weighted, MeKaL, [2-10] keV</option>" + "\n";
	this_menu += "<option value=\"_b_m\">Emission-Weighted, MeKaL, Bolometric</option>" + "\n";
	this_menu += "<option value=\"Tsl\">Spectroscopic-like (V06), MeKaL, [0.3-10] keV, nH=4e20 cm^{-2}, z=0.05</option>" + "\n";
	this_menu += "<option value=\"Broad\">Spectroscopic-like (V06), MeKaL, [0.7-7] keV, nH=4e20 cm^{-2}, z=0.05</option>" + "\n";
	this_menu += "<option value=\"Hard\">Spectroscopic-like (V06), MeKaL, [2-7] keV, nH=4e20 cm^{-2}, z=0.05</option>" + "\n";
	this_menu += "<option value=\"Tmg\">Mass-Weighted</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"Tx\" name=\"Tx\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddTx\" onclick=\"add_tx_option()\">" + "\n";
	this_menu += "Add Temperature Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_tx_option()
{
	var this_div = $('#btnAddTx').parent('div');
	$('#btnAddTx').remove();
	var new_menu = define_tx_option();
	$(new_menu).insertAfter( this_div );
}

function process_sze_option( option )
{
	var suffix = option.value;
	var field_id = option.id.replace( /-freq/, '' );
	var new_id;

	if( /^_/.test( suffix ) )
	{
		new_id = field_id + suffix;
	}
	else
	{
		new_id = suffix;
	}

	document.getElementById( field_id ).id = new_id;
	document.getElementById( new_id ).name = new_id;
	//	alert( "new field ID:\t" +  document.getElementById( new_id ).id );

        $('#'+new_id).siblings('label').attr( { 'for': new_id } );

	option.id = new_id + "-freq";
}


function define_tsze_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"tSZE\" title=\"Units: Mpc^2\">" + "\n";
	this_menu += "Thermal SZE" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"tSZE-freq\" onchange=\"process_sze_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select band --</option>" + "\n";
	this_menu += "<option value=\"_nr\">Freq. Independent</option>" + "\n";
	this_menu += "<option value=\"_150\">150 GHz</option>" + "\n";
	this_menu += "<option value=\"_220\">220 GHz</option>" + "\n";
	this_menu += "<option value=\"_350\">350 GHz</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"tSZE\" name=\"tSZE\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddtSZE\" onclick=\"add_tsze_option()\">" + "\n";
	this_menu += "Add tSZE Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_tsze_option()
{
	var this_div = $('#btnAddtSZE').parent('div');
	$('#btnAddtSZE').remove();
	var new_menu = define_tsze_option();
	$(new_menu).insertAfter( this_div );
}


function define_ksze_option()
{
	var this_menu = "";
	this_menu += "<div class=\"form-group\">" + "\n";
	this_menu += "<label class=\"control-label col-xs-2\" for=\"kSZE\" title=\"Units: Mpc^2\">" + "\n";
	this_menu += "Kinetic SZE" + "\n";
	this_menu += "</label>" + "\n";
	this_menu += "<select id=\"kSZE-freq\" onchange=\"process_sze_option( this )\">" + "\n";
	this_menu += "<option disabled selected>-- select band --</option>" + "\n";
	this_menu += "<option value=\"_nr\">Freq. Independent</option>" + "\n";
	this_menu += "<option value=\"_150\">150 GHz</option>" + "\n";
	this_menu += "<option value=\"_220\">220 GHz</option>" + "\n";
	this_menu += "<option value=\"_350\">350 GHz</option>" + "\n";
	this_menu += "</select>" + "\n";
	this_menu += "<input type=\"text\" size=\"12\" maxlength=\"12\" id=\"kSZE\" name=\"kSZE\">" + "\n";
	this_menu += "<button type=\"button\" class=\"btn btn-default\" id=\"btnAddkSZE\" onclick=\"add_ksze_option()\">" + "\n";
	this_menu += "Add kSZE Constraint" + "\n";
	this_menu += "</button>" + "\n";
	this_menu += "<br />" + "\n";
	this_menu += "</div>" + "\n";

	return this_menu;
}
function add_ksze_option()
{
	var this_div = $('#btnAddkSZE').parent('div');
	$('#btnAddkSZE').remove();
	var new_menu = define_ksze_option();
	$(new_menu).insertAfter( this_div );
}
