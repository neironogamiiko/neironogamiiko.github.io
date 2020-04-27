$(document).ready(function() {


	$("feedback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		})
		return false;
	});

});