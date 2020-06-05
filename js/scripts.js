$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstname").val();
    const lastName = $("input#lastname").val();
    $("#hidden1").fadeIn(500);
    console.log(firstName);
    console.log(lastName);
  });

  $("#color").submit(function(event) {
    event.preventDefault();
    const color = $("#color").val();
    $("hidden2").fadeIn(500);
    console.log(color);
  });
});