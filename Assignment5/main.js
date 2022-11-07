import anime from 'animejs'

var total = 30;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
function R(min,max) {return min+Math.random()*(max-min)};

for (i=0; i<total; i++){ 
   var dotEl = document.createElement('div');
    dotEl.classList.add('dot');
    container.appendChild(dotEl);
   anime({
    target: dotEl,
    translateX: `${R(0,w)}px`,
    translateY:`${R(-200,-150)}px`,
    translateZ:`${R(-200,200)}px`,
  });
   falling(dotEl);
};
 
function falling(dotEl){  
 animation = anime.timeline ({
    easing: 'easeInOutQuad',
    complete: falling
 })
 animation
   .add ({
    targets: dotEl,
    translateX: `${R(6,15)}px`,
    translateY: 'h+100',
    easing: 'linear',
    delay:-15,
    })

   .add ({
    targets: dotEl,
    translateY: `${R(4,8)}px`,
    translateX:'+=100',
    rotationZ: `${R(0,180)}deg`,
    easing: 'easeInOutSine',
   })

   .add ({
    targets: dotEl,
    translate: `${R(2,8)}px`,
    rotationX: `${R(0,360)}deg`,
    rotationY: `${R(0,360)}deg`,
    easing:'easeInOutSine',
    delay:-5
    });
};
