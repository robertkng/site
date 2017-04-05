  $(function(){
// 🌎

const str="Robert Ng === Software Engineer + World Traveler;"
const split = str.split("");
let counter = 0;

const SI=setInterval(function() {
  const h1 = $('#type');
  h1.append(split[counter]);
  counter++;
  if(counter==str.length){clearInterval(SI)}
}, 100)

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
});
