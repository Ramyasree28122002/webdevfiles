// function handleClick()
// {
//     alert("i got clicked");
// }
// document.querySelectorAll("button")[0].addEventListener("click",handleClick);

// Dectecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        // alert("I got clicked");
        this.style.color="white";
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    }); 
    // Detecting keyboard press
    document.addEventListener("keypress",function(event)
    {
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key)
    {
        switch (key){
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();  
                break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play(); 
                break;
            case "f":
                var flute = new Audio("sounds/flute.mp3");
                flute.play();
                break;
            default:
                console.log(buttoninnerHTML);     
           }
    }
    function buttonAnimation(currentKey)
    {
        var activebutton = document.querySelector("."+currentKey);
        activebutton.classList.add("pressed");
        setTimeout(function()
        {
            activebutton.classList.remove("pressed");
        },100);
    }
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();