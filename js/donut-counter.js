$(function(){ 
  var donutCounter = new DonutCounter();
});

function DonutCounter() {
  var guests = 0;
  var donuts = 0;

//add 
  $('#donuts button').first().click(function() {
  $('#donuts h3 span').text(donuts += 1);
  });

  $('#guests button').first().click(function() {
  $('#guests h3 span').text(guests += 1);
  });

//subtract
  $('#donuts button').last().click(function() {
    if (donuts != 0) {
      $('#donuts h3 span').text(donuts -= 1);
    } else {
      $('#donuts h3 span').text(0)
    }
  });

  $('#guests button').last().click(function() { 
    if (guests != 0) {
      $('#guests h3 span').text(guests -= 1);
    } else {
      $('#guests h3 span').text(0)
    }
  });

  $('#check button').click(function() {
    if (guests == 0) {
      $('#status').text('Invite someone you jerk!')
    } else if ((donuts - guests) >= 4) {
      $('#status').text('ARE YOU TRYING TO KILL US ALL!?')
    } else if (guests > donuts) {
      $('#status').text('Guests are sad :(')
    } else {
      $('#status').text('Guests are having a blast!')
    }


  })

  
}

