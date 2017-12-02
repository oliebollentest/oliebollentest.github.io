$(document).ready(function()
{
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeInCubic');
   });
   $('#home').parallax();
   $("a[href*='#portfolio']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#portfolio').offset().top-60 }, 600, 'easeInCubic');
   });
   $('#gallery2').parallax();
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#services').offset().top-60 }, 600, 'easeInCubic');
   });
   $("a[href*='#reviews']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#reviews').offset().top-60 }, 600, 'easeInCubic');
   });
   $("a[href*='#newsletter']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#newsletter').offset().top-60 }, 600, 'easeInCubic');
   });
});
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.10&appId=121606358501158";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));