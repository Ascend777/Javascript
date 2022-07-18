let sent1 = 'yOU lIve onLy Once';
let senArr = sent1.toLowerCase().split(' ');
let sen1TitleCase = '';
for (let index = 0; index <= senArr.length - 1; index++) {
 let titleCase = senArr[index].charAt(0).toUpperCase() + senArr[index].slice(1);
  sen1TitleCase = sen1TitleCase.concat(titleCase + " ");
}
console.log(sen1TitleCase);




let sentence = 'I need a beer';
let sentence_arr = sentence.toLowerCase().split(' ');
let titleCase = '';

 for (let index = 0 ; index <= sentence_arr.length-1 ; index++){
 let titleCase = sentence_arr[index].charAt(0).toUpperCase() + sentence_arr[index].slice(1);
 titleCase = titleCase.concat(titleCase + " ");

   
 }

 console.log(titleCase);
   