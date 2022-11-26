let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    let quiz = document.getElementById("quiz");

    quiz.innerHTML = '<object type="text/html" data="result.html" ></object>';
});