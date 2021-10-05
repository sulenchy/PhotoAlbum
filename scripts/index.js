/**
 * handles the typewriter styling for the family description
 */
let counter = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos nemo similique magnam voluptatem nisi vero nesciunt illo fuga possimus ex, mollitia minus sunt eligendi quae, recusandae maiores id perspiciatis!'; /* The text */
const speed = 50;


function typeWriter() {
    if (counter < txt.length) {
        document.getElementById("desc").innerHTML += txt.charAt(counter);
        counter++;
    }
    setTimeout(typeWriter, speed);
}


/**
 * handle the sticky nature of the family name
 */
const navbar = document.getElementById("family-name");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", typeWriter());
document.addEventListener("scroll", myFunction)