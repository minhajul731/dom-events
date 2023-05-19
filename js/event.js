// create a function and call it in onClcik
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// create a button by using id 
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlueButton;
function makeBlueButton() {
    document.body.style.backgroundColor = 'blue';
}

// handle event with anyounimous function 
const makeGreenButton = document.getElementById('make-green-button');
makeGreenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by addeventlistener
const makeYellowButton = document.getElementById('make-yellow-button');
makeYellowButton.addEventListener('click', yellowButton);
function yellowButton() {
    document.body.style.backgroundColor = 'yellow';
}

// handle by addeventlistener another way
const makeHotPinkButton = document.getElementById('make-hotpink-button');
makeHotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

// direct addEventListner Use
document.getElementById('make-lightblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});