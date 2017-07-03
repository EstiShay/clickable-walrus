// $(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   jQuery("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   jQuery("img").click(function() {
//     alert("This is an image.");
//   });
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").fadeIn();
    });
  });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
});
