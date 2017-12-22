const test = document.querySelector("#test");

document.body.addEventListener("keydown", function(e) {
    if(e.keyCode == 65) {
        test.classList.add("highlighted");
    }
});

document.body.addEventListener("keyup", function(e) {
    if(e.keyCode == 65) {
        test.classList.remove("highlighted");
    }
});
