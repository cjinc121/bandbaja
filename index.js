for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  var k=this.innerHTML;
  if(k==="w")
  {var audio=new Audio("sounds/tom-1.mp3");
  audio.play();}
  else if (k==="a") {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if (k==="s") {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if (k==="d") {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if (k==="j") {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if (k==="k") {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if (k==="l") {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
  }
});

}
document.addEventListener("keydown",function(event){
  var k=event.key;
  if(k==="w")
  {var audio=new Audio("sounds/tom-1.mp3");
  audio.play();}
  else if (k==="a") {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if (k==="s") {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if (k==="d") {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if (k==="j") {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if (k==="k") {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if (k==="l") {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
  }
});
