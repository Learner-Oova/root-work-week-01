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