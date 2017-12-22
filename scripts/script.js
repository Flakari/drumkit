const aButton = document.querySelector("#button-a");
const sButton = document.querySelector("#button-s");
const dButton = document.querySelector("#button-d");
const fButton = document.querySelector("#button-f");

const KEYCODE_A = 65;
const KEYCODE_S = 83;
const KEYCODE_D = 68;
const KEYCODE_F = 70;

document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == KEYCODE_A) {
        aButton.classList.add("highlighted");
    } else if (e.keyCode == KEYCODE_S) {
        sButton.classList.add("highlighted");
    } else if (e.keyCode == KEYCODE_D) {
        dButton.classList.add("highlighted");
    } else if (e.keyCode == KEYCODE_F) {
        fButton.classList.add("highlighted");
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
    }
});

/*document.body.addEventListener("keydown", function(e) {
    if (e.keyCode == KEYCODE_S) {
        sButton.classList.add("highlighted");
    }
});*/

/*document.body.addEventListener("keyup", function(e) {
    if (e.keyCode == KEYCODE_S) {
        sButton.classList.remove("highlighted");
    }
});*/
