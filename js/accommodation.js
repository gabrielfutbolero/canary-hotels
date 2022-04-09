(function ($) {
    "use strict";

    $(".accommodation .iconic-image").each(function () {

        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: "title"
            }
        });

    });

}(jQuery));
