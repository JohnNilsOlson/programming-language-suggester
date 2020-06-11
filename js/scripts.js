$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    $("#hide").show();
    $("#show").hide();
    $("body").scrollTop(0);
    const firstName = $("input#firstname").val();
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
      $("#python").fadeIn(500);
    } else if (sum > 15 && sum <= 17 ) {
      $("#name-return").text(firstName);
      $("#rust").fadeIn(500);
    } else {
      $("#name-return").text(firstName);
      $("#swift").fadeIn(500);
    }
  });  

  $("#next1").click(function() {
    $("#q1").fadeIn(500);
    $("body").scrollTop(300);
  });

  $("#next2").click(function() {
    $("#q2").fadeIn(500);
    $("body").scrollTop(600);
  });

  $("#next3").click(function() {
    $("#q3").fadeIn(500);
    $("body").scrollTop(900);
  });

  $("#next4").click(function() {
    $("#q4").fadeIn(500);
    $("body").scrollTop(1200);
  });

  $("#next5").click(function() {
    $("#q5").fadeIn(500);
    $("body").scrollTop(1500);
  });

  $("#reload").click(function() {
    location.reload(true);
  });
});