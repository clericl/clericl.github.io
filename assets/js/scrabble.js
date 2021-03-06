const welcome = document.querySelector(".welcome-items");
const rainbow = document.querySelector(".rainbow_text_animated");
const letters = document.querySelector(".scrabble");
const box = document.querySelector(".scrabble-box");
const button = document.getElementById("game-start");
const endButton = document.querySelector("#game-end");
const subtitle = document.querySelector("#subtitle");
const gameInfo = document.querySelector(".game-info");
const pointsBox = document.querySelector(".points");
const usedBox = document.querySelector(".used-words");
const name = document.querySelector(".scrabble");
const innerBox = document.querySelector(".scrabble-inner-box");

let clicked = null;
let keyboard = false;
let cont = false;
let points, used;

const messages = [
    "Nice!",
    "Got one!",
    "Good job!",
    "Awesome!",
    "Found one!",
    "Knew it!",
    "Well done!",
    "I didn't even know that was a word!"
];
const winMessage = "We have a winner!"

const allowed = [
    "ace",
    "age",
    "air",
    "ale",
    "arc",
    "are",
    "can",
    "car",
    "ear",
    "era",
    "gal",
    "gel",
    "gin",
    "ice",
    "ire",
    "lag",
    "leg",
    "lei",
    "lie",
    "nag",
    "nil",
    "rag",
    "ran",
    "acne",
    "acre",
    "aril",
    "cage",
    "cane",
    "care",
    "clan",
    "crag",
    "earl",
    "earn",
    "gain",
    "gale",
    "gear",
    "girl",
    "glen",
    "gran",
    "grin",
    "lace",
    "lair",
    "lane",
    "lean",
    "liar",
    "lice",
    "lien",
    "line",
    "lira",
    "nail",
    "narc",
    "near",
    "nice",
    "race",
    "rage",
    "rail",
    "rain",
    "rang",
    "real",
    "rein",
    "rice",
    "rile",
    "ring",
    "acing",
    "agile",
    "alien",
    "align",
    "angel",
    "anger",
    "angle",
    "cager",
    "cairn",
    "caner",
    "cigar",
    "cilia",
    "clang",
    "clean",
    "clear",
    "cling",
    "crane",
    "genii",
    "glare",
    "glean",
    "gnarl",
    "grace",
    "grail",
    "grain",
    "icier",
    "icing",
    "lacer",
    "lager",
    "lance",
    "large",
    "learn",
    "liger",
    "liner",
    "nacre",
    "nicer",
    "range",
    "regal",
    "reign",
    "relic",
    "renal",
    "ricin",
    "ailing",
    "airing",
    "angler",
    "arcing",
    "cagier",
    "caring",
    "carnie",
    "cringe",
    "eclair",
    "gainer",
    "garlic",
    "genial",
    "glance",
    "inlier",
    "lacier",
    "lacing",
    "lancer",
    "linear",
    "racing",
    "regain",
    "renail",
    "ricing",
    "riling",
    "airline",
    "aligner",
    "angelic",
    "ceiling",
    "clanger",
    "clinger",
    "glacier",
    "glancer",
    "railing",
    "realign",
    "clearing",
    "clingier",
    "relacing"
]

function letterClick(e) {
    if (points < 25 || cont) {
        const box = document.querySelector(".scrabble-box");
        clicked = e.target;
        if (clicked.innerHTML !== "&nbsp;") {
            box.children[0].innerHTML += clicked.innerHTML;
            clicked.parentNode.removeChild(clicked);
            clicked = null;
            setTimeout(checkAnswer, 200);
        }
    }
}

function resetLetters() {
    if (points < 25 || cont) {
        if (box.children[0].innerHTML === "You did it!") {
            button.innerHTML = "CLEAR WORD"
        }

        box.children[0].innerHTML = ""
    
        while (name.firstChild) {
            name.removeChild(name.firstChild);
        };
    
        const letters = ["E", "R", "I", "C", "&nbsp;", "L", "I", "A", "N", "G"]
        letters.forEach(letter => {
            const node = document.createElement("h1");
            node.setAttribute("class", "name-letter");
            node.setAttribute("onclick", "letterClick(event)")
            node.innerHTML = letter;
            name.appendChild(node);
        });
    } else if (points >= 25 && !cont) {
        cont = true;
        resetLetters();
        box.children[0].innerHTML = "You did it!";
        cont = false;
    }
}

function checkAnswer() {
    const answer = document.querySelector(".scrabble-inner-box").innerHTML.toLowerCase();

    if (allowed.includes(answer) && !used.includes(answer)) {
        used.push(answer);
        used.sort();
        usedBox.innerHTML = used.join(" ");
        points += answer.length;
        pointsBox.innerHTML = points;
        if (points >= 25 && !cont) {
            showMessage(0);
            gameInfo.children[0].innerHTML = "Thanks for playing!";
            gameInfo.children[1].innerHTML = "Feel free to dive downward into my other projects."
            pointsBox.style.color = "gold";
            button.innerHTML = "CONTINUE PLAYING";
            button.removeEventListener("click", resetLetters);
            button.addEventListener("click", () => {
                cont = true;
                resetLetters();
            });
        } else {
            showMessage(1);
        };
    }
}

function showMessage(val) {
    const message = val ? messages[Math.floor(Math.random() * 6)] : winMessage;
    const div = document.querySelector(".message");
    div.innerHTML = message;
    div.style.color = val ? "white" : "gold";

    setTimeout(resetLetters, 150);
    disableKeyboard();
    toggleModal();
    div.style.transition = "left .3s ease-in-out";
    div.style.left = "50%";
    
    setTimeout(() => {
        div.style.left = "200%";
        toggleModal();

        setTimeout(() => {
            div.style.transition = "";
            div.style.left = "-100%";
            document.addEventListener("keydown", enableKeyboard);
            keyboard = true;
        }, 100);
    }, 1000);
}

function toggleModal() {
    const modal = document.querySelector(".modal-background");
    if (modal.style.opacity < 1) {
        modal.style.zIndex = "2";
        modal.style.opacity = 1;
    } else {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.zIndex = "-2";
        }, 200);
    }
}

function enableKeyboard(e) {
    if (e.key === "Backspace") {
        e.preventDefault();
        resetLetters();
    } else if (Array.from(document.querySelectorAll(".name-letter")).map(letter => letter.innerHTML.toLowerCase()).includes(e.key)) {
        e.preventDefault();
        Array.from(document.querySelectorAll(".name-letter")).filter(letter => letter.innerHTML.toLowerCase() === e.key)[0].click();
    }
}

function disableKeyboard() {
    document.removeEventListener("keydown", enableKeyboard);
    keyboard = false;
}

function toggleKeyboard(e) {
    if (e.key === "Control" || e.key === "Command") {
        keyboard ? disableKeyboard() : document.addEventListener("keydown", enableKeyboard);
    }
}

function gameStart() {
    points = 0;
    used = [];
    pointsBox.innerHTML = "";
    usedBox.innerHTML = "";
    gameInfo.children[0].innerHTML = "Click or type letters in my name to make words and score points!";
            gameInfo.children[1].innerHTML = "Longer words are worth more points. Score 25 points to win!"
    
    rainbow.style.display = "none";
    letters.style.display = "flex";
    subtitle.style.opacity = 0;
    subtitle.style.transform = "translateY(15em)";
    gameInfo.style.opacity = 1;
    gameInfo.style.transform = "translateY(0)";
    pointsBox.style.opacity = 1;
    usedBox.style.opacity = .6;
    
    welcome.style.transform = 'translateY(4em)';
    
    box.style.display = "flex";
    endButton.style.display = "block";

    setTimeout(() => {
        box.style.opacity = 1;
        endButton.style.opacity = 1;
    }, 400);

    endButton.addEventListener("click", gameEnd);

    button.removeEventListener("click", gameStart);
    button.addEventListener("click", resetLetters);
    button.innerHTML = "CLEAR WORD";

    document.addEventListener("keydown", enableKeyboard);
    keyboard = true;
    document.addEventListener("keydown", toggleKeyboard);
    document.addEventListener("keyup", toggleKeyboard);
}

function gameEnd() {
    resetLetters();
    points = 0;
    used = [];
    innerBox.innerHTML = "";
    pointsBox.style.color = "white";
    box.style.opacity = 0;
    endButton.style.opacity = 0;
    pointsBox.style.opacity = 0;
    usedBox.style.opacity = 0;
    
    setTimeout(() => {
        rainbow.style.display = "block";
        letters.style.display = "none";
        box.style.display = "none";
        endButton.style.display = "none";
        welcome.style.transform = 'translateY(0)';
        subtitle.style.opacity = 1;
        subtitle.style.transform = "translateY(0)";
        gameInfo.style.opacity = 0;
        gameInfo.style.transform = "translateY(15em)";
    }, 300);

    button.removeEventListener("click", resetLetters);
    button.addEventListener("click", gameStart);
    button.innerHTML = "CLICK TO PLAY";

    disableKeyboard();
    document.removeEventListener("keydown", toggleKeyboard);
    document.removeEventListener("keyup", toggleKeyboard);
}

document.getElementById("game-start").addEventListener("click", gameStart);