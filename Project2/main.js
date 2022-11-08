import anime from 'animejs';

var svg = document.querySelector('#svg-map');
console.log(svg);

function displayName(name) {
    document.getElementById('country-name').innerText = name;
}

var canada = document.getElementById("Canada");
var greenland = document.getElementById("greenland");
var iceland = document.getElementById("iceland");
var europeAsia = document.getElementById("europe");
var africa = document.getElementById("africa-2");
var australia = document.getElementById("australia-2");
var mexico = document.getElementById("mexico-2");
var unitedStates = document.getElementById("northamerica");
var southAmerica = document.getElementById("southamerica-2");

canada.addEventListener('mouseover', () => {
    displayName('Canada');
})

greenland.addEventListener('mouseover', ()=> {
    displayName('Greenland');
});

iceland.addEventListener('mouseover', ()=> {
    displayName('Iceland');
});

europeAsia.addEventListener('mouseover', ()=> {
    displayName('Europe & Asia');
});

africa.addEventListener('mouseover', ()=> {
    displayName('Africa');
});

australia.addEventListener('mouseover', ()=> {
    displayName('Australia');
});

mexico.addEventListener('mouseover', ()=> {
    displayName('Mexico');
});

unitedStates.addEventListener('mouseover', ()=> {
    displayName('United States');
});

southAmerica.addEventListener('mouseover', ()=> {
    displayName('South America');
});
