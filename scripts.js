function toggleAnswer(answerNumber) {
    const answer = document.getElementById(`answer${answerNumber}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
