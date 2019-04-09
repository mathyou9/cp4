var exit = document.getElementById("exit");
var signin = document.getElementById("backgroundTint");
var signinButton = document.getElementById("signinButton");
var signinblank = document.getElementById("signinblank");

exit.onmouseenter = function (){animationfunction()};
exit.onmouseleave = function (){animationdone()};
exit.onclick = function (){exitlogin()};
signinButton.onclick = function (){loginScreen()};
signinblank.onclick = function(){exitlogin()};

function animationfunction(){
  anime({
    targets: '.exit',
    strokeDashoffset: [anime.setDashoffset, 0],
    keyframes: [
      {scale: 1.25},
      {rotate: 90}
    ],
    easing: 'easeInOutSine',
    duration: 250,
  });
}
function animationdone(){
  anime({
    targets: '.exit',
    strokeDashoffset: [anime.setDashoffset, 0],
    keyframes: [
      {scale: 1},
      {rotate: 0}
    ],
    easing: 'easeInOutSine',
    duration: 250,
  });
}
function exitlogin(){
  signin.classList.add("exited");
  signin.classList.remove("back");
}
function loginScreen(){
  signin.classList.remove("exited");
  signin.classList.add("back");
}
// anime({
//   targets: '.line-drawing-demo .lines path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1500,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true
// });
