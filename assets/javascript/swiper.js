var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 1500,
    mousewheel: true,
    grabCursor: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Set the time interval in milliseconds (e.g., 3000ms = 3 seconds)
      disableOnInteraction: false, // Allow user interaction to stop autoplay
    },
  });