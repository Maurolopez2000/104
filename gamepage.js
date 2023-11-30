// valor aleatorio generado
  var y=Math.floor(Math.random() * 10+1);
// contar el número de intentos
// crear para el intento correcto

  
// función para el número adivinado por el usuario     
var x=document.getElementById("guesFriend").value ;


function submit(){
if(x==y){
alert("Felicitaciones!!" + playername + "Lo adivinaste bien" + guess + "Intento");
guess=1;
}
else if(x > y){
guess++;
alert("Ups lo siento intenta con un numero mas pequeño!!");
}
else{
    guess++;
    alert("Ups lo siento intenta con un numero mas grande!!");
}
}
function playAgain(){
    y=Math.floor(Math.random()* 10+1);
}