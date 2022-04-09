(function ($) {
	"use strict";

	var contador = 1;

	$(document).ready(function () {
		var x;

		$('.icon-menu').click(function () {
			if (1 === contador) {
				$('.header-menu').animate({ right: 0 });
				contador = 0;
			} else {
				contador = 1;
				$('.header-menu').animate({ right: '-100%' });
				$('.bt-menu').animate({ left: 0 });
			}
		});

		x = window.matchMedia("(max-width: 1024px)");
		if (x.matches) {
			// Mostramos y ocultamos submenus
			$('.submenu').click(function () {
				$(this).children('.children').slideToggle();
			});
		}
	});

}(jQuery));
