
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

const myArr = [1,2,3,4,5]

const multByTwo=(num)=> {
  return num * 2
}

function map(array, iteratee){
  const newArr = [] 
  for (let index = 0; index < array.length; index++) {
    newArr.push(iteratee(array[index])) 
  }
  return newArr
}

console.log(map(myArr, multByTwo));
 


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray

const myArrTwo = [3,7,12,33,120]

const removeOverTweleve=(num)=>{
  if(num <= 12) return num
}

function filter(array, iteratee){
  const myNewArrTwo = []
  for (let index = 0; index < array.length; index++) {
    if(iteratee(array[index])){ 
      myNewArrTwo.push(iteratee(array[index]))
    }
  }
  return myNewArrTwo
}

console.log(filter(myArrTwo, removeOverTweleve));


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null

myArrThree = ['Mike', 'Joe', 'Cindy', 'Cash', 'Lisa', 'Vern']

const findTheName=(name)=>{
  if(name === 'Cash'){
    return name
  }
}

function find(theArray, fnc){
  for (let index = 0; index < theArray.length; index++) {
    if(theArray[index] === fnc(theArray[index])){
      return theArray[index]
    }
  }
  return null
}

console.log(find(myArrThree, findTheName));


//return the last item in theArray

mayArrFour = [2,5,88,44,123, "Word"]

function findLast(theArray){
  return theArray[theArray.length - 1]
}

console.log(findLast(mayArrFour));


//return the first element of the array

function head(theArray){
  return theArray[0]
}

console.log(head(mayArrFour));


//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array

myArrFive = [2,4,6,8,10,12,14,16]

function reverse(theArray){
  const newArrFive = []
  for (let index = theArray.length - 1; index >=0; index-- ) {
    newArrFive.push(theArray[index])
  }
  return newArrFive
}

console.log(reverse(myArrFive));


//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array

myArrSix = ["Honda","VW","Ford","Bentley"]

function tail(theArray){
  const newArrSix = []
  for (let index = 1; index < theArray.length; index++) {
    newArrSix.push(theArray[index])
  }
  return newArrSix
}

console.log(tail(myArrSix));


//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray

const myArrSeven = [154, 67, 3, 2000, 421, 99] 


function sort(theArray){
  const copiedArr = myArrSeven 
  let isItTrue = true
  while (isItTrue) {
    isItTrue = false
    for (let index = 0; index < theArray.length; index++) {
      if (theArray[index] > theArray[index + 1]){
        let tempIndex = copiedArr[index]
        theArray[index] = theArray[index + 1]
        theArray[index + 1] = tempIndex
        isItTrue = true
      }
    }
  }
  return theArray
}

console.log(sort(myArrSeven));



exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
