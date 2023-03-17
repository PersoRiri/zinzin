var carréVert = document.getElementsByClassName("green-div")[0];
carréVert.addEventListener("click", function(e){
  myScript();
}, false);

function myScript() {
  document.getElementById('title').style.display = 'none';
  carréVert.innerHTML = "<h1 class='para'> 🤬 Où est mon cadeau du père noël secret ? 🤬</h1>";
  carréVert.classList.toggle("nulos");
}