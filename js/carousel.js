$(function(){

  var slideWidth = $('.slide').width(),
      slideCount = $('.slide').size(),
      pos = 0;

  $('#slide_tray').width(slideWidth * slideCount);

  $('#prev, #next').hide();

  $('#carousel').hover(function (){
      $('#prev, #next').show();

  }, function() {
      $('#prev, #next').hide();

  });


  $('#next').click(function(){
    if (pos < slideCount - 1) {
      pos += 1; //increments position by 1 (800px x 1)
    } else {
      pos = 0;
    }
      var slideAmount = slideWidth * pos;
      $('#slide_tray').animate({'right': slideAmount},400);  
    });


  $('#prev').click(function(){
    if (pos > 0) {
        pos-=1;
    } else {
      pos = slideCount - 1;
    }

      slideAmount = slideWidth * pos;
    $('#slide_tray').animate({'right': slideAmount},400);
  });


});