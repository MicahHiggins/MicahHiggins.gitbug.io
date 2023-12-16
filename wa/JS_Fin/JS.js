const Die = document.querySelector('.RD');
const Ent = document.querySelector('.E');
const Clr = document.querySelector('.C');
const Fbox = document.querySelector('.box');
const Sub = document.querySelector('.S');
let div = document.querySelector("h2");
let Joe = document.querySelector("h3");
const loaderContainer = document.querySelector('.loader-container');
let IMG = document.getElementById("img")


Die.addEventListener('click', result);
Ent.addEventListener('click', add);
Clr.addEventListener('click', clear);
Sub.addEventListener('click', submit);

let NumString = ""
let ENTER = false;
loaderContainer.style.display = 'none';

const displayLoading = () => {
    loaderContainer.style.display = 'block';
};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
};

function result() {
    console.log(IMG.src);
    IMG.src = ""
    //div.textContent = ""
    displayLoading();
    window.setTimeout(function () {
        hideLoading();
        RanNum = Math.floor(Math.random()*10);
    RanNum2 = Math.floor(Math.random()*10);
    ENTER = false;
    if ((Fbox.style.flexDirection === "row-reverse") && (RanNum2 > 2)) {
        Fbox.style.flexDirection = "row";
    }
    else {
        Fbox.style.flexDirection = "row-reverse";
    }
    

    if (RanNum === 1) {
        IMG.src = "D1.jpg"
    }
    if (RanNum === 2) {
        IMG.src = "D2.jpg"
    }
    if (RanNum === 3) {
        IMG.src = "D3.jpg"
    }
    if (RanNum === 4) {
        IMG.src = "D4.jpg"
    }
    if (RanNum === 5) {
        IMG.src = "D5.jpg"
    }
    if (RanNum === 6) {
        IMG.src = "D6.jpg"
    }
    if (RanNum === 7) {
        IMG.src = "D7.jpg"
    }
    if (RanNum === 8) {
        IMG.src = "D8.jpg"
    }
    if (RanNum === 9) {
        IMG.src = "D9.jpg"
    }
    if (RanNum === 0) {
        IMG.src = "D0.jpg"
    }
    }, 2000);
    
}
function add() {
    
    if (ENTER === true) {
        alert("Reroll if you want to submit "+ RanNum + " again")
        return;
    }
    ENTER = true;
    Joe.append(RanNum);
    if (RanNum === 1) {
        NumString += "1";
    }
    if (RanNum === 2) {
        NumString += "2";
    }
    if (RanNum === 3) {
        NumString += "3";
    }
    if (RanNum === 4) {
        NumString += "4";
    }
    if (RanNum === 5) {
        NumString += "5";
    }
    if (RanNum === 6) {
        NumString += "6";
    }
    if (RanNum === 7) {
        NumString += "7";
    }
    if (RanNum === 8) {
        NumString += "8";
    }
    if (RanNum === 9) {
        NumString += "9";
    }
    if (RanNum === 0) {
        NumString += "0";
    }
    if (RanNum === "") {
        ENTER = false;
    }
    
    if (NumString.length >= 10) {
        alert("Thou Numbah is " + NumString);
        Joe.textContent = "Thou Numbah: ";
        NumString = ""
        IMG.src = "DQ.jpg"
        RanNum = "";
        ENTER = false;
    }
}
function clear() {
    Joe.textContent = "Thou Numbah: ";
    NumString = ""
    IMG.src = "DQ.jpg"
    RanNum = "";
    ENTER = false;
}
function submit() {
    alert("Thou Numbah is " + NumString)
    Joe.textContent = "Thou Numbuh: ";
    NumString = ""
    IMG.src = "DQ.jpg"
    RanNum = "";
    ENTER = false;
}
