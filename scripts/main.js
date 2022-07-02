let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
myHeading.onclick = () => { alert('Don\'t touch me, it hurts.'); }
let originalHeading = myHeading.textContent;

//pictures
let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
        myImage.setAttribute('src', 'images/logo2.png');

    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}


//User changing
let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('Please enter your name:');
    if (myName) {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ' is so cooool!';
    } else {
        myHeading.textContent = originalHeading;
    }

}

myButton.onclick = () => { setUserName(); }

if (!localStorage.get('name')) {
    setUserName();
} else {
    let storedname = localStorage.getItem('name');
    myHeading.textContent = myName + ' is so cooool!';
}