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
});