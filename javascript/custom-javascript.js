

/* -------------------- AOS Setting -------------------- */

AOS.init();

/* -------------------- Count Up Setting -------------------- */

$('.count-up-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});

/* -------------------- Navbar Setting -------------------- */

$(window).scroll(function () {
    $(".navbar").toggleClass("scroll", $(this).scrollTop() > 1)
    $("#scroll-top").toggleClass("scroll", $(this).scrollTop() > 1)
});

/* -------------------- Scroll To Setting -------------------- */

$(".scroll-to").click(function (event) {
    $('html, body').animate({ scrollTop: '+=850px' }, 600);
});

/* -------------------- Slick Setting -------------------- */

/* Slick Center */

$('.slick-responsive-auto-center').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    responsive: [
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 500,
          settings: {
              slidesToShow: 1,
          }
      }
    ]
});