var rN = Math.floor((Math.random()*3)+1);
var W = 0;
var L = 0;

function rockClick() {
    if(rN == 1) {
        document.getElementById('result').value="It's a tie!";
    }
    else if(rN == 2) {
        document.getElementById('result').value="You lose!";
        L = L + 1;
    }
    else {
        document.getElementById('result').value="You Win!";
        W=W+1;
    }
}

function paperClick() {
    if(rN == 1) {

    }
    else if(rN == 2) {

    }
    else {
        
    }
}

function scissorsClick() {
    if(rN == 1) {

    }
    else if(rN == 2) {

    }
    else {
        
    }
}