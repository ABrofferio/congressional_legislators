$(document).ready(function() {
	$('#CA').click(function(){
		$.ajaxSetup({
			headers: {
				'X-APIKEY': 'b64f4d8734b94fd8ad8644b0ecba03fb'
			}
		});
		$.getJSON('https://congress.api.sunlightfoundation.com/legislators?fields=chamber,party,state,gender,birthday,last_name', function (data) {
			var units = [];
			$.each(data, function(key, value) {
				units.push('<li>' + key + ':' + value.count || value.page || value.results + '/<li>');
			});
			$ul = $('<ul> </ul>').appendTo('.content');
			$ul.append(units);
			console.log(data);
			//document.write(data);
		});
	});
});
