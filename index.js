//Clicking detection

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  btnAnimations(buttonInnerHTML);
}

//Keypress detection

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  btnAnimations(event.key);
})


function makeSound(key) {
  switch (key) {

    case "w":
      var audiow = new Audio("./sounds/crash.mp3");
      audiow.play();
      break;

    case "a":
      var audioa = new Audio("./sounds/kick-bass.mp3");
      audioa.play();
      break;

    case "s":
      var audios = new Audio("./sounds/snare.mp3");
      audios.play();
      break;

    case "d":
      var audiod = new Audio("./sounds/tom-1.mp3");
      audiod.play();
      break;

    case "j":
      var audioj = new Audio("./sounds/tom-2.mp3");
      audioj.play();
      break;

    case "k":
      var audiok = new Audio("./sounds/tom-3.mp3");
      audiok.play();
      break;

    case "l":
      var audiol = new Audio("./sounds/tom-4.mp3");
      audiol.play();
      break;
  }
}

//Button Animations
function btnAnimations(keyClass){

  var BtnClas=document.querySelector("."+keyClass);
  BtnClas.classList.add("pressed");

  setTimeout(function(){
    BtnClas.classList.remove("pressed");
  },200);
}



// var audio=new Audio("./sounds/crash.mp3");
// audio.play();
