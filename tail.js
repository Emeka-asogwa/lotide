const tail = function(arr) {
  let arrt = [];
  if (arr.length > 1) {
    arrt = arr.slice(1);
  }
  return arrt;
 
};



module.exports = tail;



/// --------- Original code ------------//
//  const assertEqual = function(actual, expected) {
//   //let equal = true;
//   for (let i = 0; i < actual.length; i++) {

//     if (actual[i] !== expected[i]) {
//       console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
//       //equal = false;
//       return false;
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   return true;
// };

// //assertEqual("Lighthouse Labs", "Bootcamp");
// //assertEqual(1,1);


// const tail = function(arr) {
//   let arrt = [];
//   for (let i = arr.length - 1; i > 0; i--) {

//     arrt.push(arr[i]);


//   } return arrt.reverse();
// };
