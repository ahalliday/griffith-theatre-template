$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('body').toggleClass('show-mbl-menu');
  });

  // Contrast
  $('.contrast').click(function () {
    $('body').toggleClass('contrast');
  });

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

  // Date Range Picker

  var start = moment();
  var end = moment();

  function cb(start, end) {
    $('.datepicker span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
  }

  $('.datepicker').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, cb);

  cb(start, end);

  // Square Event Calendar with Dynamic Width
  var $box = $('.calendar-list .box');// The element to measure
  var boxWidth = $box.outerWidth();// Get its width    
  $box.outerHeight(boxWidth); // Set width value on element's height

  $('#EventTab a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    if(event.target) {
      boxWidth = $box.outerWidth();// Re-get the width
      $box.outerHeight(boxWidth);// Re-update element height
    }
  })
});
