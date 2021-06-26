// Global variables
// define the main div as a global variable as this will be used in lots of functions - saves having to "get" it each time
let mainDiv = document.getElementById("main-div");

let gameDifficulty;
let numOfQuestions;

let trueAnswers;
let trueQuestions;

// Create elements function
function createElement(elementType, id) {
    let newElement = document.createElement(elementType);
    newElement.id = id;
    return newElement;
}

document.addEventListener("DOMContentLoaded", introScreen);

// Intro screen function
function introScreen() {

    // Create introScreen HTML elements and append to relevant divs
    let introScreenDiv = createElement("div", "intro-screen-div");
    mainDiv.appendChild(introScreenDiv);

    let introScreenTitle = createElement("h1", "intro-screen-title");
    introScreenDiv.appendChild(introScreenTitle);

    let introScreenGameDescr = createElement("h2", "intro-screen-game-des");
    introScreenDiv.appendChild(introScreenGameDescr);

    let introScreenBtn = createElement("button", "intro-screen-btn");
    introScreenDiv.appendChild(introScreenBtn);
    introScreenBtn.addEventListener("click", inputName);

    // Create the text for the elements
    introScreenTitle.innerHTML = "Welcome to Un Petit Jeu Francais!";
    introScreenGameDescr.innerHTML = "This website allows you to play a short, fun quiz to practice your level in French!";
    introScreenBtn.innerHTML = "Play quiz";

}

// Input name screen
function inputName() {

    // Remove introScreen HTML
    let introScreenDiv = document.getElementById("intro-screen-div");
    introScreenDiv.remove();

    // Create inputName HTML elements and append to relevant divs
    let inputNameDiv = createElement("diV", "input-name-div");
    mainDiv.appendChild(inputNameDiv);

    let inputNameText = createElement("h1", "input-name-text");
    inputNameDiv.appendChild(inputNameText);

    let inputNameInput = createElement("input", "input-name-input");
    inputNameDiv.appendChild(inputNameInput);

    let inputNameBtn = createElement("button", "input-name-btn");
    inputNameDiv.appendChild(inputNameBtn);
    inputNameBtn.addEventListener("click", gameOptions);

    // Create the text for the elements
    inputNameText.innerHTML = "First, let's start with your name";
    inputNameBtn.innerHTML = "Ok";

}

// Choose game options screen
function gameOptions() {

    // Get the user's name input value
    let userName = document.getElementById("input-name-input").value;

    // Remove previous screen
    document.getElementById("input-name-div").remove();

    // Create gameOptions HTML elements and append to relevant divs
    let gameOptionsDiv = createElement("div", "game-options-div");
    mainDiv.appendChild(gameOptionsDiv);

    let gameOptionsWelcomeName = createElement("h1", "game-options-welcome-name");
    gameOptionsDiv.appendChild(gameOptionsWelcomeName);

    let gameOptionsText = createElement("h2", "game-options-text");
    gameOptionsDiv.appendChild(gameOptionsText);

    let gameOptionsForm = createElement("form", "game-difficulty-form");
    gameOptionsDiv.appendChild(gameOptionsForm);

    let gameOptionsDifficultyText = createElement("h3", "game-options-difficulty-text");
    gameOptionsForm.appendChild(gameOptionsDifficultyText);

    // Create difficulty radio options
    let gameDifficultyOptions = ["Easy", "Medium", "Hard"];
    let gameDifficultyOptionsID = [];

    for (let i = 0; i < gameDifficultyOptions.length; i++) {

        // Create radio buttons
        var diffRadio = createElement("input", `${gameDifficultyOptions[i]}`);
        diffRadio.type = "radio";
        diffRadio.name = "diffRadioName";
        diffRadio.checked = false;
        diffRadio.required = true;

        // Create radio button labels
        var diffLabel = document.createElement("label");
        diffLabel.innerHTML = gameDifficultyOptions[i];

        // Append radios and labels to form
        gameOptionsForm.appendChild(diffRadio);
        gameOptionsForm.appendChild(diffLabel);

        gameDifficultyOptionsID.push(diffRadio.id);
    }

    let gameOptionsLengthText = createElement("h3", "game-options-length-text");
    gameOptionsForm.appendChild(gameOptionsLengthText);

    // Create game length options
    let gameLengthOptions = ["10", "20", "30", "40"];

    for (let i = 0; i < gameLengthOptions.length; i++) {

        // Create radio buttons
        var lengthRadio = createElement("input", `gameLength${gameLengthOptions[i]}`);
        lengthRadio.type = "radio";
        lengthRadio.name = "lengthRadioName";
        lengthRadio.checked = false;
        lengthRadio.required = true;

        // Create radio button labels
        var lengthLabel = document.createElement("label");
        lengthLabel.innerHTML = gameLengthOptions[i];

        // Append radios and labels to form
        gameOptionsForm.appendChild(lengthRadio);
        gameOptionsForm.appendChild(lengthLabel);
    }

    // Set default options 
    Easy.checked = true;
    gameLength10.checked = true;

    let gameOptionsBtn = createElement("button", "game-options-btn");
    gameOptionsBtn.addEventListener("click", function () {
        createGameArea();
    });
    gameOptionsDiv.appendChild(gameOptionsBtn);

    // Create the text for the elements
    gameOptionsWelcomeName.innerHTML = (`Welcome ${userName}!`);
    gameOptionsText.innerHTML = "Now choose some game options:";
    gameOptionsDifficultyText.innerHTML = "Please choose a game difficulty";
    gameOptionsLengthText.innerHTML = "Now choose how many questions you'd like to answer";
    gameOptionsBtn.innerHTML = "Play game!";

}

// Open game area screen
function createGameArea() {

    // Get user's chosen difficulty
    for (i = 0; i < 3; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
            gameDifficulty = document.getElementsByTagName("label")[i].innerHTML;
            console.log(gameDifficulty);
        }
    }

    // Get user's chosen game length
    for (i = 3; i < 7; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
            gameLength = document.getElementsByTagName("label")[i].innerHTML;
            console.log(gameLength);
        }
    }


    // Create the main game area div
    let gameAreaDiv = createElement("div", "game-area-div");
    mainDiv.appendChild(gameAreaDiv);

    // Create the div with question, multiple choice and buttons
    let gameAreaLeft = createElement("div", "game-area-left");
    let gameAreaLeft1 = createElement("div", "game-area-left-1");
    let gameAreaLeft2 = createElement("div", "game-area-left-2");
    let gameAreaLeft3 = createElement("div", "game-area-left-3");

    // Create the div with progress tally and scores (------and timer)
    let gameAreaRight = createElement("div", "game-area-right");
    let gameAreaRight1 = createElement("div", "game-area-right-1");
    let gameAreaRight2 = createElement("div", "game-area-right-2");

    gameAreaDiv.appendChild(gameAreaLeft);
    gameAreaDiv.appendChild(gameAreaRight);

    gameAreaLeft.appendChild(gameAreaLeft1);
    gameAreaLeft.appendChild(gameAreaLeft2);
    gameAreaLeft.appendChild(gameAreaLeft3);

    gameAreaRight.appendChild(gameAreaRight1);
    gameAreaRight.appendChild(gameAreaRight2);

    // Create buttons
    let homeButton = createElement("button", "game-home-btn");
    homeButton.innerHTML = "Return to Home";
    homeButton.addEventListener("click", function () {
        alert("Return to home?");
    });

    let skipButton = createElement("button", "skip-question-btn");
    skipButton.innerHTML = "Skip question";
    // skipButton.addEventListener("click", skipQuestion);

    let nextQuestionButton = createElement("button", "next-question-btn");
    nextQuestionButton.innerHTML = "Next question";
    // nextQuestionButton.addEventListener("click", checkAnswer);

    gameAreaLeft3.appendChild(homeButton);
    gameAreaLeft3.appendChild(skipButton);
    gameAreaLeft3.appendChild(nextQuestionButton);

}

// // Generate question
// function generateQuestion() {

//     // get user's answers

//     let mcRandomNums = [];
//     let mcQuestions = [];
//     let mcAnswers = [];

//     for (i = 0; i < numOfQuestions; i ++) {

//         // Create random numbers between 1 and max length of language array
//         mcRandomNums[i] = Math.floor(Math.random() * options[questionLanguage][gameDifficulty].length);

//         // Index words from language arrays using these random numbers
//         mcQuestions[i] = options[questionLanguage][gameDifficulty][mcRandomNums[i]];
//         mcAnswers[i] = options[answerLanguage][gameDifficulty][mcRandomNums[i]];

//         // Remove the chosen words in each language to prevent them being repeated
//         options[questionLanguage][gameDifficulty].splice(mcRandomNums[i]), 1);
//         options[answerLanguage][gameDifficulty].splice(mcRandomNums[i]), 1);
//     }

//     // Pick a value between 1 and 4 (5 for med, 6 for hard) to be the "chosen" question and answer word
//     let chosenRandomNum = Math.floor(Math.random()* (numOfQuestions - 1)) + 1;

//     // Index the chosen question and answer from multiple choice
//     mcAnswer = mcAnswers[chosenRandomNum];
//     mcAnswer.id = "mc-answer";
//     trueAnswers.push(mcAnswer);

//     mcQuestion = mcQuestions[chosenRandomNum];
//     mcQuestion.id = "mc-question";
//     trueQuestions.push(mcQuestion);

//     // Create the question
//     let questionText = createElement("h1","question-text");
//     questionText.innerHTML = (`What is ${mcAnswer} in ${questionLanguage}?`);
//     // append to HTML

//     // Create the multiple choice radio buttons


// }


// Check answer

// Show answers screen

// End game screen

// Pop-ups : 
// Game difficult info pop-up
// Choose an answer pop-up
// You will lose progress pop-up 