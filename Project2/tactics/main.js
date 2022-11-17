import anime from 'animejs';
import Letterize from "letterizejs"

const test = new Letterize({
    targets: ".animate-me"
  });

  const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(100, {
      grid: [test.list[0].length, test.list.length],
      from: "center"
    }),
    loop: true
  });

  animation
    .add({
      letterSpacing: "10px"
    })
    .add({
      scale: 1
    })
    .add({
       color: '#000'
    })
    .add({
      letterSpacing: "6px"
    })
    .add({
        scale: 0.5
    })
    .add ({
        color: '#fff'
    })




var svg = document.querySelector('#forms');
svg.addEventListener("load",function(){

    // get the inner DOM of alpha.svg
    var svgDoc = svg.contentDocument;

    

    let centerX = svg.clientHeight / 2;
    let centerY = svg.clientWidth / 2;
    console.log(centerX,centerY)



    function exploitationStatement(description) {
        document.getElementById("exploitation-description").innerText = description
    };

    function exploitationType(name) {
        document.getElementById("exploitation-type").innerText = name
    }



    var soldier = svgDoc.getElementById("soldier");
    var sexual = svgDoc.getElementById("sexual");
    var marriage = svgDoc.getElementById("marriage");
    var begging = svgDoc.getElementById("begging");
    var organs = svgDoc.getElementById("organs");
    var domestic = svgDoc.getElementById("domestic");
    var debt = svgDoc.getElementById("debt");
    var labor = svgDoc.getElementById("labor");
    var polygonPath = svgDoc.getElementById("polygon_path");

    
  
    

    soldier.addEventListener('click', (e)=> {
        tranX = e.clientX
        tranY = centerY-e.clientY
        exploitationType('Child Soldiers')
        exploitationStatement('One of the rarer forms of human trafficking, child soldiers are usually found in regions of North Africa and the Middle East, as well as Western and Southern Europe. These cases are largely found to be boys under the age of 18. ')
        
        const soldierSelection = anime ({
            targets: soldier,
            translateX: [tranX, centerX],
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: 'rgba(88, 164, 176, 1)',
        })
    });

    sexual.addEventListener('click', (e)=> {

        tranX = centerX-e.clientX
        tranY = e.clientY


        const sSelection = anime ({
            targets: sexual,
            translateX: tranX,
            translateY: [tranY,centerY],
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Sexual Exploitation')
        exploitationStatement(`A study done by the UNODC found that 50% of trafficking involves sexual exploitation. It's the most commonly found form of exploitation in America, Europe, East Asia, and the Pacific. It is largely reported to be women- 5% of victims are men, 3% are boys, and 25% are girls. `)
    });


    marriage.addEventListener('click', (e)=> {

        tranX = centerX-e.clientX
        tranY = centerY-e.clientY


        const marriageSelection = anime ({
            targets: marriage,
            translateX: tranX,
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Forced Marriages')
        exploitationStatement('1% of trafficking involve forced marriages. It was reported to be found across 9 countries, typically involving women and young girls.')
    });

    begging.addEventListener('click', (e)=> {

        tranX = centerX-e.clientX
        tranY = centerY-e.clientY


        const beggingSelection = anime ({
            targets: begging,
            translateX: tranX,
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Begging')
        exploitationStatement('Reported among 19 countries, forced begging accounts for more than 1% of exploitation. It is found to occur mainly within the subregion of North Africa and the Middle East.')
    });
    organs.addEventListener('click', (e)=> {
        console.log("hi");
        tranX = centerX-e.clientX
        tranY = e.clientY
        console.log(tranX,tranY)

        const organSelection = anime ({
            targets: organs,
            translateX: tranX,
            translateY: [tranY, centerY],
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Organ Removal')
        exploitationStatement('Between 2017 and 2018, over 65 people had been reported to be victims of involuntary organ removal. Areas in the report include North Africa, Central America, South Asia, and Europe.')
    });

    domestic.addEventListener('click', (e)=> {

        
        tranX = centerX-e.clientX
        tranY = centerY-e.clientY

        

        const domesticSelection = anime ({
            targets: domestic,
            translateX: tranX,
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Domestic Servitude')
        exploitationStatement('Found when an employer uses violence or abuse of a position to make the employee believe they must continue working. Recurring vulnerabilities are immigrants, isolation, and exclusion from labor laws. ')
    });

    debt.addEventListener('click', (e)=> {

        tranX = centerX-e.clientX
        tranY = centerY-e.clientY


        const debtSelection = anime ({
            targets: debt,
            translateX: tranX,
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Debt Bondage')
        exploitationStatement('Victims are coerced into working for little to no compensation to "repay" a loan or fee.')
    });

    labor.addEventListener('click', (e)=> {

        
        tranX = e.clientX
        tranY = centerY-e.clientY


        const laborSelection = anime ({
            targets: labor,
            translateX: [tranX, centerX],
            translateY: tranY,
            duration: 3000,
            endDelay: 1000,
            direction: 'alternate',
            fill: '#1F613E',
        })

        exploitationType('Forced Labor')
        exploitationStatement('As the second-most prominent form of exploitation, forced labor was a proponent in 38% of reported cases. 38% of victims were men, 26% women, 21% boys, and 15% girls.')
    });


})

