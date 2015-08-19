/*global $:false */
'use strict';

// Document ready
$(function () {
	// Init modal and tooltip for the app
	$('[data-toggle="tooltip"]').tooltip({
		placement: 'top',
		html: 'true'
	});
	$('.modal-config-open').on('click', function(){
		$('#config-modal').modal();
	})
	$('#purchase-modal').modal('show');
	$('.modal-purchase-open').on('click', function(){
		$('#purchase-modal').modal();
	})
	// Animate the bag form
	$('#form-bag .btn-go').on('click', function(){
		$('#form-bag').addClass('hidden');
		$('#form-login').removeClass('hidden');
		$('#form-login').addClass('animated fadeIn');
	});
	$('#form-login .back-form').on('click', function(){
		$('#form-login').addClass('hidden');
		$('#form-bag').removeClass('hidden');
		$('#form-bag').addClass('animated fadeIn');
	});
});
