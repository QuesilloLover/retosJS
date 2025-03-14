// Reto 1
function saludo() {
    let nombre = prompt("¿Cómo te llamas?");
    document.getElementById("output1").innerHTML = "Hola " + nombre + ". Bienvenida/o!";
}

const reto1 = saludo.toString();
document.getElementById("code1").innerHTML = reto1;

// Reto 2
function celsius_farenheit() {
    let celsius = parseFloat(document.getElementById("celsius").value);

    if (!celsius) {
        alert("Por favor, ingresa un valor en grados Celsius.");
        return;
    }

    let farenheit = (celsius * 9 / 5) + 32;
    document.getElementById("output2").innerHTML = celsius + "°C son " + farenheit + " °F.";
}

const reto2 = celsius_farenheit.toString();
document.getElementById("code2").innerHTML = reto2;

// Reto 3
function even_odd(){
    let number = parseInt(document.getElementById("number").value);

    if (!number) {
        alert("Por favor, ingresa un número.");
        return;
    }

    if (number % 2 === 0) {
        document.getElementById("output3").innerHTML = number + " es un número par.";
    } else {
        document.getElementById("output3").innerHTML = number + " es un número impar.";
    }
}

const reto3 = even_odd.toString();
document.getElementById("code3").innerHTML = reto3;

// Reto 4
function count_chars(){
    let text = document.getElementById("word").value;
    let count = text.length;

    if (!text) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    document.getElementById("output4").innerHTML = "El texto ingresado tiene " + count + " caracteres.";
}

const reto4 = count_chars.toString();
document.getElementById("code4").innerHTML = reto4;

// Reto 5
function reverse_word(){
    let word = document.getElementById("word_to_invert").value;
    let reverse = word.split("").reverse().join("");

    if (!word) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    document.getElementById("output5").innerHTML = "El texto ingresado al revés es: " + reverse;
}

const reto5 = reverse_word.toString();
document.getElementById("code5").innerHTML = reto5;

// Reto 6
function sum_numbers(){
    let number = parseInt(document.getElementById("number_to_sum").value);
    let sum = 0;

    if (!number) {
        alert("Por favor, ingresa un número.");
        return;
    }

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    document.getElementById("output6").innerHTML = "La suma de los números del 1 al " + number + " es: " + sum;
}

const reto6 = sum_numbers.toString();
document.getElementById("code6").innerHTML = reto6;

// Reto 7
function capitaliza_minuscula(){
    let text = document.getElementById("word_to_capitalize").value;

    if (!text) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    document.getElementById("output7").innerHTML = "Mayúsculas: " + text.toUpperCase() + "<br>Minúsculas: " + text.toLowerCase();
}

const reto7 = capitaliza_minuscula.toString();
document.getElementById("code7").innerHTML = reto7;

// Reto 8
function random_number(){
    let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    document.getElementById("output8").innerHTML = "El número aleatorio entre 1 y 100 es: " + random;
}

const reto8 = random_number.toString();
document.getElementById("code8").innerHTML = reto8;

// Reto 9
function is_palindrome(){
    let word = document.getElementById("word_to_check").value;
    let reverse = word.split("").reverse().join("");

    if (!word) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    if (word === reverse) {
        document.getElementById("output9").innerHTML = "El texto ingresado es un palíndromo.";
    } else {
        document.getElementById("output9").innerHTML = "El texto ingresado no es un palíndromo.";
    }
}

const reto9 = is_palindrome.toString();
document.getElementById("code9").innerHTML = reto9;

// Reto 10
function count_vowels(){
    let word = document.getElementById("word_to_count_vowels").value;
    let count = 0;

    if (!word) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/[aeiou]/gi)) {
            count++;
        }
    }

    document.getElementById("output10").innerHTML = "El texto ingresado tiene " + count + " vocales.";
}

const reto10 = count_vowels.toString();
document.getElementById("code10").innerHTML = reto10;