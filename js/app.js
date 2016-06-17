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

  //Event Binding
  $('#btnevent1').html('my button 1');

  $('#panelevent1').html('mypanel <strong> my bold</strong>');

  //event from one element to another
  $('#btnevent1').on('mouseover', function(){
    $('#panelevent1').fadeOut();
  });

  $('#btnevent3').on('mouseover', function(){
    $('#panelevent3').fadeOut();
  });
  $('#btnevent4').on('mouseover', function(){
    $('#panelevent4').fadeOut();
  });

  //event from one element to another
  $('#btnevent2').on('click', function(){
    $('#panelevent2 .panel-content').html('my new panel content');
  });
  $('#btnevent1').on('click', function(){
    $('#panelevent1').fadeIn();
  });
  $('#btnevent3').on('click', function(){
    $('#panelevent3').fadeIn();
  });
  $('#btnevent4').on('click', function(){
    $('#panelevent4').fadeIn();
  });




  //event on same element
  $('#panelevent1').on('click', function(){
    $('#panelevent1').slideToggle(200);
  });



});
