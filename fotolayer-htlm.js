$(document).ready(function()
{
   $('.fotolayer').css('position', '');
   $('.fotolayer').css('left', '');
   $('.fotolayer').css('top', '');
   $('.fotolayer').css('float', 'left');
   $('.fotolayer').css('display', 'block');
   $('.fotolayer').css('margin', '0px 20px 20px 0px');
   var masonryOpts =
   {
      itemSelector: '.fotolayer',
      columnWidth: 320,
      gutterWidth: 0,
      isFitWidth: true,
      isAnimated: true,
      animationOptions: 
      {
         duration: 750,
         easing: 'linear',
         queue: false
      }
   };
   $('#container').masonry(masonryOpts);
});
