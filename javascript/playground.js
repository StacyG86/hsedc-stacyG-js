$(function() {

  function randomColor() {
    let colors = ['lightblue', 'pink', 'lightgreen', 'grey', 'purple']

    return colors[Math.floor(Math.random() * 5)]
  }

  $('.circle').each(function(i) {
    $(this).click(function(){
      $(this).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
    });
  });
  // $('.circle').each(function(i) {
  //   $(this).click(function() {
  //     $(this).css('background-color', colors[i])
  //   })


  // $('.circle').click(function() {
  //   if ($(this).hasClass("active")) {
  //     $(this).removeClass("active")
  //   } else {
  //     $(this).addClass("active")
  //   }


  // let header = $('h1').text()
  // header = header + " " + "jack";
  //
  // $('h1').text(header)
  // $('h1').text("me and u")
  // console.log($('h1').text());
  });
