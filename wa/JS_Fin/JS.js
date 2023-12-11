const Die = document.querySelector('.RD');
const Ent = document.querySelector('.E');
const Clr = document.querySelector('.C');
const Fbox = document.querySelector('.box');
let div = document.querySelector("h2");
let Joe = document.querySelector("h3");


Die.addEventListener('click', result);
Ent.addEventListener('click', add);
Clr.addEventListener('click', clear);

function result() {
    RanNum = Math.floor(Math.random()*10);
    console.log(RanNum);
    if (Fbox.style.flexDirection === "row-reverse") {
        Fbox.style.flexDirection = "row";
    }
    else {
        Fbox.style.flexDirection = "row-reverse";
    }
    div.textContent = ""
    if (RanNum === 1) {
        div.append("1");
    }
    if (RanNum === 2) {
        div.append("2");
    }
    if (RanNum === 3) {
        div.append("3");
    }
    if (RanNum === 4) {
        div.append("4");
    }
    if (RanNum === 5) {
        div.append("5");
    }
    if (RanNum === 6) {
        div.append("6");
    }
    if (RanNum === 7) {
        div.append("7");
    }
    if (RanNum === 8) {
        div.append("8");
    }
    if (RanNum === 9) {
        div.append("9");
    }
    if (RanNum === 0) {
        div.append("0");
    }
}
function add() {
    Joe.append(RanNum);
}
function clear() {
    Joe.textContent = "Your Numbah: ";
}
