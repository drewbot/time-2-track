$("document").ready(function(){$("#option-1 .inner-wrapper").addClass("logo-drop"),$(".opt-1-sand-1").addClass("opt-1-sand-1-animate"),$(".opt-1-sand-2").addClass("opt-1-sand-2-animate"),$(".opt-1-sand-3").addClass("opt-1-sand-3-animate"),$(".opt-1-sand-4").addClass("opt-1-sand-4-animate")}),$(".move-down").click(function(){$(".main").moveDown(),pieChart.destroy(),$("#opt-3-circle").remove()});var pieData=[{value:50,color:"#E4782B"},{value:50,color:"#DA5F27"}],pieOptions={segmentShowStroke:!1,animateScale:!0},optThreeCircle=document.getElementById("opt-3-circle").getContext("2d"),pieChart=new Chart(optThreeCircle).Pie(pieData,pieOptions);$(".main").onepage_scroll({sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!0,beforeMove:function(){$("#option-1 .inner-wrapper").removeClass("logo-drop"),$(".opt-1-sand-1").removeClass("opt-1-sand-1-animate"),$(".opt-1-sand-2").removeClass("opt-1-sand-2-animate"),$(".opt-1-sand-3").removeClass("opt-1-sand-3-animate"),$(".opt-1-sand-4").removeClass("opt-1-sand-4-animate"),$(".opt-2-path").css({"-webkit-animation":"","-moz-animation":"","-o-animation":"",animation:""}),$(".opt-2-upper-arm").removeClass("opt-2-upper-arm-animate"),$(".opt-2-lower-arm").removeClass("opt-2-lower-arm-animate"),$(".opt-2-text").removeClass("opt-2-text-animate"),pieChart.destroy(),$("#opt-3-circle").remove(),$(".opt-3-watcharm-large").removeClass("opt-3-watcharm-large-animate"),$(".opt-3-watcharm-small").removeClass("opt-3-watcharm-small-animate")},afterMove:function(){$("#option-1 .inner-wrapper").addClass("logo-drop"),$(".opt-1-sand-1").addClass("opt-1-sand-1-animate"),$(".opt-1-sand-2").addClass("opt-1-sand-2-animate"),$(".opt-1-sand-3").addClass("opt-1-sand-3-animate"),$(".opt-1-sand-4").addClass("opt-1-sand-4-animate"),$(".opt-2-path").css({"-webkit-animation":"dash 3s linear forwards","-moz-animation":"dash 3s linear forwards","-o-animation":"dash 3s linear forwards",animation:"dash 3s linear forwards"}),$(".opt-2-upper-arm").addClass("opt-2-upper-arm-animate"),$(".opt-2-lower-arm").addClass("opt-2-lower-arm-animate"),$(".opt-2-text").addClass("opt-2-text-animate");var a='<canvas id="opt-3-circle" width="100" height="100"></canvas>';$("#option-3 .inner-wrapper").prepend(a);{var t=document.getElementById("opt-3-circle").getContext("2d");new Chart(t).Pie(pieData,pieOptions)}$(".opt-3-watcharm-large").addClass("opt-3-watcharm-large-animate"),$(".opt-3-watcharm-small").addClass("opt-3-watcharm-small-animate")},loop:!0,keyboard:!0,responsiveFallback:!1,direction:"vertical"});