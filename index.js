  $(function(){
// 🌎

const str="Robert Ng === Full Stack Web Developer + Commodity Trader + World Traveler;"
const split = str.split("");
let counter = 0;

const SI=setInterval(function() {
  const h1 = $('#type');

  h1.append(split[counter]);
  counter++;
  if(counter==str.length){clearInterval(SI)}
}, 100)


  const scrollUp = $('.top');

  scrollUp.on('click', function(e) {
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
            if(!scrollUp.is(':visible')) {
              scrollUp.show();
            }
          } else {
            scrollUp.hide();
          }
  });

  // const wScroll = $(this).scrollTop();

  // if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
  //   $('.clothes-pics figure').each(function(i) {

  //     setTimeout(function() {
  //     $('.clothes-pics figure').eq(i).addClass('is-showing');
  //     }, 300 * (i+1));
  //   });
  // }



  //   let portfolio = $('#portfolio');

  // portfolio.on('click', function(e) {
  //   $('html, body').animate({
  //     portfolio: 1000
  //   }, 300);
  //   e.preventDefault();
  // });


});
  // });
