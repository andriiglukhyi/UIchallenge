$(document).ready(function() {
    // $('.up').css("background-color", "black");
    // $('.down').css("background-color", "black");
    $( ".floor" ).on('click', function() {
      $(this).css('background-color', 'red');
      let levels = [];    
      function down (beg, end) {
        $('.down').css("background-color", "red");
        $('#number').text(end)
      }    
      function up (beg, end) {
        $('.up').css("background-color", "green");
        $('#number').text(beg)
        
        let diference = beg - end;
      }
      
      var targetFlor = parseInt(event.data);
      var currentFlor =  parseInt($('#number').text());
      var travelTime = parseInt(targetElevator) - parseInt(button);
      if (targetFlor > currentFlor){
        up(targetFlor, currentFlor);
        
      }
      if (targetFlor < currentFlor){
        down(targetFlor, currentFlor);
      }
      
  });  
    
  });