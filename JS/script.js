//modalità 1

let name = prompt("What's your name?");
let surname = prompt("What's your surname?");
let favourite_color = prompt("What's your favourite color?");
document.getElementById("psw-gnr").innerHTML = name + surname + favourite_color + '22';


//modalità 2

// document.getElementById("psw-gnr").innerHTML = prompt("What's your name?") + prompt("What's your surname?") + prompt("What's your favourite color?") + "22";


//modalità 3 la + bella

// let name = document.getElementById("name").innerHTML = prompt("What's your name?");
// let surname = document.getElementById("surname").innerHTML = prompt("What's your surname?");
// let favourite_color = document.getElementById("f-color").innerHTML = prompt("What's your favourite color?");
// let password_generator = name + surname + favourite_color;
// document.getElementById("psw-gnr").innerHTML = password_generator + "22";


//modalità 4

// let name = prompt("What's your name?");
// let surname = prompt("What's your surname?");
// let favourite_color = prompt("What's your favourite color?");
// document.getElementById("psw-gnr").innerHTML = (`${name}${surname}${favourite_color}${22}`);