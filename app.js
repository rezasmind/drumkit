let fKey = document.getElementById("f-key");

let gKey = document.getElementById("g-key");

let hKey = document.getElementById("h-key");

let jKey = document.getElementById("j-key");

let kKey = document.getElementById("k-key");

fKey.addEventListener("click", function() {
    sound("f");
    animation("f");
})

gKey.addEventListener("click", function() {
    sound("g");
    animation("g");
  })

  hKey.addEventListener("click", function() {
    sound("h");
    animation("h");
  })

  jKey.addEventListener("click", function() {
    sound("j");
    animation("j");
  })

  kKey.addEventListener("click", function() {
    sound("k");
    animation("k");
  })

let animation = (key) => {
    let button = document.querySelector(`#${key}-key`)

    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove("pressed");
    }, 250)
}

let sound = (key) => {
    switch(key) {
        case "f":
            let sound1 = new Audio("./music/1.wav");
            sound1.play();
            break;
        case "g":
            let sound2 = new Audio("./music/2.wav");
            sound2.play();
            break;
        case "h":
            let sound3 = new Audio("./music/3.wav");
            sound3.play();
            break;
        case "j":
            let sound4 = new Audio("./music/4.wav");
            sound4.play();
            break;
        case "k":
            let sound5 = new Audio("./music/5.wav");
            sound5.play();
            break;
    }
}

document.addEventListener("keypress",(event) => {
    sound(event.key);
    animation(event.key);
    console.log(event.key)
})