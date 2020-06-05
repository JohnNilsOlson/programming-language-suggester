$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstname").val();
    const lastName = $("input#lastname").val();
    const color = parseInt($("select#color").val());
    const animal = parseInt($("select#animal").val());
    const food = parseInt($("select#food").val())
    const climate = parseInt($("select#climate").val());
    const literature = parseInt($("select#literature").val());

    if ((color + animal + food + climate + literature) >= 5 &&  (color + animal + food + climate + literature) <= 7 ) {
      $("#name-return").text(firstName);
      $("#ruby").fadeIn(500);
    } else if ((color + animal + food + climate + literature) > 7 && (color + animal + food + climate + literature) <= 9 ) {
      $("#name-return").text(firstName);
      $("#csharp").fadeIn(500);
    } else if ((color + animal + food + climate + literature) > 9 && (color + animal + food + climate + literature) <= 11 ) {
      $("#name-return").text(firstName);
      $("#javascript").fadeIn(500);
    } else if ((color + animal + food + climate + literature) > 11 && (color + animal + food + climate + literature) <= 13 ) {
      $("#name-return").text(firstName);
      $("#go").fadeIn(500);
    } else if ((color + animal + food + climate + literature) > 13 && (color + animal + food + climate + literature) <= 15 ) {
      $("#name-return").text(firstName);
      $("python").fadeIn(500);
    } else if ((color + animal + food + climate + literature) > 15 && (color + animal + food + climate + literature) <= 17 ) {
      $("#name-return").text(firstName);
      $("#rust").fadeIn(500);
    } else {
      $("#name-return").text(firstName);
      $("#swift").fadeIn(500);
    }

  });  

  $("#next1").click(function(event) {
    event.preventDefault();
    $("#q1").fadeIn(500);
  });

  $("#next2").click(function(event) {
    event.preventDefault();
    $("#q2").fadeIn(500);
  });

  $("#next3").click(function(event) {
    event.preventDefault();
    $("#q3").fadeIn(500);
  });

  $("#next4").click(function(event) {
    event.preventDefault();
    $("#q4").fadeIn(500);
  });

  $("#next5").click(function(event) {
    event.preventDefault();
    $("#q5").fadeIn(500);
  });

  $("#next6").click(function(event) {
    event.preventDefault();
    $("#q6").fadeIn(500);
  }); 

});