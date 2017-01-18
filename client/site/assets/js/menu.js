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
