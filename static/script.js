const clickSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=click-124467.mp3");
async function getSuggestion() {

    clickSound.currentTime = 0;
    clickSound.play();

    const goal = document.getElementById("goal").value;

    fetch("/suggest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ goal: goal, time: time })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = data.result;
    });
}
document.getElementById("result").innerText = "🤖 Thinking...";
