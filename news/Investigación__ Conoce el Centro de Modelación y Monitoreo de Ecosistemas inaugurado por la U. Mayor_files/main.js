/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2018 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
*/

jQuery(function ($) {

    // Stikcy Header
    if ($('body').hasClass('sticky-header')) {
        var header = $('.ts-header-nav');

        if($('.ts-header-nav').length) {
            var headerHeight = header.outerHeight();
            var stickyHeaderTop = header.offset().top;
            var stickyHeader = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > stickyHeaderTop) {
                    header.addClass('header-sticky');
                } else {
                    if (header.hasClass('header-sticky')) {
                        header.removeClass('header-sticky');
                    }
                }
            };
            stickyHeader();
            $(window).scroll(function () {
                stickyHeader();
            });
        }

        if ($('body').hasClass('layout-boxed')) {
            var windowWidth = header.parent().outerWidth();
            header.css({"max-width": windowWidth, "left": "auto"});
        }
    }


       /* ----------------------------------------------------------- */
   /*  Site search
    /* ----------------------------------------------------------- */

   $('.nav-search-icon').on('click', function () {
      $('.nav-search-form').fadeIn(100);
      $(this).fadeOut(100);
   });

   $('.search-close').on('click', function () {
      $('.nav-search-form').fadeOut(100);
      $('.nav-search-icon').fadeIn(100);
   });

    /* ----------------------------------------------------------- */
      /*  user login
    /* ----------------------------------------------------------- */
   $('.user-login-btn').on('click', function () {
      $('.ts-login-form').fadeIn(100);
      $('.user-login-popup').addClass('login-popup-show');
   });

   $('.user-login-close').on('click', function () {
      $('.ts-login-form').css('display', 'none');
      $('.user-login-popup').removeClass('login-popup-show');
   });

   $(document).on('mouseup', function (e) {
      var container = $(".ts-login-form");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
          $(".ts-login-form").css('display', 'none');
          $('.user-login-popup').removeClass('login-popup-show');
      }

  });


   /* ----------------------------------------------------------- */
      /* Tab menu hover 
    /* ----------------------------------------------------------- */

   // $('.sppb-nav[data-toggle="sppb-tab"] > li > a').hover( function(){
   //    $(this).sppb-tab('show');
   // });


   $('.ts-lifestyle-tab-menu .sppb-nav a').hover(function(e) {
      
      var container = $(this).parents('.ts-lifestyle-tab-menu');
      var target = $(this).attr('href');

      // removes all active classes
      container.find('ul.sppb-nav li').removeClass('active');

      // remove the panel active classes
      container.find('.sppb-tab-pane').removeClass('active in');


      // adds active class
      $(this).parent().addClass('active');
      $(target).addClass('active in');

   });
   

   $('.ts-lifestyle-tab-menu .sppb-nav a').click(function(e) {
      e.preventDefault();
      return false;
   });
   
    // go to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sp-scroll-up').fadeIn();
        } else {
            $('.sp-scroll-up').fadeOut(400);
        }
    });

    $('.sp-scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Preloader
    $(window).on('load', function () {
        $('.sp-preloader').fadeOut(500, function() {
            $(this).remove();
        });
    });

    //mega menu
    $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function () {
        $(this).parent().addClass('menu-justify');
    });

    // Offcanvs
    $('#offcanvas-toggler').on('click', function (event) {
        event.preventDefault();
        $('.offcanvas-init').addClass('offcanvas-active');
    });

    $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
        event.preventDefault();
        $('.offcanvas-init').removeClass('offcanvas-active');
    });
    
    $(document).on('click', '.offcanvas-inner .menu-toggler', function(event){
        event.preventDefault();
        $(this).closest('.menu-parent').toggleClass('menu-parent-open').find('>.menu-child').slideToggle(400);
    });

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Article Ajax voting
    $('.article-ratings .rating-star').on('click', function (event) {
        event.preventDefault();
        var $parent = $(this).closest('.article-ratings');

        var request = {
            'option': 'com_ajax',
            'template': template,
            'action': 'rating',
            'rating': $(this).data('number'),
            'article_id': $parent.data('id'),
            'format': 'json'
        };

        $.ajax({
            type: 'POST',
            data: request,
            beforeSend: function () {
                $parent.find('.fa-spinner').show();
            },
            success: function (response) {
                var data = $.parseJSON(response);
                $parent.find('.ratings-count').text(data.message);
                $parent.find('.fa-spinner').hide();

                if(data.status)
                {
                    $parent.find('.rating-symbol').html(data.ratings)
                }

                setTimeout(function(){
                    $parent.find('.ratings-count').text('(' + data.rating_count + ')')
                }, 3000);
            }
        });
    });

    if ($(".ts-video-scroll-tab .gkSmallBlock").length > 0) {
      $(".ts-video-scroll-tab .gkSmallBlock").mCustomScrollbar({
          mouseWheel: true,
          scrollButtons: { enable: true }
      });
  }

});
