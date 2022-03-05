
if(typeof window !== "undefined" && typeof document !== "undefined"){
  window.$ = window.jQuery = require('jquery');
  $(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(0, 256, 0, 0.2), rgba(0, 0, 0, 0) 25%)');
  });
}
