// const vechileObj = {
//   type: "car",
//   color: "red"
// }

// console.log(vechileObj);



// function VehicleFunc(type, color) {
//   return {
//     type,
//     color
//   };
// }

// const CarOne = VehicleFunc("car", "red");

// console.log(CarOne);


// // Here we are creating blue print for Vehicle
function Vechile(type, color) {
  this.type = type; // this keyword helps us constructing
  this.color = color;

  // State / Action
  const driving = () => {
    console.log(`${this.color} color ${this.type} is driving`)
  }

  this.driving = driving;

}

var CarTwo = new Vechile("car", "red"); // new keyword indicates instantiation (creating new object)
 
// console.log(CarTwo);
// console.log(typeof CarTwo);

// const VechileDef = (type, color) => {

//   // In arrow function **this** point to its parent
//   this.type = type;
//   this.color = color;

//   // return {
//   //   type,
//   //   color
//   // }
// }

// // Arrow Function will not be constructable
// // const NewCar = new VechileDef("car", "Yellow");



// const SampleObj = {
//   name: "Sanjay",
//   role: 'developer',
//   displayInfo: function(){
//     console.log(this);
//   }
// }

// const TempObj = SampleObj;


// TempObj.displayInfo();

// console.log(SampleObj);

// Class Definition 
class Vechile {

  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  // function keyword inside class
  driving () {
    console.log(this);
  }

  // Setter ---> Sets the values of the Object
  setValues (type, color) {
    this.type = type;
    this.color = color;
  }

  // Getter ---> Returns the Values of the Object
  getValues (){
    return {
      ...this
    }
  }
  
}

const Car = new Vechile("car", "red");// new means instantiation 

// console.log(Car);

// // Inheritance
class Bike extends Vechile {
  
  constructor(type, color, speed) {
    super(type, color); // Calling the constructor of the Parent
    this.speed = speed;
  }

}

// const R15 = new Bike("R15", "Blue", 100);

// console.log(R15);
// R15.driving()

// Array Methods

/**
 * Array methods we have already seen
 * Foreach
 * push
 */

// Foreach

const arr1 = [1,2,3,4,5];

// const x = 2;
// Iterate and print square element in the array
// Return type of for each --> undefined
// Passing an external parameter ---> 
// const tempVar = arr1.forEach(function(ele, i, arr) {
//   console.log("Multiply", 2 * ele);
//   console.log("Index", i);
//   console.log("Complete Array", arr)
//   console.log(this);
//   console.log("###########################################################");
// }, 30);

// console.log(tempVar);
  


console.log(arr1)

// Map 
// Return Type: Array of returned values of each Iteration
// const mapArr = arr1.map(function(ele, i, arr) {
//   return ele * this;
// }, 30)
// // const mapArr = arr1.map((ele, i, arr) => ele * 30)

// /**
//  * 1 ==> [30]
//  * 2 ==> [30, 60]
//  * 3 ==> [30, 60, 90]
//  * ...
//  */
// console.log(mapArr);


// Filter
// callback should return true or false on each iteration
// based on this return value filtered arr is returned from filter
//
const arr2 = [1,2,3,4,5,6];
const resultArr = [];
// Filter only the Odd number of arr2
arr2.forEach((ele) => {
  if(ele % 2) resultArr.push(ele);
})

console.log("Method 1",resultArr);
// Odd
console.log("Method 2", arr2.filter((ele) => ele % 2 ));

// Odd
// console.log("Method 2", arr2.filter((ele) => !(ele % 2) ));

const objArr = [
  { id: 1, stuName: "Sanjay", std: 10 },
  { id: 2, stuName: "Saravanan", std: 12 },
  { id: 3, stuName: "Sam", std: 8 },
  { id: 4, stuName: "Sammy", std: 6 },
];

// Filtered Output
// all student above 8 std ---> 
/**
 * [
 *  { id: 1, stuName: "Sanjay", std: 10 },
 *  { id: 2, stuName: "Saravanan", std: 12 }
 * ]
 * 
 */
// [].forEach
// [].map
// [].filter

const above8Arr = objArr.filter(({ std }, i) => std > 8);
console.log(above8Arr)
