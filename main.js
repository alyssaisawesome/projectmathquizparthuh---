var name1;
var name2;
function adduser() {

    name1=document.getElementById("player1name").value;
    name2=document.getElementById("player2name").value;
    localStorage.setItem("player 1", name1);
    localStorage.setItem("player 2", name2);

    window.location = "indextwo.html";
}