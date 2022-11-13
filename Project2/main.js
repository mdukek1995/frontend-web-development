import anime from 'animejs';

var svg = document.querySelector('#svg-map');
console.log('svg');

svg.addEventListener("load",function(){

    // get the inner DOM of alpha.svg
    var svgDoc = svg.contentDocument;

    function displayName(name) {
        document.getElementById("country-name").innerText = name
    }

    function highlight(svgElement) {
        svgElement.setAttribute("stroke","white")
    }


    var canada = svgDoc.getElementById("Canada");
    var greenland = svgDoc.getElementById("Greenland");
    var iceland = svgDoc.getElementById("Iceland");
    var europeAsia = svgDoc.getElementById("Europe");
    var africa = svgDoc.getElementById("Africa-2");
    var australia = svgDoc.getElementById("Australia-2");
    var mexico = svgDoc.getElementById("Mexico-2");
    var unitedStates = svgDoc.getElementById("North_America");
    var southAmerica = svgDoc.getElementById("South_America-2");

    canada.addEventListener('mouseover', () => {
        displayName('Canada');
        highlight(canada)
    })

    greenland.addEventListener('mouseover', ()=> {
        displayName('Greenland');
        highlight(greenland)
    });

    iceland.addEventListener('mouseover', ()=> {
        displayName('Iceland');
        highlight(iceland)
    });

    europeAsia.addEventListener('mouseover', ()=> {
        displayName('Europe & Asia');
        highlight(europeAsia)
    });

    africa.addEventListener('mouseover', ()=> {
        displayName('Africa');
        highlight(africa)
    });

    australia.addEventListener('mouseover', ()=> {
        displayName('Australia');
        highlight(australia)
    });

    mexico.addEventListener('mouseover', ()=> {
        displayName('Mexico');
        highlight(mexico)
    });

    unitedStates.addEventListener('mouseover', ()=> {
        displayName('United States');
        highlight(unitedStates)
    });

    southAmerica.addEventListener('mouseover', ()=> {
        displayName('South America');
        highlight(southAmerica)
    });
})