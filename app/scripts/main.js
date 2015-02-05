// On document load drop option 1 logo from above
$('document').ready(function(){
   $('#option-1 .inner-wrapper').addClass('logo-drop')
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
      pieChart.destroy();
      $('#opt-3-circle').remove();
   },  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
      var optThreeCanvas = '<canvas id="opt-3-circle" width="100" height="100"></canvas>'
      $('#option-3 .inner-wrapper').prepend(optThreeCanvas);
      var optThreeCircle = document.getElementById('opt-3-circle').getContext('2d');
      var pieChart = new Chart(optThreeCircle).Pie(pieData, pieOptions);
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});