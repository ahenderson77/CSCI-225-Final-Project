var W = 0;
var L = 0;
var wm = "you win!";
var tm = "It's a tie!";
var lm = "You lose!";

function rockClick() {
    let rN = Math.random()
    if(rN <.34) {
        $('#result').text(tm);
    }
    else if(rN <=.67) {
        $('#result').text(lm);
        L = L + 1;
    }
    else {
        $('#result').text(wm);
        W=W+1;
    }
}

function paperClick() {
    let rN = Math.random()
    if(rN <.34) {
        $('#result').text(wm);
        W=W+1;
    }
    else if(rN <=.67) {
        $('#result').text(tm);
    }
    else {
        $('#result').text(lm);
        L = L + 1;
    }
}

function scissorsClick() {
    let rN = Math.random()
    if(rN <.34) {
        $('#result').text(lm);
        L = L + 1;
    }
    else if(rN <=.67) {
        $('#result').text(wm);
        W=W+1;
    }
    else {
        $('#result').text(tm);
    }
}