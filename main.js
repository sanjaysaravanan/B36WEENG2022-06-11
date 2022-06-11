// Map

// const array1 = [1, 4, 9, 16];

// pass a function to map
//const map1 = array1.map(x => x * 2);

//console.log(map1);
// expected output: Array [2, 8, 18, 32]
//                       v  i  arr
// const operateOnArr = (x, y, z) => { 
//   console.log(y);
//   console.log(z);
//   return x * 2 
// };

// const resArr = array1.map(operateOnArr);

// const resArr = array1.map((x, index) => { 
//   console.log(index);
//   return x * 2 
// });

// const resArr = array1.map(function(x) { return x * 2 });

// console.log(resArr);

// const arr = [{ name: 'Sanjay', maths: 57 }, {name: 'Saravanan', maths: 32}];

// const engArr = [56, 76];

// // Output: [{ name: 'Sanjay', maths: 85, eng: 56 }, {name: 'Saravanan', maths: 32, eng: 76}]

// // 
// const resultArr = arr.map((x, i) => {
//   // console.log(x);
//   const tempObj = {...x, eng: engArr[i]};
//   return tempObj;
// });

// console.log(resultArr); // [{ name: 'Sanjay', maths: 85, eng: 56 }, {name: 'Saravanan', maths: 32, eng: 76}]

// Filter eng & maths mark less than 60

// Output: [{ name: 'Sanjay', maths: 85, eng: 56 }]


// . operator
// const filterArr = resultArr.filter(x=>x.eng < 60);

// const filterArr = resultArr.filter(x=>{
//   return x.eng < 60;
// });

// const filterArr = resultArr.filter(({eng, maths})  => eng < 60 && maths < 60); 

// // const filterArr = resultArr.filter(({eng}, index, arr)  => eng < 60); 

// console.log(filterArr);

// const numArr = [9,8,7,6,5,4];

// // Odd Numbers
// // Output: [9,7,5]


// const oddArr = numArr.filter((x) => x%2 );

// console.log(oddArr);

// // Even Numbers
// // Output: [8,6,4]

// const evenArr = numArr.filter((x) => !(x % 2));

// console.log(evenArr);

// const arr = [{ name: 'Sanjay', maths: 57, id: 1 }, { name: 'Saravanan', maths: 32, id: 2 }, { name: 'Sam', maths: 32, id: 2 }];


// // Object with id 2
// // Output: { name: 'Saravanan', maths: 32, id: 2 }

// // find
// const resObj = arr.find(x => x.id === 2);

// console.log(resObj);

// Return Types
// Foreach --> undefined
// map --> new array out each returns of iteration
// Filter --> new array with elements which meets the contions
// find --> element that meets the condition 

// Reduce --> depends on the callback/reducer function's return type

function name() {

}

// Most used function
const name = (args) => {

};

(args) => {}

// Reduce
const arr = [50,40,30,20,10];

// Output sum of each element of the array
const resSum = arr.reduce((prevVal, currVal, index, arr) => {
  console.log(index);
  console.log("PrevVal", prevVal);
  console.log("CurrVal", currVal);
  console.log("##########################################");
  return prevVal + currVal;
}); 
/**
 * 1st iteration index = 1, prevVal = 50, currVal = 40 ---> next prevVal = 90
 * 2st iteration index = 2, prevVal = 90, currVal = 30 ---> next prevVal = 120
 * 3rd iteration index = 3, prevVal = 120, currVal = 20 ---> next prevVal = 140
 * 4th iteration index = 4, prevVal = 140, currVal = 10 ---> return value = 150
 */

console.log("Returned Result From Reduce func", resSum);// sum each elements


// Output difference of each element of the array
const resDiff = arr.reduce((prevVal, currVal, index, arr) => prevVal - currVal);

/**
 * 1st iteration index = 1, prevVal = 50, currVal = 40 ---> next prevVal = 50 - 40 --> 10
 * 2st iteration index = 2, prevVal = 10, currVal = 30 ---> next prevVal = 10 - 30 --> -20
 * 3rd iteration index = 3, prevVal = -20, currVal = 20 ---> next prevVal = -20 -20 --> -40
 * 4th iteration index = 4, prevVal = -40, currVal = 10 ---> return value = -40 -10 --> -50
 */

console.log("Result Difference", resDiff);


const resSumV2 = arr.reduce((prevVal, currVal, index, arr) => {
  console.log(index);
  console.log("PrevVal", prevVal);
  console.log("CurrVal", currVal);
  console.log("##########################################");
  return prevVal + currVal;
}, 100); 
/**
 * 1st iteration index = 0, prevVal = 100, currVal = 50 ---> next prevVal 100 + 50 = 150
 * 2st iteration index = 1, prevVal = 150, currVal = 40 ---> next prevVal 150 + 40 = 190
 * 3rd iteration index = 2, prevVal = 190, currVal = 30 ---> next prevVal 190 + 30 = 220
 * 4th iteration index = 3, prevVal = 220, currVal = 20 ---> next prevVal 220 + 20 = 240
 * ...
 */


console.log("Initial Value Sum", resSumV2);

// Output difference of each element of the array with initial value
const resDiffV2 = arr.reduce((prevVal, currVal, index, arr) => prevVal - currVal, 50);

/**
 * 1st iteration index = 0, prevVal = 50, currVal = 50 ---> next prevVal 50 - 50 = 0
 * 2st iteration index = 1, prevVal = 0, currVal = 40 ---> next prevVal 0 - 40 = -40
 * 3rd iteration index = 2, prevVal = -40, currVal = 30 ---> next prevVal -40 - 30 = -70
 * 4th iteration index = 3, prevVal = -70, currVal = 20 ---> next prevVal -70 - 20 = -90
 * 5th iteration index = 3, prevVal = -90, currVal = 10 ---> next prevVal -90 - 10 = -100
 */

console.log("Result Difference", resDiffV2);


const valArr = ["Sanjay", "developer", "dd-mm-yy", "python"]
const keyArr = ["name", "role", "dob", "skill"]

// Output: {name: 'Sanjay', role: 'developer', dob: 'dd-mm-yy', skill: 'python'}

// Reduce
// Without Initial value
const resultObj = valArr.reduce((prevVal, currVal, index) => {
  if(index === 1) {
    const newObj = {};
    newObj[keyArr[0]] = prevVal;
    newObj[keyArr[1]] = currVal;
    return newObj;
  }

  prevVal[keyArr[index]] = currVal;

  return prevVal;
});

console.log("Result Obj", resultObj);

/**
 * 1st index = 1
 */


// with initial value
const resultObjV2 = valArr.reduce((prevVal, currVal, index) => {

  prevVal[keyArr[index]] = currVal;

  return prevVal;
}, {});

/**
 * 1st index = 0, prevVal = {}, currVal = 'Sanjay' ==> prevVal[keyArr[0]] -> prevVal["name"] = "Sanjay";
 * 2nd index = 1, prevVal = { name: "Sanjay" }, currVal = 'developer' ==> prevVal[keyArr[1]] -> prevVal["role"] = "developer";
 * 3rd index = 2, prevVal = { name: "Sanjay", role: "developer" }, currVal = 'developer' ==> prevVal[keyArr[2]] -> prevVal["dob"] = "dd-mm-yy";
 * ...
 */


console.log("Result Obj V2 ", resultObjV2);



