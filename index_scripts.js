window.onload = function()
{
    var cell1 = document.getElementById("cell1");
    var cell2 = document.getElementById("cell2");
    var cell3 = document.getElementById("cell3");

    document.body.style.background = localStorage.bgcolor;

    cell1.addEventListener("click", this.goToSnake);
    cell2.addEventListener("click", this.goToHighScores);
    cell3.addEventListener("click", this.goToAccount);
}

function goToSnake()
{
    window.location.href = "Snake_Game/snake_page.jsp";
}

function goToHighScores()
{
    window.location.href = "high_scores.jsp";
}

function goToAccount()
{
    window.location.href = "store.jsp";
}
