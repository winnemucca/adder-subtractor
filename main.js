$(document).on('ready', function() {


	$('.adder').on('click', function(e) {
		e.preventDefault();
		console.log('clicked');
		var addend1 = parseInt($('.integerX').val());
		var addend2	= parseInt($('.integerY').val());
		var total	= addend1 + addend2;
		$('p').remove('.answer');



		if(total === NaN) {
			alert('please enter a valid #');
		}
		else {
			$('.math-engine').append("<p class='answer'>" + addend1 + " plus " + addend2 + " is " + total + "</p>");
		}


		

		
	});

	$('.subtractor').on('click', function(e) {
		e.preventDefault();
		console.log('clicked');

		// could not figure out how to refactor variables so I could make one declaration for adder and subtractor
		var addend1 = parseInt($('.integerX').val());
		var addend2	= parseInt($('.integerY').val());
		var total	= addend1 - addend2;

		//  remove the answer after each submission
		$('p').remove('.answer');

		if(total === String) {
			alert('please enter a valid #');
		}
		else {
			$('.math-engine').append("<p class='answer'>" + addend1 + " minus " + addend2 + " is " + total + "</p>");
		}

		
	});


  
});      //document ready//