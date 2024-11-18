 // Word list
 const words = [
    "UNOBTRUSIVE", "CONSTITUTIONAL", "PHILOSOPHY", "EXTRAORDINARY", "LABORATORY",
    "THERMOMETER", "METAMORPHOSIS", "VINDICATION", "TRANQUILITY", "DYSTOPIA",
    "PSEUDONYM", "HEURISTICS", "INCANDESCENT", "IMPECCABLE", "GARGANTUAN",
    "MELLIFLUOUS", "AUTOMATON", "CATHARSIS", "EPHEMERAL", "AMBIDEXTROUS",
    "PERSPECTIVE", "ALTRUISM", "ECLECTIC", "IDIOSYNCRATIC", "COMBUSTIBLE",
    "SYNCHRONIZE", "PARADIGM", "METAPHORICAL", "ASTROPHYSICS", "NUMEROUS",
    "INCREDULOUS", "CALCULATOR", "HARMONIOUS", "ABSTRACT", "FLUCTUATION",
    "EXUBERANT", "CONVOLUTED", "CONFIDENTIAL", "INCONSPICUOUS", "PRECARIOUS",
    "ARTICULATE", "SUBLIMINAL", "INTERPRETATION", "INSURMOUNTABLE", "PERSISTENT",
    "PLETHORA", "CONVULSIONS", "DISPOSITION", "TRANSIENT", "DISCOMBOBULATED"
];
const maxLives = 6;
let selectedWord = "";
let displayedWord = [];
let guessedLetters = [];
let lives = maxLives;

const heartsElement = document.getElementById("hearts");
const restartButton = document.getElementById("restart-btn");
const buttons = document.querySelectorAll(".game-container button:not(#restart-btn)");

function pickRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function initializeGame() {
    document.body.style.color = "black"; 
    selectedWord = pickRandomWord();
    displayedWord = Array(selectedWord.length).fill("_");
    guessedLetters = [];
    lives = maxLives;
    document.getElementById("lives").textContent = "Үлдсэн амь: ";
    heartsElement.textContent = "❤️".repeat(maxLives);
    document.getElementById("lives").append(heartsElement);
    restartButton.style.display = "none";
    buttons.forEach(button => {
        button.disabled = false;  
        button.classList.remove('grey');  
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawBaseStructure(); 
    updateWordDisplay();
}


function updateWordDisplay() {
    const wordElement = document.getElementById("word");
    if (!wordElement) {
        const newWordElement = document.createElement("p");
        newWordElement.id = "word";
        newWordElement.textContent = displayedWord.join(" ");
        document.querySelector(".game-container").insertBefore(newWordElement, restartButton);
    } else {
        wordElement.textContent = displayedWord.join(" ");
    }
}

function checkLetter(letter) {
    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    const buttons = document.querySelectorAll(".game-container button:not(#restart-btn)");
    buttons.forEach(button => {
        if (button.textContent === letter) {
            button.disabled = true;
            button.classList.add('grey');
        }
    });

    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
        updateWordDisplay();

        if (!displayedWord.includes("_")) {
            document.getElementById("lives").textContent = "Баяр хүргэе! Та хожлоо!";
            restartButton.style.display = "block";
        }
    } else {
        lives--;
        heartsElement.textContent = "❤️".repeat(lives) + "🖤".repeat(maxLives - lives);
        drawHangman(maxLives - lives); 

        if (lives === 0) {
            document.getElementById("lives").textContent = `Та хожигдлоо! Зөв хариулт: ${selectedWord}`;
            restartButton.style.display = "block";
        }
    }
}

const canvas = document.getElementById("hangman-canvas");
const ctx = canvas.getContext("2d");
function drawBaseStructure() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";

    // Base
    ctx.beginPath();
    ctx.moveTo(10, 290);
    ctx.lineTo(190, 290);
    ctx.stroke();

    // Pole
    ctx.beginPath();
    ctx.moveTo(50, 290);
    ctx.lineTo(50, 50);
    ctx.stroke();

    // Beam
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.stroke();

    // Rope
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 80);
    ctx.stroke();
}

function drawHangman(stage) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";

    switch (stage) {
        case 1: // Head
            ctx.beginPath();
            ctx.arc(150, 100, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2: // Body
            ctx.beginPath();
            ctx.moveTo(150, 120);
            ctx.lineTo(150, 200);
            ctx.stroke();
            break;
        case 3: // Left Arm
            ctx.beginPath();
            ctx.moveTo(150, 140);
            ctx.lineTo(120, 180);
            ctx.stroke();
            break;
        case 4: // Right Arm
            ctx.beginPath();
            ctx.moveTo(150, 140);
            ctx.lineTo(180, 180);
            ctx.stroke();
            break;
        case 5: // Left Leg
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(120, 250);
            ctx.stroke();
            break;
        case 6: // Right Leg
            document.body.style.color = "red"; 
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(180, 250);
            ctx.stroke();
            break;
        default:
            document.body.style.color = "black"; 
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        checkLetter(button.textContent);
    });
});
// Restart button 
restartButton.addEventListener("click", initializeGame);

// Start the game 
initializeGame();
