// #1
function printHeart() {
    console.log("<3");
}

printHeart();

function multiply(a, b) {
    return a * b;
}

// #2
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// #3
let animal = "Giant Pacific Octopus";
function observe(){
	let animal = "Pajama Squid";
	console.log(animal);
}
observe();

// #4
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
 let deadlyAnimal = "Scorpionfish";
 console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

// #5
const sayHello = (name) => {
    return `Hello ${name}!`;
};

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));