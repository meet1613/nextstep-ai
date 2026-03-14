function getSuggestion() {
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
