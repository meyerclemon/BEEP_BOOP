//Back/Business Interface

function userNum(userInput) {
  return userInput;
};


//Front/User Interface
$(document).ready(function() {
  $("form#formBeep").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userBeep").val());
    var result = userNum(userInput);

    $("#result").text(userInput);
  });
});
