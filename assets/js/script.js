$(function () {
  $('.navbar-toggler').click(function () {
    $('body').toggleClass('show-mbl-menu');
  });

  // $('.owl-carousel').owlCarousel({
  //   center: true,
  //   items: 1,
  //   loop: true,
  //   margin: 16,
  //   autoWidth: true,
  //   nav: true,
  //   navText: ['<span class="far fa-angle-left" aria-hidden="true"></span>', '<span class="far fa-angle-right" aria-hidden="true"></span>'],
  //   dots: false,
  //   responsive: {
  //     992: {
  //       items: 1,
  //       margin: 110,
  //     }
  //   }
  // });
  // Remove alert element
  $(".close").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".alert").remove();
  });

  // Enable tooltips
  $('[data-toggle="tooltip"]').tooltip();

  if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel(
      {
        items: 3,
        loop: true,
        margin: 15,
        dots: true,
        nav: true,
        navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
        responsive: {
          0: {
            items: 1,
            stagePadding: 30
          },
          640: {
            items: 2,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
            margin: 30,
            stagePadding: 20
          }
        }
      }
    );
  }
  $('.datepicker').datepicker({
    clearBtn: true,
    format: "dd/mm/yyyy"
  });

  $("#scrollTo").hide();
  $(function toTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#scrollTo').fadeIn();
      } else {
        $('#scrollTo').fadeOut();
      }
    });

    $('#scrollTo').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});