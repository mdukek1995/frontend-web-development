import anime from 'animejs'

var total = 30;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
function R(min,max) {return min+Math.random()*(max-min)};

window.addEventListener('load', (event) => {
   for (i=0; i<total; i++){ 
      var dotEl = document.createElement('div');

      dotEl.classList.add('dot');
      container.appendChild(dotEl);
      anime ({
         targets: [dotEl],
         translateX: R(0, w) + `px`,
      })
      falling(i);

   };

   function falling(){  
      anime({
         targets: [dotEl],
         translateX: R(0, w) + `px`,
         translateY: [R(0,h)] + `px`,
         rotate: [R(0,180)] + `deg`,
         duration: 1000,
         easing: "linear",
         loop: true,
         delay: (dot, i) => 1000 * i,
         duration:5000,
      })
   }
})
