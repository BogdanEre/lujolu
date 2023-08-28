$(document).ready(function () {
  $('.arrow').click(function() {
  $('html, body').animate({
    scrollTop: $('#container.dark').offset().top
  }, 2000)}),
    $('body').fadeIn(1500);
    $('.arrow').delay(2000).fadeIn(1000);
    $(".copyright").animate({right: '0px'}, 2500);
    $(".social").animate({left: '0px'}, 2500);

});

$(window).scroll(function(){
  var $win = $(window);
  var windowTop = $win.scrollTop();
  var position = getSection(windowTop);
    var sIcon = 20;
    if ($win.scrollTop() > sIcon) {
      $('.arrow').fadeOut(300);
    }
    else {
      $('.arrow').fadeIn(700);
    }
});

function getSection(windowPos) {
  var returnValue = null;
  var $win = $(window);
  var scrollThreshold = 0.2;
  var windowHeight = Math.round($win.height() * scrollThreshold);
  return returnValue;
}

window.addEventListener('scroll', () => {
  let page = this;
  let pageTop = this.scrollY;
  let pageHeight = this.outerHeight / 100 ; 
  let frames = document.querySelectorAll('#container.dark');
  frames.forEach( frame => {
    let frameTop = frame.offsetTop;
    let frameHeight = frame.offsetHeight; 
       /**   var el = document.querySelector('.logo2'); **/

    if ( pageTop  >= frameTop - pageHeight &&
        pageTop  < frameTop + frameHeight ){

     /** el.style.removeProperty('top');
      el.style.top = "0";
      el.style.bottom = "0"; **/
      $(".dark-description").animate({bottom: '4%', opacity: '1'}, 3000);
    }else{   

      /** el.style.removeProperty('bottom'); **/

    }
  });
});