// Global variables
// define the main div as a global variable as this will be used in lots of functions - saves having to "get" it each time
let mainDiv = document.getElementById("main-div");

// Create elements function
function  createElement(elementType, id) {
    let newElement = document.createElement(elementType);
    newElement.id = id;
    return newElement;
}

// Intro screen function
function introScreen {

    // Create intro screen elements and append to relevant divs
    let introScreenDiv = createElement("div","intro-screen-div");
    mainDiv.appendChild(introScreenDiv);

    let introScreenTitle = createElement("h1","intro-screen-title");
    introScreenDiv.appendChild(introScreenTitle);

    let introScreenGameDescr = createElement("h2","intro-screen-game-des");
    introScreenDiv.appendChild(introScreenGameDescr);

    let introScreenBtn = createElement("button","intro-screen-btn");
    introScreenDiv.appendChild(introScreenBtn);

    // Create the text for the elements
    introScreenTitle.innerHTML = "Welcome to Un Petit Jeu Francais!";
    introScreenGameDescr.innerHTML="This website allows you to play a short, fun quiz to practice your level in French!";
    introScreenBtn.innerHTML = "Play quiz";

}

// Input name screen

// Choose game options screen

// Open game area screen
 
// Generate question

// Check answer

// Show answers screen

// End game screen

// Pop-ups : 
// Game difficult info pop-up
// Choose an answer pop-up
// You will lose progress pop-up 