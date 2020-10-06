// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
// [loop body]
// }

// function writeCards( names, events) {
//     for (let people = 3; people < names.length; people++) {
//       console.log(`Thank you, ${names}, for the wonderful ${events} gift!`);
//     }
//     return names;
// }
 
function writeCards( names, events) {
  const newArray = []
 
    for (let counter = 0; counter < names.length; counter++) {
     newArray.push(`Thank you, ${names[counter]}, for the wonderful ${events} gift!`);

      // '.push' correct message/info into newArray on this line
    }
        
    return newArray
  }

  function countDown() {
  let i = 10;
while (i >= 0) 
  console.log(i--);
}