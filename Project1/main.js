var scale = 1,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  zoom = document.getElementById("zoom");

function setTransform() {
  zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}



zoom.addEventListener('wheel', (e) => {
  //e.preventDefault();
  var xs = (e.clientX - pointX) / scale,
    ys = (e.clientY - pointY) / scale,
    delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
  if (delta > 0 && scale <= 4) {
    (scale *= 1.2);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    console.log(scale);
    setTransform();
  } else {
    //e.stopPropagation();
    (deltaY = 4);
  }
  
});

var image = document.getElementsByClassName('parallax-image');
new simpleParallax(image);