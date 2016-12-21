$(document).ready(function() {
	// This doesn't work with 'images' rows (not shown by default).
	// All ('results') rows in the table have the same background color.
	$('#tblMatches tr:even').addClass('even');

	$('#tblMatches tr').click(function(evt) {
		// This doesn't work when clicking on 'images' rows,
		// b/c in and out of view the next 'results' row.
		evt.preventDefault();
		$(evt.target).closest('tr').toggleClass('rowHighlight');
		$(evt.target).closest('tr').next('tr').toggleClass('not');
	});
});
