

$(document).ready(function(){
  $("#dissolve").remove();

  function dissolvesound() {
    var dissolve = new Audio('images/dissolve.mp3');
    dissolve.play();
  }

  $("#noisedissolve").on("click", function() {
    dissolvesound();
  });
});


$(document).ready(function(){
  $("#storm").remove();

  function stormsound() {
    var storm = new Audio('images/storm.mp3');
    storm.play();
  }

  $("#noisestorm").on("click", function() {
    stormsound();
  });
});


$(document).ready(function(){
  $("#buildup").remove();

  function buildupsound() {
    var buildup = new Audio('images/buildup.mp3');
    buildup.play();
  }

  $("#noisebuildup").on("click", function() {
    buildupsound();
  });
});
