// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
// [loop body]
// }

function writeCards( names, events) {
    for (let people = 3; people < names.length; people++) {
      console.log(`Thank you, ${names}, for the wonderful ${events} gift!`);
    }
    return names;
}
 
