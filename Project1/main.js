
let maleOrca = document.getElementById('male-orca');
let femaleOrca = document.getElementById('female-orca');
let fish = document.getElementById('salmon');
let cloudOne = document.getElementById('cloud-one');
let cloudTwo = document.getElementById('cloud-two');
let cloudThree = document.getElementById('cloud-three');
let sun = document.getElementById('sun');
let h1 = document.querySelector('h1');
let h2Title = document.getElementById('title');
let bubbles = document.getElementById('bubbles');
let blubber = document.getElementById('blubber');

const whaleDiv = document.getElementById('whales');
const fishDiv = document.getElementById('fish');

window.addEventListener('scroll', (e) => {
  /*find scroll measurement*/
  let totalScroll = window.scrollY;

  /*position where divs begin*/
  let whalePosition = whaleDiv.offsetTop;
  let fishPosition = fishDiv.offsetTop;

  /*start scroll measurement where div begins*/
  let distanceWhale = totalScroll-whalePosition;
  let distanceSalmon = totalScroll-fishPosition;

  /*calculations for movement from start point based on scroll*/
  let femaleOrcaX = 500 + (-distanceWhale*.6);
  let maleOrcaX = 500 + (-distanceWhale*.4);
  let cloudOneY = 100-(totalScroll*0.5);
  let cloudTwoY = 150-(totalScroll*0.7);
  let cloudThreeY = 10-(totalScroll*2);
  let cloudOneX = 0+(totalScroll*0.8);
  let cloudTwoX = 500+(totalScroll*1);
  let cloudThreeX = 700+(totalScroll*0.5);
  let sunY = 20+(totalScroll*1.3);
  let titleOpacity = 1 - (totalScroll*0.004);
  let bubbleY = 0 - (totalScroll*0.2);
  let blubberOpacity = 0 + (distanceSalmon*0.00065);

  /*call transformations*/
  femaleOrca.style.transform = `translateX(${femaleOrcaX}px)`;
  maleOrca.style.transform = `translateX(${maleOrcaX}px)`;
  cloudOne.style.transform = `translate(${cloudOneX}px, ${cloudOneY}px)`;
  cloudTwo.style.transform = `translate(${cloudTwoX}px, ${cloudTwoY}px)`;
  cloudThree.style.transform = `translate(${cloudThreeX}px,${cloudThreeY}px)`; 
  sun.style.transform = `translate(0px, ${sunY}px)`;
  h1.style.top = totalScroll*1.3 + 'px';
  h1.style.opacity = titleOpacity;
  h2Title.style.top = totalScroll*1.3 + 'px';
  h2Title.style.opacity = titleOpacity;
  bubbles.style.top = bubbleY + 'px';  
  blubber.style.opacity = blubberOpacity;
});

let scrollButton = document.getElementById('scroll');

scrollButton.addEventListener('click', (e) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})