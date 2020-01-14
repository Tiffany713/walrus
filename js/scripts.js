$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".shoeClick").click(function() {
    $("#shoe-showing").fadeToggle();
    $("#shoe-hidden").fadeToggle();
  });
});