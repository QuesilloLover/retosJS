function saludo() {
  let nombre = prompt("¿Cómo te llamas?");
  document.getElementById("output1").innerHTML = "Hola " + nombre + ". Bienvenida/o!";
  
}

const reto1 = saludo.toString();
document.getElementById("code1").innerHTML = reto1;