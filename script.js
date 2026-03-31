function results() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const resultText = document.getElementById("result");

    yesBtn.classList.remove("yes-win");
    noBtn.classList.remove("no-win");

    const decision = Math.random() < 0.5 ? "YES" : "NO";

    resultText.style.display = "block";
    resultText.innerText = "Your best decision: " + decision;

    if (decision === "YES") {
        yesBtn.classList.add("yes-win");
    } else {
        noBtn.classList.add("no-win");
    }
}