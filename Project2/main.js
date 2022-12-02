import anime from 'animejs';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


var svg = document.querySelector('#svg-map');
console.log('svg');

svg.addEventListener("load",function(){

    // get the inner DOM of alpha.svg
    var svgDoc = svg.contentDocument;


    //setup block for chart


    //config block for chart

    var myChart = new Chart(
        document.getElementById('gender'),
       {
            type: 'pie',
            responsive: true,
            data: { 
                labels: ['Men', 'Women', 'Boys', 'Girls'],
                datasets: [{
                    label: '# of Votes',
                    data: [1,1,1,1],
                    backgroundColor: [
                        'rgba(93, 78, 96, 0.4)',
                        'rgba(88, 164, 176, 0.4)',
                        'rgba(12, 124, 89, 0.4)',
                        'rgba(212, 178, 216, 0.4)',
                    ],
                    borderColor: [
                        'rgba(93, 78, 96, 1)',
                        'rgba(88, 164, 176, 1)',
                        'rgba(12, 124, 89, 1)',
                        'rgba(212, 178, 216, 1)',
                    ],
                    hoverOffset: 4,
                }]
            },
        })

    function updateChart(areaArray) {
        console.log(myChart.data.datasets[0].data);
        while(myChart.data.datasets[0].data.length>0) {
            myChart.data.datasets[0].data.pop();
        }
        myChart.update();
        areaArray.forEach(element => {
            myChart.data.datasets[0].data.push(element)
        });
        myChart.update()
    };


    function displayName(name) {
        document.getElementById("country-name").innerText = name
    };

    function caseStatement() {
        document.getElementById("case-statement").innerText = `Cases recorded in 2018: `
    };

    function casesRecorded(number) {
        document.getElementById("case-number").innerHTML = number
    };



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
        displayName('North America');
        caseStatement();
        casesRecorded('9,301');
        var northAmerica = [1196, 5735, 317, 2053];
        updateChart(northAmerica);
    })

    greenland.addEventListener('mouseover', ()=> {
        displayName('North America');
        caseStatement();
        casesRecorded('9,301');
        var northAmerica = [1196, 5735, 317, 2053];
        updateChart(northAmerica);
    });

    iceland.addEventListener('mouseover', ()=> {
        displayName('North America');
        caseStatement();
        casesRecorded('9,301');
        var northAmerica = [1196, 5735, 317, 2053];
        updateChart(northAmerica);
    });

    europeAsia.addEventListener('mouseover', ()=> {
        displayName('Europe & Asia');
        caseStatement();
        casesRecorded('Europe: 13,574 <br> Eastern Europe & Central Asia: 1,576 <br> Asia: 13,616')
        var europeAsia1 = [9934, 12314, 5191, 4962];
        updateChart(europeAsia1);
    });

    africa.addEventListener('mouseover', ()=> {
        displayName('Africa & The Middle East');
        caseStatement();
        casesRecorded('Sub-Sarahan Africa: 4,799 <br> North Africa & The Middle East: 1,887');
        var africaMiddleEast = [1516, 1933, 1498, 1739];
        updateChart(africaMiddleEast);
    });

    australia.addEventListener('mouseover', ()=> {
        displayName('Australia');
        casesRecorded('No data')
    });

    mexico.addEventListener('mouseover', ()=> {
        displayName('North America');
        caseStatement();
        casesRecorded('9,301');
        var northAmerica = [1196, 5735, 317, 2053];
        updateChart(northAmerica);
    });

    unitedStates.addEventListener('mouseover', ()=> {
        displayName('North America');
        caseStatement();
        casesRecorded('9,301');
        var northAmerica = [1196, 5735, 317, 2053];
        updateChart(northAmerica);
        });

    southAmerica.addEventListener('mouseover', ()=> {
        displayName('South America');
        caseStatement();
        casesRecorded('3,421');
        var southAmerica = [850,2358,41,172];
        updateChart(southAmerica);
    })
})