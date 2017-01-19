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
