  $(function(){
// 🌎

const str="Robert Ng === NERD (Node, Express, React, Database) Stack Developer + Commodity Trader + World Traveler;"
const split = str.split("");
let counter = 0;

const SI=setInterval(function() {
  const h1 = $('#type');

  h1.append(split[counter]);
  counter++;
  if(counter==str.length){clearInterval(SI)}
}, 100)

//mouseover project 1 and text will
// const individual ="Player dodges wrench. Tech: JQuery, DOM, and collision detection"
// const divide = individual.split("");
// let count = 0;

// $('#individual-typing').on('mouseover', function() {
//   // const h1 = $('#individual-typing');

//   $('#individual-typing').append(split[counter]);
//   count++;
//   if(count==str.length){clearInterval(hover)}
// }, 100)


 const portfolio = $('#portfolio');

  portfolio.on('click', function(e) {
    $('html, body').animate({
      scrollTop: 800
    }, 300);
    e.preventDefault();
  });


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




});
