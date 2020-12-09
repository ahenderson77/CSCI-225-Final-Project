var rN = Math.random()
var W = 0;
var L = 0;

function rockClick() {
    if(rN <.34) {
        document.getElementById('result').value="It's a tie!";
        console.log("It's a tie");
    }
    else if(rN <=.67) {
        document.getElementById('result').value="You lose!";
        L = L + 1;
        console.log("You lose!");
    }
    else {
        document.getElementById('result').value="You Win!";
        W=W+1;
        console.log("You Win!");
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