const name = "Sally";
const age = 34;
const pet = "horse";


const greetingBest = `Hello ${name} you seem to be ${age - 10}, What a love ${pet} you have`;


function greet (name = '', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age - 10}, What a love ${pet} you have`;
}