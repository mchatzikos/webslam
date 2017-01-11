'use strict';


function reveal_menu()
{
       var integration_type = document.getElementById( 'mode' ).value;
       //      alert( "integration_type is " + integration_type );
       if( integration_type === "total" )
       {
	       $('#totalInteg-radius').removeClass( "not" );
	       $('#totalIntegi-radius').addClass( "form-group" );

	       $('#projInteg-axis').removeClass( "form-group" );
	       $('#projInteg-axis').addClass( "not" );

	       $('#projInteg-excCore').removeClass( "form-group" );
	       $('#projInteg-excCore').addClass( "not" );
       }
       else if( integration_type === "proj" )
       {
	       $('#projInteg-axis').addClass( "form-group" );
	       $('#projInteg-axis').removeClass( "not" );

	       $('#projInteg-excCore').addClass( "form-group" );
	       $('#projInteg-excCore').removeClass( "not" );

	       $('#totalInteg-radius').addClass( "not" );
	       $('#totalInteg-radius').removeClass( "form-group" );
       }
}
