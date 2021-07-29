var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();

// code container height calculated
var codeContainerHeight = windowHeight - menuBarHeight;
$(".codeContainer").height(codeContainerHeight + "px");

// Toggling between HTML, CSS, JS and Output
$(".toggle").click(function(event) {
  // toggle items in menuBar
  $(this).toggleClass("selected");

  // get html of list item (html, css, js or result) in lowercase
  var activeDiv = $(this).html().toLowerCase();

  // combine it to one of the cor container id's (htmlContainer, cssContainer, etc.)
  // toggle show or hide
  $("#" + activeDiv + "Container").toggle();

  // count the container id's which are not hidden (display != none)
  var showingDivs = $(".codeContainer").filter(function() {
    return ($(this).css("display") != "none");
  }).length;

  // 100% width divided by active divs
  var width = 100 / showingDivs;

  // set the width
  $(".codeContainer").width(width + "%");

});

$("#runButton").click(function(event) {
  // find html tag in iframe and set this to html("text")
  $("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

  // run javascript code in iframe
  document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
});