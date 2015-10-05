/*global $:false */
'use strict';

// Document ready
$(function () {
	// Init modal and tooltip for the app
	$('.total-pop').popover({
		placement: 'bottom',
		trigger: 'click',
		title: 'Cuota de datos consumidos',
		content: 'Es la suma de los GB que has consumido de tu Plan y de las Bolsas que hayas contratado.'
	});

	$('.modal-config-open').on('click', function(){
		$('#config-modal').modal();
	});
	$('.modal-purchase-open').on('click', function(){
		$('#purchase-modal').modal();
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
	// Resize and set width of a progress bar
	$('.dinamic-gradient').each(function(){
		var width = $(this).width();
		$(this).children('.gradient').css('background-size', width);
	});
});

// Document resize
$(window).resize(function() {
	$('.dinamic-gradient').each(function(){
		var width = $(this).width();
		$(this).children('.gradient').css('background-size', width);
	});
});
