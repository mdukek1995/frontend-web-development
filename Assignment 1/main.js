const sunImg = document.getElementById("sun");

function changeToNight() {
    document.getElementById('sun').style.display = 'none';
    document.body.style.backgroundColor = "#000000" ;
    document.getElementById('moon').hidden = false;
    document.getElementById('moon').style.display = 'block';
};

sunImg.addEventListener('click', () => {
    changeToNight();
});

const moonImg = document.getElementById("moon");

function changeToDay() {
    document.getElementById('moon').style.display = 'none';
    document.body.style.backgroundColor = "#BFD7EA" ;
    sunImg.style.display = 'block' ;
};

moonImg.addEventListener('click', () => {
    changeToDay();
});

function addClouds() {
    var img = document.createElement("img");
    img.src = "clouds.PNG";
    var src = document.getElementById("day-night")
    src.appendChild(img);
}

window.addEventListener('keyup', () => {
    addClouds();
})
