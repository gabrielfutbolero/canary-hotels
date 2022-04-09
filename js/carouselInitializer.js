var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 700,
    //Reproduccion automatica de imagenes
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    //Efecto de carrusel
    coverflowEffect: {
      rotate: 0,
      stretch: -5,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    },
    //Paginacion por botones bajo las iamgenes
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //Flechas laterales de navegacion
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });