$(function() {
  //cache the dom
  var $orders = $('#orders');

  var $name = $('#name');
  var $drink = $('#drink');

  //refactor
  function addOrder(curritem)
  {
    $orders.append(Mustache.render(orderTemplate, curritem));

  }

  //crare the template for list item
  var orderTemplate = $('#order-template').html();


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

  //handle the deletion of items
  $orders.delegate('.remove','click', function(){
    //parent
    var $li = $(this).closest('li');
    $.ajax({
      type: 'DELETE',
      url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('data-id'),
      success: function(){
        $(this).remove();
      }
    });
  });

  //cause edit
  $orders.delegate('.edit-order', 'click', function(){
    var $li = $(this).closest('li');
    $li.find('input.name').val($li.find('span.name').html());
    $li.find('input.drink').val($li.find('span.drink').html());
    $li.addClass('edit');
  });

  //cancel edit
  $orders.delegate('.cancel-order', 'click', function(){
    var $li = $(this).closest('li');
    $li.removeClass('edit');
  });

  //save an edit
  $orders.delegate('.save-edit', 'click', function(){
    var $li = $(this).closest('li');
    //create post data
    var order = {
      name: $li.find('input.name').val(),
      drink: $li.find('input.drink').val()
    }

    $.ajax({
      type: 'PUT',
      url: 'http://rest.learncode.academy/api/learncode/friends/' + $li.attr('data-id'),
      data: order,
      success: function(neworder){
        $li.find('span.name').html(order.name);
        $li.find('span.drink').html(order.drink);
        $li.removeClass('edit');
      },
      error: function(){
        alert('error updating order');
      }
    });
  });

});
