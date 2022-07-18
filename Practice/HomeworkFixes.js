
/**  HOMEWORK 5  QUESTION 1 FIX */


let sentence = 'I need a beer';
let sentence_arr = sentence.toLowerCase().split(' ');
let titleCase = '';

for (let index = 0 ; index <= sentence_arr.length-1 ; index++){
 let titleCase2 = sentence_arr[index].charAt(0).toUpperCase() + sentence_arr[index].slice(1);
 titleCase = titleCase.concat(titleCase2 + " " );

}
console.log(titleCase);


/**  HOMEWORK 4  QUESTION 1 FIX */

let studentScore = 15;
let maxScore = 100;

let scorePercentage = (studentScore/maxScore)*100;

if(scorePercentage >= 91){
    console.log(`Student score -> ${scorePercentage} % -> Grade-A`);
} else if ((scorePercentage) >= 81 && (scorePercentage <= 90.99)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-B`);
} else if ((scorePercentage >= 71) && (scorePercentage <= 80.99)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-C`);
} else if ((scorePercentage >= 61) && (scorePercentage <= 70.99)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-D`);
} else if ((scorePercentage >= 51) && (scorePercentage <= 60.99)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-E`);
} else if ((scorePercentage >= 51) && (scorePercentage < 51)){
    console.log(`Student score -> ${scorePercentage} % -> Grade-F`);
} else {console.log(`invalid score`)}


   
