var readlineSync = require('readline-sync');
let inputName = readlineSync.question("What is your name? ");
console.log(" Hi: " + inputName);
console.log("Ready to start dictionary War?");
let startOption = readlineSync.question( "Options: Yes Or No : ")

switch(startOption) {
  case "Yes":
  case "yes":
  case "y":
  case "Y":
    console.log("instructions: The goal of the game is to pick the correct definition for the word that shows up on the screen!");
    break;
 default:
    console.log( "You didn't say yes so we won't fo any further, See you later :)" );
    return;

}

console.log("Let's begin this game!!");


let questionlist =          [ {word : "Grenadine",
                             definition: "Thin slik",
                             wrong_def: ["To dance in line","An animal" , "A piece of material"] },

                              {word: "Disciform",
                             definition: "Round or oval in shape",
                             wrong_def: ["An attachment for a bike", "Underyielding", "Tremulous movment"]},

                             {word: "Erotesis",
                             definition: "Rhetorical questioning",
                             wrong_def: ["A techinque in music","A native land","A type of grass"]},

                             {word: "Nucha",
                             definition: "The nape of the neck",
                             wrong_def:["Sheep skin", "A native land"]},

                              {word: "Hippophile",
                              definition: "Lover of hourses",
                              wrong_def:["One who pretendes to be wise"," Absolute power"," Warship of nobility"]}]



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(questionlist);

// console.log(questionlist);
let points = 0;

questionlist.forEach((question)=>{

  let warWord    = question.word;
  let wrongList  =question.wrong_def;
  wrongList.push(question.definition); // adding the definition to the wrong list

  shuffleArray(wrongList); // shuffling the wrong list so that the answer is not always at the end

  console.log(warWord);
  console.log(wrongList);
  let answer = readlineSync.question( "which one do you think it means? ");
   if (answer === question.definition){
     points++;
   }

});

console.log("Hey "+inputName+" You got "+points+ " out of 5");

if(points > 3){
  console.log("You did a great job");

}else{

  console.log(":(  try again, it will be better next time");

}
