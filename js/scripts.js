//Back/Business Interface
function doTheThing(myNum) {

    let range = [];
    let boopArray = [];

    for (i = 0; i <= myNum; i++)
        range.push(i);

    for (i = 0; i < range.length; i++) {
        let argh = range[i];
        let result = beepBoop(argh);
        boopArray.push(result);
    }

    return boopArray;
}

// input: num is the thing we're searching throug
// checkfor is the thing we're searching for
// output is TRUE if checkfor is inside num
function contains(num, checkFor) {
  let numStr = num.toString();
  let goFish = checkFor.toString();
  let  = .indexOf();

    // return true;

}

function beepBoop(beeper) {
    var theReplacements = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop.", "Beep."];

    if (contains(beeper, 3)) {
        return theReplacements[0];
    }
    if (contains(beeper, 2)) {
        return theReplacements[1];
    }
    if (contains(beeper, 1)) {
        return theReplacements[2];
    }

    let beepStr = beeper.toString();
    return beepStr;
}



//Front/User Interface
$(document).ready(function() {
    $("form#beepboop").submit(function(event) {
        event.preventDefault();
        let myNum = parseInt($("input#beepboop").val());
        let myResult = doTheThing(myNum);
        $("#resultList").text(myResult);
    })
});
