var W = 0;
var L = 0;


function rockClick() {
    let rN = Math.random()
    if(rN <.34) {
        document.getElementById("result").innerHTML="It's a tie!";
    }
    else if(rN <=.67) {
        document.getElementById("result").innerHTML="You Lose!";
        L = L + 1;
    }
    else {
        document.getElementById("result").innerHTML="You Win!";
        W=W+1;
    }
}

function paperClick() {
    let rN = Math.random()
    if(rN <.34) {
        document.getElementById("result").innerHTML="You Win!";
        W=W+1;
    }
    else if(rN <=.67) {
        document.getElementById("result").innerHTML="It's a tie!";
    }
    else {
        document.getElementById("result").innerHTML="You Lose!";
        L = L + 1;
    }
}

function scissorsClick() {
    let rN = Math.random()
    if(rN <.34) {
        document.getElementById("result").innerHTML="You Lose!";
        L = L + 1;
    }
    else if(rN <=.67) {
        document.getElementById("result").innerHTML="You Win!";
        W=W+1;
    }
    else {
        document.getElementById("result").innerHTML="It's a tie!";
    }
}