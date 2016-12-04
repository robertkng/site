// $(window).scroll(function() {
//   var upScroll = $(this).scrollTop();
//   $('#icon').css({
//     'transform' : 'translate(0px, ' + upScroll /4 + '%)'

//   });
// });


$(document).ready(function() {
  const btt = $('.top');

  btt.on('click', function(e) {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    e.preventDefault();
  });

  $(window).on('scroll', function() {
    const self = $(this),
          height = self.height(),
          top = self.scrollTop();

          if (top > height) {
            if(!btt.is(':visible')) {
              btt.show();
            }
          } else {
            btt.hide();
          }
  });
});
