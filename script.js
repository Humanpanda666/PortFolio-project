const preloader = document.querySelector(".preloader");
const preloaderId = document.getElementById("preloaderId");
const typewriter = document.querySelector(".typewriter");
/*
const hideTypewriter = setTimeout(() => {
  typewriter.style.opacity = 1;
}, 3000);
*/
const fadeEffectNew = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffectNew);
    preloaderId.remove();
  }
}, 50);

var i = 0;
var txt = "I'am a develeper";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (i >= txt.length) {
    let txtsliced = txt.slice(0, txt.length - 1);
    i--;
    document.getElementById("demo").innerHTML = txtsliced;
    setTimeout(typeWriter, speed);
  }
}
let txtAdd = "a web developer";
let txtLength = txtAdd.length;
function typeWriter() {
  i = 0;
  x = 1;
  adding();

  function adding() {
    if (i < txtLength) {
      document.getElementById("demo").innerHTML += txtAdd.charAt(i);
      i++;
      setTimeout(adding, speed);
    } else if ((i = txtLength)) {
      console.log("The typewriter finished. Initiating removing sequence");
      setTimeout(() => {
        removing();
      }, "2000");
    }
  }

  function removing() {
    if (x > txtLength) {
      x = 1;
    }
    if (i > 0) {
      let txtsliced = txtAdd.slice(0, txtAdd.length - x);
      i--;
      x++;
      document.getElementById("demo").innerHTML = txtsliced;
      setTimeout(removing, speed);
    } else if ((i = 1)) {
      console.log("I has reached 1, what now");
      /*document.getElementById("demo").innerHTML = "I";
      console.log(`I is right now ${i}`);
      */
      i = 0;
      adding();
    }
  }
}

console.log(txt.length);
/*window.addEventListener("load", fadeEffectNew); */
/*window.addEventListener("load", hideTypewriter);*/

/* SCROLL */

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/* TEST H1 */

var y = 0;
var txtNew = "My name is Adam Murgáč."; /* The text */
var speedNew = 50; /* The speed/duration of the effect in milliseconds */
console.log(txtNew.length);

function typeWriterh1() {
  if (y < txtNew.length) {
    document.getElementById("h1type").innerHTML += txtNew.charAt(y);
    y++;
    setTimeout(typeWriterh1, speedNew);
  }
}
window.addEventListener("load", typeWriterh1());
window.addEventListener("load", typeWriter());
