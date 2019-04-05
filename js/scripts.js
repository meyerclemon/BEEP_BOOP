//Back/Business Interface

var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.","Boop.","Beep."];
var dave = theReplacements[0];
var boop = theReplacements[1];
var beep = theReplacements[2];

while(num > 0) {
var foo = new Array(num);
for(var i = 0; i < num.length; i++){
  document.write((i + 1) + foo.length + '<br/>');
}
};
console.log();
//Front/User Interface
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var myNum = parseInt($("input#beepboop").val());
    $("#result").text(result);

  });
});
