// Global variables
// define the main div as a global variable as this will be used in lots of functions - saves having to "get" it each time
let mainDiv = document.getElementById("main-div");

// Create elements function
function  createElement(elementType, id) {
    let newElement = document.createElement(elementType);
    newElement.id = id;
    return newElement;
}

document.addEventListener("DOMContentLoaded",introScreen);

// Intro screen function
function introScreen() {

    // Create introScreen HTML elements and append to relevant divs
    let introScreenDiv = createElement("div","intro-screen-div");
    mainDiv.appendChild(introScreenDiv);

    let introScreenTitle = createElement("h1","intro-screen-title");
    introScreenDiv.appendChild(introScreenTitle);

    let introScreenGameDescr = createElement("h2","intro-screen-game-des");
    introScreenDiv.appendChild(introScreenGameDescr);

    let introScreenBtn = createElement("button","intro-screen-btn");
    introScreenDiv.appendChild(introScreenBtn);
    introScreenBtn.addEventListener("click",inputName);

    // Create the text for the elements
    introScreenTitle.innerHTML = "Welcome to Un Petit Jeu Francais!";
    introScreenGameDescr.innerHTML="This website allows you to play a short, fun quiz to practice your level in French!";
    introScreenBtn.innerHTML = "Play quiz";

}

// Input name screen
function inputName() {

    // Remove introScreen HTML
    let introScreenDiv = document.getElementById("intro-screen-div");
    introScreenDiv.remove();

    // Create inputName HTML elements and append to relevant divs
    let inputNameDiv = createElement("diV","input-name-div");
    mainDiv.appendChild(inputNameDiv);

    let inputNameText = createElement("h1","input-name-text");
    inputNameDiv.appendChild(inputNameText);

    let inputNameInput = createElement("input","input-name-input");
    inputNameDiv.appendChild(inputNameInput);

    let inputNameBtn = createElement("button","input-name-btn");
    inputNameDiv.appendChild(inputNameBtn);
    inputNameBtn.addEventListener("click",gameOptions);

    // Create the text for the elements
    inputNameText.innerHTML = "First, let's start with your name";
    inputNameBtn.innerHTML = "Ok";

}

// Choose game options screen
function gameOptions() {}
// Open game area screen
 
// Generate question

// Check answer

// Show answers screen

// End game screen

// Pop-ups : 
// Game difficult info pop-up
// Choose an answer pop-up
// You will lose progress pop-up 