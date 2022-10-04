
fetch('https://api.sunrise-sunset.org/json?lat=40.00774122735109&lng=-105.26591487991188&date=today', {
    method: 'GET',
})
    .then(response => response.json())
    .then(json => {
        const paragraph = document.createElement('p');
        const sunrise = `The sunrise today will occur at ${json.results.sunrise} UTC`;
        const sunset = `The sunset today will occur at ${json.results.sunset} UTC` ;
        paragraph.innerText = sunrise + `\n` + sunset;
        document.body.appendChild(paragraph);
    })
    .catch(error => console.error(error));
