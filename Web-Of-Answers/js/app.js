let texts;
let intervalId;
let loadedData;


fetch('https://projects.hirujaedurapola.com/Web-Of-Answers/databases/data.json')
    .then(response => response.json())
    .then(data => {
        const texts = data.texts;
        // console.log(texts);
        loadedData = texts
    })
    .catch(error => console.error('Error fetching JSON:', error));


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
    document.getElementById("answer").innerText = loadedData[Math.floor(Math.random() * loadedData.length)];
}

// console.log(texts.length)
