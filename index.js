// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let newArray;
   newArray =  cats.concat(name);
   return newArray;
}

function prependCat(name){
    let newArray;
   newArray =  [name, ...cats]
   return newArray;
}

function removeLastCat(){
    let newArray;
    newArray = cats.slice(0, -1) ;
    return newArray;
}

function removeFirstCat(){
    let newArray;
    newArray = cats.slice(1) ;
    return newArray;
}