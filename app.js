console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let num = 0; num < 100; num++){
    if (num % 2 != 0){
        console.log(num)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let num = 1; num < 100; num++){
    if (num % 5 == 0 && num % 3 == 0){
        console.log(num, "FIZZBUZZ");
    }
    else if (num % 5 == 0){
        console.log(num, "BUZZ");
    }
    else if (num % 3 == 0){
        console.log(num, "FIZZ");
    }
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n")
let num = 0;
while (num < 100){
    if (num % 2 != 0){
        console.log(num);
    }
    num++;
}

let num2 = 0;
do{
    if (num2 % 2 != 0){
        console.log(num2);
    }
    num2++;
}while (num2 < 100)

let num3 = 1;
while (num3 < 100){
    if (num3 % 5 == 0 && num3 % 3 == 0){
        console.log(num3, "FIZZBUZZ");
    }
    else if (num3 % 5 == 0){
        console.log(num3, "BUZZ");
    }
    else if (num3 % 3 == 0){
        console.log(num3, "FIZZ");
    }
    num3++;
} 

let num4 = 1;
do{
    if (num4 % 5 == 0 && num4 % 3 == 0){
        console.log(num4, "FIZZBUZZ");
    }
    else if (num4 % 5 == 0){
        console.log(num4, "BUZZ");
    }
    else if (num4 % 3 == 0){
        console.log(num4, "FIZZ");
    }
    num4++;
}while (num4 < 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let isFound = false;
for (let num5 = 1; num5 < n; num5++){
    if (num5 == value){
        console.log("Found", value);
        isFound = true;
        break;
    }    
}
if (!isFound){
    console.log("Value not found.");
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000
for (let num = start; num <= end; num++){
    if (num % buzzDivisor == 0 && num % fizzDivisor == 0){
        console.log(num, "FIZZBUZZ");
    }
    else if (num % buzzDivisor == 0){
        console.log(num, "BUZZ");
    }
    else if (num % fizzDivisor == 0){
        console.log(num, "FIZZ");
    }
}