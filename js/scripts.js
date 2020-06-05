$(document).ready(function() {
  $("#next1").click(function(event) {
    event.preventDefault();
    const firstName = $("input#firstname").val();
    const lastName = $("input#lastname").val();
    $("#q1").fadeIn(500);
    console.log(firstName);
    console.log(lastName);
  });

  $("#next2").click(function(event) {
    event.preventDefault();
    const color = $("select#color").val();
    $("#q2").fadeIn(500);
    console.log(color);
  });

  $("#next3").click(function(event) {
    event.preventDefault();
    const animal = $("select#animal").val();
    $("#q3").fadeIn(500);
    console.log(animal);
  });

  $("#next4").click(function(event) {
    event.preventDefault();
    const food = $("select#food").val();
    $("#q4").fadeIn(500);
    console.log(food);
  });

  $("#next5").click(function(event) {
    event.preventDefault();
    const climate = $("select#climate").val();
    $("#q5").fadeIn(500);
    console.log(climate);
  });

  $("#submit").submit(function(event) {
    event.preventDefault();
    const literature = $("select#literature").val();
    console.log(literature);
  });
});