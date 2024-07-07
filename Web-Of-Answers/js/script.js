let texts = [
    "You sure about that?",
    "I don't think so",
    "Yes",
    "No",
    "Time To Make A New Plan",
    "You can do it"
];

let intervalId;

function startDisplay(){
    document.getElementById("stopButton").removeAttribute("hidden");
    document.getElementById("startButton").setAttribute("hidden", "true");

    intervalId = setInterval(pickRandom, 100);
}

function stopDisplay(){
    clearInterval(intervalId);
    document.getElementById("startButton").removeAttribute("hidden");
    document.getElementById("stopButton").setAttribute("hidden", "true");
}

function pickRandom(){
    document.getElementById("answer").innerText = texts[Math.floor(Math.random() * texts.length)];
}
