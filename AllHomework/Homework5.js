// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 */

 let sent1 = 'yOU lIve onLy Once';
 let senArr = sent1.toLowerCase().split(' ');
 let sen1TitleCase = '';
 
 for (let index = 0; index <= senArr.length - 1; index++) {
 let titleCase = senArr[index].charAt(0).toUpperCase() + senArr[index].slice(1);
   sen1TitleCase = sen1TitleCase.concat(titleCase + " ");
   console.log(sen1TitleCase);
 }
 
 console.log(sen1TitleCase);

 let sentence = 'I need a beer';
 let sentence_arr = sentence.toLowerCase().split(' ');
 let titleCase = '';

 for (let index = 0 ; index <= sentence_arr.length-1 ; index++){
    let titleCase = sentence_arr[index].charAt(0).toUpperCase() + sentence_arr[index].slice(1)
    let titleCase = titleCase.concat(titleCase + " ")
    console.log(titleCase)
   
 }



/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

let sentence1 = 'Have a great day';
let sent1_arr = sentence1.split(' ');
console.log(sent1_arr)
let sentence2 = ''


for (let index = sent1_arr.length-1 ; index >= 0 ; index--) {
    sentence2 = sentence2 + ' ' + sent1_arr[index]
    
}
console.log(sentence2)


let sen1 = 'coding is really fun';
let sen1Arr = sen1.split(' ');
let sen2 = '';
for(let index = sen1Arr.length - 1; index >= 0; index--) {
 sen2 = sen2 + ' ' + sen1Arr[index];
}
console.log(sen2);









/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

let numbersarr = [1, 2, 3, 4, 5];
let sumOfVar = 0;
for (let i=0 ; i <= numbersarr.length-1 ; i++){
    sumOfVar = numbersarr[i]  + sumOfVar;
    
}
console.log(sumOfVar)

//loop 1 ->  getting first number --> add to sum
//loop 2 -> get second number add to sum
//loop 3 -> get thirsd number add to sum 
//loop 4 -> get 4th number add to sum
//etc 
//print sum

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let numbersarr2 = [1, 2, 3, 4, 5];
 let sumOfVar2 = 0;
 for (let i=0 ; i <= numbersarr2.length-1 ; i++){
     sumOfVar2 = numbersarr2[i]  + sumOfVar2;
     // console.log(sumOfVar )
 }
 console.log(sumOfVar2/numbersarr2.length)