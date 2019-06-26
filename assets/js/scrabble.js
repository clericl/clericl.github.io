let dragged = null;
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

function dragStartHandler(e) {
    e.dropEffect = 'linkMove';
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    dragged = e.target;
}

function dragOverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    dragged.parentNode.removeChild(dragged);
    e.target.append(dragged);
    dragged = null;
}

function gameStart() {
    const welcome = document.querySelector(".welcome-items");
    const rainbow = document.querySelector(".rainbow_text_animated");
    const letters = document.querySelector(".scrabble");
    const boxes = document.querySelector(".scrabble-boxes");
    
    rainbow.setAttribute("style", "display: none");
    letters.setAttribute("style", "display: flex");
    
    welcome.style.transform = 'translateY(4em)';
    
    boxes.style.display = "flex";
    setTimeout(() => {
        boxes.style.opacity = 1},
        400
    );

    const button = document.getElementById("game-start");

    button.removeEventListener("click", gameStart);
    button.addEventListener("click", resetLetters);
    button.innerHTML = "Reset";
}

function resetLetters() {
    const boxes = document.querySelectorAll(".scrabble-box");
    boxes.forEach(box => {
        let trash = box.querySelector("h1");
        if (trash) box.removeChild(trash);
    });

    const name = document.querySelector(".scrabble");
    while (name.firstChild) {
        name.removeChild(name.firstChild);
    };

    const letters = ["E", "R", "I", "C", "L", "I", "A", "N", "G"]
    letters.forEach(letter => {
        const node = document.createElement("h1");
        node.setAttribute("class", "name-letter");
        node.setAttribute("draggable", "true");
        node.setAttribute("ondragstart", "dragStartHandler(event);");
        node.innerHTML = letter;
        name.appendChild(node);
    });
}

function checkAnswer() {
    let answer = "";
    const boxes = document.querySelectorAll(".scrabble-box");
    boxes.forEach(box => {
        let letter = box.querySelector("h1");
        if (letter) answer += letter.innerHTML;
    });
    
}

document.getElementById("game-start").addEventListener("click", gameStart);