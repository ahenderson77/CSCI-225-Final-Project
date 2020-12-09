var W = 0;
var L = 0;


function rockClick() {
    let rN = Math.random()
    if(rN <.34) {
        let str = document.getElementById("result").innerHTML; 
        let res = str.replace("Choose your weapon!", "It's a tie!");
        document.getElementById("demo").innerHTML = res;
    }
    else if(rN <=.67) {
        let str = document.getElementById("result").innerHTML; 
        let res = str.replace("Choose your weapon!", "You Lose!");
        document.getElementById("demo").innerHTML = res;
        L = L + 1;
    }
    else {
        let str = document.getElementById("result").innerHTML; 
        let res = str.replace("Choose your weapon!", "You Win!");
        document.getElementById("demo").innerHTML = res;
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