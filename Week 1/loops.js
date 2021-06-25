// This will loop code between here and * 3 times
for (var i = 0; i < 3; i++){
    // This will loop code between here and ** twice
    for (var j = 0; j < 2; j++){
    // This will print out twice because of the loop ^
    console.log("   |  |  "); 
    // **
    }
    // if i is NOT equal to 2 then print "-------"
    // it will equal 2 after 2 iterations i.e only print twice
    if(i !== 2){
      console.log("-----------");
    }
// *
}


console.log("All Around The World".charAt(7).toUpperCase());

console.log("All Around The World".charAt(9).toLowerCase());

// use let rather than var

// camelCase use
// eg. favouriteDrink
// thisNumber
// firstName

let favouriteStrain="Silver Haze";

console.log(`My favourite strain is ${favouriteStrain}`); 

favouriteStrain="Northern Lights";

console.log(`My next favourite strain is ${favouriteStrain}`);

// First task
let myName="Alex";
let myAge="30";
let favouriteColour="Green";

console.log(`My name is ${myName}`); 
console.log(`I am ${myAge} years of age`); 
console.log(`My favourite colour is ${favouriteColour}`); 

// Second task
let myBreakfast="Weetos"
let myLunch="Sandwiches"
let myDinner="Carbonara"

console.log(`For breakfast I ate ${myBreakfast}`); 
console.log(`For lunch I ate ${myLunch}`); 
console.log(`For dinner I will eat ${myDinner}`); 

let tomBreakfast="Toast"
let tomLunch="Sandwiches"
let tomDinner="Salt and pepper chicken"

console.log(`For breakfast tomorrow I will eat ${tomBreakfast}`); 
console.log(`For lunch tomorrow I will eat ${tomLunch}`); 
console.log(`For dinner tomorrow I will eat ${tomDinner}`); 

// Third task (Not working)
let birthDate=("10/10/1990");
let todaysDate=("02/06/2021");

let Difference_In_Time = todaysDate.getTime() - birthDate.getTime();
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

document.write("Total number of days between dates  <br>"
               + birthDate + "<br> and <br>" 
               + todaysDate + " is: <br> " 
               + Difference_In_Days);



// Fourth task


