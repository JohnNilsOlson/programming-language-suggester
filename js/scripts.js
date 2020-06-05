$(document).ready(function() {
  $("#survey").submit(function(event) {
    const firstName = $("input#firstname").val();
    const lastName = $("input#lastname").val();
    const color = parseInt($("select#color").val());
    const animal = parseInt($("select#animal").val());
    const food = parseInt($("select#food").val())
    const climate = parseInt($("select#climate").val());
    const literature = parseInt($("select#literature").val());

    if ((color + animal + food + climate + literature) >= 0) {
      $("#name-return").text(firstName);
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