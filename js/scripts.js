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

    const sum = (color + animal + food + climate + literature)

    if (sum >= 5 && sum <= 7 ) {
      $("#name-return").text(firstName);
      $("#ruby").fadeIn(500);
    } else if (sum > 7 && sum <= 9 ) {
      $("#name-return").text(firstName);
      $("#csharp").fadeIn(500);
    } else if (sum > 9 && sum <= 11 ) {
      $("#name-return").text(firstName);
      $("#javascript").fadeIn(500);
    } else if (sum > 11 && sum <= 13 ) {
      $("#name-return").text(firstName);
      $("#go").fadeIn(500);
    } else if (sum > 13 && sum <= 15 ) {
      $("#name-return").text(firstName);
      $("python").fadeIn(500);
    } else if (sum > 15 && sum <= 17 ) {
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

});