
if(typeof window !== "undefined" && typeof document !== "undefined"){
  window.$ = window.jQuery = require('jquery');
  $(document).mousemove(function(event) {
    const radialGradientElement = $('.radial-gradient')
    if(typeof radialGradientElement.offset() !== "undefined"){
      const x = event.pageX - radialGradientElement.offset().left
      const y = event.pageY - radialGradientElement.offset().top
      const width = radialGradientElement.width();
      const height = radialGradientElement.height();
      
      mouseXpercentage = Math.round(x / width * 100);
      mouseYpercentage = Math.round(y / height * 100);
      radialGradientElement.css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(0, 256, 0, 0.2), rgba(0, 0, 0, 0) 25%)');
    }
    
  });
}
