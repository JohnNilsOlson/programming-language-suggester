$(document).ready(function() {
  $("#name").submit(function(event) {
    const firstName = $("input#firstname").val();
    const lastName = $("input#lastname").val();

    console.log(firstName, lastName);

    event.preventDefault();
  });
});