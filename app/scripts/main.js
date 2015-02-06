$('document').ready(function(){
   // On document load drop option 1 logo from above
   $('#option-1 .inner-wrapper').addClass('logo-drop')
   // Add sand animations
      $('.opt-1-sand-1').addClass('opt-1-sand-1-animate');
      $('.opt-1-sand-2').addClass('opt-1-sand-2-animate');
      $('.opt-1-sand-3').addClass('opt-1-sand-3-animate');
      $('.opt-1-sand-4').addClass('opt-1-sand-4-animate');
})

$('.move-down').click(function(){
   $(".main").moveDown();
   // destroy the old chart gefore move
   pieChart.destroy();
   // remove the canvas element
   $('#opt-3-circle').remove();
})

// pie chart data
var pieData = [
   {
     value: 50,
     color: '#E4782B'
   },
   {
     value : 50,
     color : '#DA5F27'
   }
];
// pie chart options
var pieOptions = {
   segmentShowStroke : false,
   animateScale : true
}
// get pie chart canvas
var optThreeCircle = document.getElementById('opt-3-circle').getContext('2d');
// draw pie chart
var pieChart = new Chart(optThreeCircle).Pie(pieData, pieOptions);

// Onepage scroll function
// passing in options for animation on scroll
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {
      // Clear option 1 logo before move
      $('#option-1 .inner-wrapper').removeClass('logo-drop');
      // Remove sand animations
      $('.opt-1-sand-1').removeClass('opt-1-sand-1-animate');
      $('.opt-1-sand-2').removeClass('opt-1-sand-2-animate');
      $('.opt-1-sand-3').removeClass('opt-1-sand-3-animate');
      $('.opt-1-sand-4').removeClass('opt-1-sand-4-animate');
      // hide option 2 elements before move
      $('.opt-2-upper-arm').css({
         'visibility' : 'hidden'
      });
      $('.opt-2-lower-arm').css({
         'visibility' : 'hidden'
      });
      $('.opt-2-text').css({
         'visibility' : 'hidden'
      });
      // Remove the animate css to the svg in option 2
      $('.opt-2-path').css({
         '-webkit-animation' : '' ,
         '-moz-animation' : '' ,
         '-o-animation' : '' ,
         'animation' : ''
      });
      // Remove option two icon arms
      $('.opt-2-upper-arm').removeClass('opt-2-upper-arm-animate');
      $('.opt-2-lower-arm').removeClass('opt-2-lower-arm-animate');
      // remove option 2 text
      $('.opt-2-text').removeClass('opt-2-text-animate');
      // destroy the old chart gefore move
      pieChart.destroy();
      // remove the canvas element
      $('#opt-3-circle').remove();
      // Remove option 3 arm animations
      $('.opt-3-watcharm-large').removeClass('opt-3-watcharm-large-animate');
      $('.opt-3-watcharm-small').removeClass('opt-3-watcharm-small-animate');
   },  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
      // Drop option 1 logo on move
      $('#option-1 .inner-wrapper').addClass('logo-drop');
      // Add sand animations
      $('.opt-1-sand-1').addClass('opt-1-sand-1-animate');
      $('.opt-1-sand-2').addClass('opt-1-sand-2-animate');
      $('.opt-1-sand-3').addClass('opt-1-sand-3-animate');
      $('.opt-1-sand-4').addClass('opt-1-sand-4-animate');
      // add the animate css to the svg in option 2
      $('.opt-2-path').css({
         '-webkit-animation' : 'dash 3s linear forwards' ,
         '-moz-animation' : 'dash 3s linear forwards' ,
         '-o-animation' : 'dash 3s linear forwards' ,
         'animation' : 'dash 3s linear forwards'
      });
      // Animate option two icon arms
      $('.opt-2-upper-arm').addClass('opt-2-upper-arm-animate');
      $('.opt-2-lower-arm').addClass('opt-2-lower-arm-animate');
      // Animate option 2 text
      $('.opt-2-text').addClass('opt-2-text-animate');
      // $('.opt-2-path').remove();
      // Create new canvas element and provide class name, height and width
      var optThreeCanvas = '<canvas id="opt-3-circle" width="100" height="100"></canvas>'
      // add the newly created canvas element to the right container
      $('#option-3 .inner-wrapper').prepend(optThreeCanvas);
      // get the 2d context of the canvas element and store as a variable
      var optThreeCircle = document.getElementById('opt-3-circle').getContext('2d');
      // Instatiate a new pie chart as described above to the new canvas element
      var pieChart = new Chart(optThreeCircle).Pie(pieData, pieOptions);
      // Add option 3 arm animations
      $('.opt-3-watcharm-large').addClass('opt-3-watcharm-large-animate');
      $('.opt-3-watcharm-small').addClass('opt-3-watcharm-small-animate');
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});