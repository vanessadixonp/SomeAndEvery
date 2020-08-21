/*
function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

*/

function hasOddNumber(arr) {
    return arr.some(e => {
        if(e % 2 !== 0) {
            return true
        }else{
            return false
        }
    })
}

/*
 function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

*/

function hasAZero(num){
    return num.toString().split('')
    .some(n => {
      return n === '0';
    })

  }

/*
function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 


*/

function hasOnlyOddNumbers(arr) {
    return arr.every(number => {
        if(number % 2 !== 0) {
            return true
        }else {
            return false;
        }
    })
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    return arr.every(number => {
        return arr.indexOf(number) === arr.lastIndexOf(number)
    })
}

/*
function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
*/

function hasCertainKey(arr, key) {
    return arr.every(obj => {
         return key in obj
    })
}

/*
 function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

    
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every(item => {
        if(item[key] === searchValue) {
            return true; 
        }else {
            return false;
        }
    })
}
