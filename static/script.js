const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
function getSuggestion() {
    clickSound.play();
    const goal = document.getElementById("goal").value;
    const time = document.getElementById("time").value;

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
