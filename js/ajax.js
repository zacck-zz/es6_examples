$(function() {
  //cache the dom
  var $orders = $('#orders');

  var $name = $('#name');
  var $drink = $('#drink');

  //refactor
  function addOrder(curritem)
  {
    $orders.append('<li>name: '+ curritem.name+', drink: '+curritem.drink +'</li>');

  }


  //call the ajax to get all existing orders
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/learncode/friends',
    success: function(response){
      $.each(response, function(i, curritem){
        addOrder(curritem);
      });
    },
    error: function() {
      alert('error loading orders');
    }
  });


  //use this to post to the database
  $('#add-order').on('click', function(){
    //collect data to post
    var postItem = {
      name: $name.val(),
      drink: $drink.val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://rest.learncode.academy/api/learncode/friends',
      data: postItem,
      success: function(newOrder){
        addOrder(newOrder);
      },
      error: function(){
        alert('error adding current order');
      }
    });


  });

});
