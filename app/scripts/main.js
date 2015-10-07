/*global $:false */
'use strict';

// Document ready
$(function () {
	// Resize progress bar of the internet use
	$('.user-info .gradient').css('background-size', $('.user-info .gradient').width());
	// Tooltip of consume
	$('.total-pop').popover({
		placement: 'bottom',
		trigger: 'focus',
		title: 'Cuota de datos consumidos',
		content: 'Es la suma de los GB que has consumido de tu Plan y de las Bolsas que hayas contratado.'
	});
	// Modal for config panel
	$('.modal-config-open').on('click', function(){
		$('#config-modal').modal();
		$('#config-modal').on('shown.bs.modal', function (e) {
			// Resize and set width of all progress bar
			$('.dinamic-gradient').each(function(){
				var width = $(this).width();
				$(this).children('.gradient').css('background-size', width);
			});
		})
	});
	// Modal for history of purchase
	$('.modal-purchase-open').on('click', function(){
		$('#purchase-modal').modal();
		$("#bag-history").popoverX("hide");
	});
});

// Document resize
$(window).resize(function() {
	$('.dinamic-gradient').each(function(){
		var width = $(this).width();
		$(this).children('.gradient').css('background-size', width);
	});
});

	// Animate the bag form
	// $('#form-bag .btn-go').on('click', function(){
	// 	$('#form-bag').addClass('hidden');
	// 	$('#form-login').removeClass('hidden');
	// 	$('#form-login').addClass('animated fadeIn');
	// });
	// $('#form-login .back-form').on('click', function(){
	// 	$('#form-login').addClass('hidden');
	// 	$('#form-bag').removeClass('hidden');
	// 	$('#form-bag').addClass('animated fadeIn');
	// });
