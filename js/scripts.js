//Back/Business Interface

function doTheThing( specialNum ) {

  let range = [];
  let boopArray = [];

  for(i = 0; i <= specialNum; i++)
    range.push(i);

    for(i = 0; i < range.length; i++) {
      let arg = range[i];
      let result = beepBoop(arg);
      boopArray.push( result );
    }

  return boopArray; // "I did the thing"
}

// input: num is the thing we're searching throug
// checkfor is the thing we're searching for
// output is TRUE if checkfor is inside num
function contains(num, checkFor) {
return false;

}

  function beepBoop(beeper) {
    var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.","Boop.","Beep."];

    if( contains(beeper, 3) ) {
      return theReplacements[0];
    }
    if( contains(beeper, 2) ) {
      return theReplacements[1];
    }

    let beepStr = beeper.toString();
    return beepStr;
  }

//       else return unchanged
//
//       return replacementArray



//Front/User Interface
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
      let myNum = parseInt($("input#beepboop").val());
      let myResult = doTheThing( myNum );
    $("#resultList").text(  myResult );
})
});
