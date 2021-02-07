$(function() {
  'use strict';

  /* =======================
  // Toggle Menu and Search
  ======================= */
  var $menuOpenButton = $(".menu-button"),
      $menuCloseButton = $(".menu-close"),
      $navMenu = $(".nav-menu"),

      $searchOpenButton = $(".search-button"),
      $searchCloseButton = $(".search-close-button"),
      $search = $(".search");

  $(window).on("resize", function () {
    var e = $(this);
    if (e.width() >= 991) {
      $navMenu.removeClass("active"); // Remove class - "active" if width window more than 991px
    }
  });

  $menuOpenButton.on("click", function() {
    openMenu();
  });

  $menuCloseButton.on("click", function() {
    closeMenu();
  });

  $searchOpenButton.on("click", function() {
    openSearch();
  });

  $searchCloseButton.on("click", function() {
    closeSearch();
  });


  function openMenu() {
    $navMenu.addClass("active");
  }

  function closeMenu() {
    $navMenu.removeClass("active");
  }

  function openSearch() {
    $search.addClass("active");
  }

  function closeSearch() {
    $search.removeClass("active");
  }


  /* =======================
  // Reveal Image
  ======================= */
  var ww = window.innerWidth,
    wh = window.innerHeight;

  $(window).ready(function () {
    $('body').waitForImages({
      finished: function () {
        setTimeout(function () {
          $('.preloader').addClass('hide');

          setTimeout(function () {
            reveals();
          }, 100);
        }, 500);
      },
      waitForAll: true
    });
  });

  function reveals() {
    $(window).on('scroll', function () {
      $(".article-box, .article-first, .post-image-box, .page-image-box, .post-body img, .page-body img, .recent-header").each(
        function(i) {
          var el_top = $(this).offset().top,
            win_bottom = wh + $(window).scrollTop();

          if (el_top < win_bottom) {
            $(this)
              .delay(i * 100)
              .queue(function() {
                $(this).addClass("reveal-in");
              });
          }
        }
      );
    }).scroll();
  }


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post-content, .page-content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });


  /* =======================
  // Instagram Feed
  ======================= */
  // userId and accessToken from Matthew Elsom (https://codepen.io/matthewelsom/pen/zrrrLN) for example, for which he thanks a lot!
  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 6,
    resolution: 'standard_resolution',
    userId: '1229367427',
    accessToken: 'IGQVJYZAUEtUUVUZAUQ5VjVkVjJsT29scmFpck45clUtZAGhDMFgzU2hwUGV6LXVLbGkxNml1SWZARRHV6cHZAxQ09VMmtBQkwxYWo3Y1lycU45NV9XYlA5TGJtRFRVU3hISUdwc2wxZA3NfYW03b3dJR192TQZDZD',
    template:
      '<li class="instagram-item"><a href="{{link}}" aria-label="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }

// IGQVJXWVVjcl9xZAjlWdkJncVgzQ1lOZA3NEaWdSR0RPNVh6RndqTDhZAZA2luS3NUeEVXb1ZAXWnJDbHljRWdnTGdKYUhZAUGVaSU1PR1dRb1VJVThTT1pMbFBIS2pyVEVKdFFYc0dhOTNsQzBqclJJMHdvSAZDZD
// IGQVJYZAUEtUUVUZAUQ5VjVkVjJsT29scmFpck45clUtZAGhDMFgzU2hwUGV6LXVLbGkxNml1SWZARRHV6cHZAxQ09VMmtBQkwxYWo3Y1lycU45NV9XYlA5TGJtRFRVU3hISUdwc2wxZA3NfYW03b3dJR192TQZDZD
// 334778397769041
// https://api.instagram.com/oauth/authorize?client_id=334778397769041 &redirect_uri=https://j3zz.com/auth/&scope=user_profile,user_media &response_type=code
// https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&next=/oauth/authorize/%3Fredirect_uri%3Dhttps%3A//developers.facebook.com/instagram/token_generator/oauth/%26client_id%3D334778397769041%26response_type%3Dcode%26scope%3Duser_profile%2Cuser_media%26state%3D%257B%2522app_id%2522%3A%2522334778397769041%2522%2C%2522user_id%2522%3A%252217841401662829208%2522%2C%2522nonce%2522%3A%2522aPAWe6ivHs0HTLGB%2522%257D





  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function () {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

});
