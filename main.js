const projectOne = document.getElementById("project-one");
const projectTwo = document.getElementById("project-two");
const projectThree = document.getElementById("project-three");

function openLightBoxOne() {
    document.getElementById('Lightbox-one').style.display = 'block';
};

function openLightBoxTwo() {
    document.getElementById('Lightbox-two').style.display = 'block';
};

function openLightBoxThree() {
    document.getElementById('Lightbox-three').style.display = 'block';
};

function closeLightBoxOne() {
    document.getElementById('Lightbox-one').style.display = 'none';
};

function closeLightBoxTwo() {
    document.getElementById('Lightbox-two').style.display = 'none';
};

function closeLightBoxThree() {
    document.getElementById('Lightbox-three').style.display = 'none';
};


projectOne.addEventListener('mouseenter', () => {
    openLightBoxOne();
});
  
projectTwo.addEventListener('mouseenter', () => {
    openLightBoxTwo();
});
  
projectThree.addEventListener('mouseenter', () => {
    openLightBoxThree();
});
  