 $(document).ready(function() {
     
     var color = 'white'
     var colors = 'white green red blue yellow'
     
  $('.box').on('click', function() {       //When clicking on any box, this adds a 'color' class while removing any color it may already have
    $(this).removeClass(colors);
    $(this).addClass(color);               
  })
    
  $('#red').on('click', function() {       //When the 'red' box is clicked on, the 'color' class becomes red
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

  $('.box').on('dblclick', function() {   
    $(this).removeClass(colors);
  })
  $('#reset').on('click', function() {    //Removes all colors specified in the 'colors' variable above
    $('.box').removeClass(colors);
  })
})