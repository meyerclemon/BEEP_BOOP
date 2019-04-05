//Back/Business Interface
var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop.", "Beep."];
var userInput = $("input#formBeep").val();
var str = userInput.toString();



//Front/User Interface
$(document).ready(function() {
  $("form#formBeep").submit(function(event) {
    event.preventDefault();

    $("#result").text();

  });
});
