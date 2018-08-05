
//image switcher code
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/city-break-to-amsterdam-from-the-uk.jpg') {
      myImage.setAttribute ('src','images/festival.jpg');
    } else {
      myImage.setAttribute ('src','images/city-break-to-amsterdam-from-the-uk.jpg');
    }
}

// Personalized message code


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
	myHeading.textContent = 'Summer in Amsterdam with:'+ myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Summer in Amsterdam with: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}