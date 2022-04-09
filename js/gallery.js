(function ($) {
    "use strict";

    $(".gallery").each(function () {
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
