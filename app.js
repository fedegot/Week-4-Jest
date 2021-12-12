var _ = require('lodash');

// const funct = (a, b) => {
//     return a + b;
// }





//Challenges 1

// • To make sure what is returned is not ‘null’
// • A value that is truthy
// • A value that is not falsy
// • Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function
// • A function that will return items in an array with 6 or more
// characters
// • Can you refractor any of your code?




    let arr = []
    

    const prop = (b, c) => {
        let obj1 = b
        let obj2 = c

    if (obj1.toString().length > 6 && obj2.toString().length > 6){
    arr.push(b, c);
    return arr;
    } else {
        return 'not working' 
    }
    };
   

    let result = prop(4854111414, 44444545)

    console.log(result) 



//////////// BK /////////////
// let arr = []


//  const prop = (b, c) => {
//     let obj1 = b
//     let obj2 = c
//     let push = arr.push(obj1, obj2);

//     return arr
 
//  };
// console.log(prop(2, 3))



 
 
// Challenges 2


// Create functions and test on the following…
// • Convert a number to a string
// • Display the correct planet with the number order it is away from the sun
// (planet(3) //will return ‘Earth’)
// • Count the amount of students present in the class. With an array
// or boolean values, count how many students are present (true =
// present)
// ([true, true, true, false, true] //will return 5)
// • Square every digit and concatenate them (must return an integer)
// (squareDigi(34) //will return 916


// • Convert a number to a string
const app = (n) =>{
    let mac = n.toString()
    console.log(mac)
}

app(2)


// • Display the correct planet with the number order it is away from the sun
// (planet(3) //will return ‘Earth’)
var planets = [
    { 'planet': 'mercury (1)',   'distance': 52 },
    { 'planet': 'venus (2)', 'distance': 108 },
    { 'planet': 'earth (3)',   'distance': 147 },
    { 'planet': 'mars (4)', 'distance': 217 },
    { 'planet': 'jupiter (5)', 'distance': 770 },
    { 'planet': 'saturn (6)', 'distance': 1427 },
    { 'planet': 'uranus (7)', 'distance': 2752 },
    { 'planet': 'neptune (8)', 'distance': 4529 },
  ];


 let map = _.sortBy(planets,['distance']);
console.log(map)

// • Count the amount of students present in the class. With an array
// or boolean values, count how many students are present (true =
// present)

let words = 'true true false'.split(' ');
let obj = _.countBy(words, (word) => {
        return word;
    });
console.log(obj);


// Challenges 3


// Create functions and test on the following…
// • Given a year return back the century it is in
// (century(1705) //will return 17)




const getYear = (year) => {

   let marm = year.toString().split("");
    marm.splice(marm.length - 2, 2);
    let marm2 = marm.join(``)
    console.log(`is the ` + marm2 + ` century`)
}

getYear(1520)




// • With an array of ones and zeroes, convert the equivalent binary
// value to an integer
// (binary([0, 0, 0, 1]) //will return 1)
// (binary([0, 1, 0, 0]) //will return 4)
  

const binconv = (bin) =>{

   let conv = bin.toString(``).split(``);
   let conv2 = conv.join(``);
   let result = conv2.replace(/,/g, "");
   let result2 = parseInt(result, 2);
   console.log(result2) 
}

binconv([0, 1, 1, 1,])








module.exports = {
    // funct, 
    prop,

}