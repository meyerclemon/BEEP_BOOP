
var newArray = [];
var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.","Boop.","Beep."]

function newBeepBoop(myNum) {
  for (i=0; i <= myNum; i++) {
    if (String(i).includes(3)) {
      newArray.push(theReplacements[0]);
    } else if (String(i).includes(2)) {
        newArray.push(theReplacements[1]);
    } else if (String(i).includes(1)) {
      newArray.push(theReplacements[2]);
    } else {
      newArray.push(i);
    }
  }
  return newArray.join(", ");
}

$(document).ready(function() {
  $('form#beepboop').submit(function(event) {
    event.preventDefault();
    $("#resultList").show();

    var myNum = $('input#beepboop').val();
    var result = newBeepBoop(myNum);
    $('#resultList').text(result);
  });
});
