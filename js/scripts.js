//Front/User Interface
$(document).ready(function() {
  $("form#formBeep").submit(function(event) {
    event.preventDefault();
    var myNum = parseInt($("input#userBeep").val());
    $("#result").text(result);

  });
});

//Back/Business Interface
var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop.", "Beep."];
console.log(myNum);
