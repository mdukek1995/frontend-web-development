const purchaseButton = document.getElementById("place-order");
const messageArea = document.getElementById("message");


purchaseButton.addEventListener('click', () => {
// determine size
     if(document.getElementById("twelve-inch").checked) {
          var size = "small"
     }
     else if(document.getElementById("fourteen-inch").checked) {
          var size = "medium"
     }
     else if(document.getElementById("sixteen-inch").checked) {
          var size = "large"
     }
 // determine type
     if(document.getElementById("cheese").checked) {
          var type = "cheese"
     }
     else if(document.getElementById("pepperoni").checked) {
          var type = "pepperoni"
     }
     else if(document.getElementById("hawaiian").checked) {
          var type = "hawaiian"
     }
     else if(document.getElementById("veggie").checked) {
          var type = "veggie"
     }
     else if(document.getElementById("meat-lovers").checked) {
          var type = "meat lovers"
     }
     const name = document.getElementById("name"),
             phone = document.getElementById("phone");

     messageArea.innerHTML = `Hey ${name.value}, thanks for submitting your order! Your ${size} ${type} pizza is on the way, we'll call you at ${phone.value} when it's ready.`
     messageArea.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

});

const myForm = document.getElementById("pizza-order");

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
