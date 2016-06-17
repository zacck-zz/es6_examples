$(function() {
  //cache the dom
  var $orders = $('#orders');

  //call the ajax
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friends',
    success: function(response){
      $.each(response, function(i, curritem){
        $orders.append('<li>name: '+ curritem.name+', drink: '+curritem.drink +'<li>');
      });
    }
  });
});
