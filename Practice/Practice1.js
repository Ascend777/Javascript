let sentence1 = 'Have a great day';
let sent1_arr = sentence1.split(' ');
console.log(sent1_arr)
let sentence2 = ''


for (let index = sent1_arr.length-1 ; index >= 0 ; index--) {
    sentence2 = sentence2 + ' ' + sent1_arr[index]
    
}
console.log(sentence2)

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 numArr = [1, 2, 3, 4, 5];
 sumOfVar = 0
 for (let i=0 ; i=numArr.length-1 ; i++ )
 sumOfVar = numArr[i] + sumOfVar
 

//  let numbersarr = [1, 2, 3, 4, 5];
//  let sumOfVar = 0;
//  for (let i=0 ; i <= numbersarr.length-1 ; i++){
//      sumOfVar = numbersarr[i]  + sumOfVar;[]
     
//  }
//  console.log(sumOfVar)
 
