$(function() {

  $('.circle').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    } else {
      $(this).addClass("active")
    }

  });
  // let header = $('h1').text()
  // header = header + " " + "jack";
  //
  // $('h1').text(header)
  // $('h1').text("me and u")
  // console.log($('h1').text());
});
