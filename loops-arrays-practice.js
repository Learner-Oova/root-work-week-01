//1. Array of 6 Names Exercise

let firstName;
firstName = ['Ego', 'Aishat', 'Watife', 'Imma', 'Eniola', 'Ayo'];

console.log(firstName[0]);
console.log(firstName[2]);
console.log(firstName[(firstName.length - 1)]);

//2. Using for loop to print out array
for(let x = 0; x < firstName.length; x++){
    console.log(firstName[x]);
}

//3. Even Numbers
let item = [4, 7, 10, 13, 16, 19, 22];
console.log(`Even Numbers in the array ${item} are:`);
for (let x = 0; x < item.length; x++){
    if(item[x] % 2 === 0){
        console.log(item[x]);
    }
    else{
        continue;
    }
}

//4. Total score in an Array
let total = 0;
let score = [32, 43, 56, 66, 71];
for(let x = 0; x < score.length; x++){
    total += score[x];
}
console.log(`Total scores = ${total}`);

//5. Maximum score
let max;
let value = [12, 45, 7, 89, 23, 56];
max = value[0];
for (let x = 0; x < value.length; x++){
    if(max > value[x]){
        continue;
    }
    else{
        max = value[x];
    }
}
console.log(max);

//Practice Array methods
let state = ['Lagos', 'Osun', 'Abia'];
state.push('Kano');
console.log(state);
state.pop();
console.log(state);
state.unshift('Kano');
console.log(state);
state.shift();
console.log(state);

/* 
Why are arrays useful?
    They store many values of the same kind under one name, 
    with each item accessible by its index. 
    This keeps related data organized, avoids dozens of separate variables, 
    and gives fast access to any element.

Why loops and arrays work well together?
    Array items sit in sequential, numbered positions, 
    so a loop can walk through them with a counter (0, 1, 2, ...). 
    One short block of code can then process every element, 
    whether the array has 5 items or 5 million.

Challenges: 
    I learnt how to use the continue keyword to skip an item if it doesn't satisfy a condition,
rather than terminate the loop.
    I also spent a long time trying to crack the maximum array using loops, 
    it was a success anyways.

*/