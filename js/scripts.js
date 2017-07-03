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
    $("img").show();
    });
  });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});
