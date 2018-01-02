window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.button[data-key="${e.keyCode}"`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("highlighted");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("highlighted");
}

const button = document.querySelectorAll(".button");
button.forEach(button => button.addEventListener('transitionend', removeTransition));

//Old script kept for posterity post refactoring

/*
const aButton = document.querySelector("#button-a");
const sButton = document.querySelector("#button-s");
const dButton = document.querySelector("#button-d");
const fButton = document.querySelector("#button-f");
const gButton = document.querySelector("#button-g");
const hButton = document.querySelector("#button-h");
const jButton = document.querySelector("#button-j");
const kButton = document.querySelector("#button-k");
const lButton = document.querySelector("#button-l");

const KEYCODE_A = 65;
const KEYCODE_S = 83;
const KEYCODE_D = 68;
const KEYCODE_F = 70;
const KEYCODE_G = 71;
const KEYCODE_H = 72;
const KEYCODE_J = 74;
const KEYCODE_K = 75;
const KEYCODE_L = 76;

const CLAP = new Audio("./sounds/clap.wav");
const HIHAT = new Audio("./sounds/hihat.wav");
const KICK = new Audio("./sounds/kick.wav");
const OPENHAT = new Audio("./sounds/openhat.wav");
const BOOM = new Audio("./sounds/boom.wav");
const RIDE = new Audio("./sounds/ride.wav");
const SNARE = new Audio("./sounds/snare.wav");
const TOM = new Audio("./sounds/tom.wav");
const TINK = new Audio("./sounds/tink.wav");

document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == KEYCODE_A) {
        aButton.classList.add("highlighted");
        CLAP.currentTime = 0;
        CLAP.play();
    } else if (e.keyCode == KEYCODE_S) {
        sButton.classList.add("highlighted");
        HIHAT.currentTime = 0;
        HIHAT.play();
    } else if (e.keyCode == KEYCODE_D) {
        dButton.classList.add("highlighted");
        KICK.currentTime = 0;
        KICK.play();
    } else if (e.keyCode == KEYCODE_F) {
        fButton.classList.add("highlighted");
        OPENHAT.currentTime = 0;
        OPENHAT.play();
    } else if (e.keyCode == KEYCODE_G) {
        gButton.classList.add("highlighted");
        BOOM.currentTime = 0;
        BOOM.play();
    } else if (e.keyCode == KEYCODE_H) {
        hButton.classList.add("highlighted");
        RIDE.currentTime = 0;
        RIDE.play();
    } else if (e.keyCode == KEYCODE_J) {
        jButton.classList.add("highlighted");
        SNARE.currentTime = 0;
        SNARE.play();
    } else if (e.keyCode == KEYCODE_K) {
        kButton.classList.add("highlighted");
        TOM.currentTime = 0;
        TOM.play();
    } else if (e.keyCode == KEYCODE_L) {
        lButton.classList.add("highlighted");
        TINK.currentTime = 0;
        TINK.play();
    } 
});

document.body.addEventListener("keyup", function(e) {
    if (e.keyCode == KEYCODE_A) {
        aButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_S) {
        sButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_D) {
        dButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_F) {
        fButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_G) {
        gButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_H) {
        hButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_J) {
        jButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_K) {
        kButton.classList.remove("highlighted");
    } else if (e.keyCode == KEYCODE_L) {
        lButton.classList.remove("highlighted");
    }
});
*/
