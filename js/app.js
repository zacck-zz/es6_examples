$(function() {
  //functionality to show and hide elements
  $('#panel1').hide(300).show(1000);

  $('#panel2').slideUp(1000).slideDown(1000);

  $('#panel3').toggle(1000).toggle(2000);

  //editting the css of an item from js
  $('#panel4').css({
    color:'red',
    fontWeight: 'bold'
  });


});
