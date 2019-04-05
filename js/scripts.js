//Back/Business Interface

var beepBoop = function(beepboop) {
  return false;
};

//Front/User Interface
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var beepboop = parseInt($("input#beep-boop").val());
    var result = beepBoop(beepboop);
    $("#result").text(result);
  });
});
