// vowel problem

// function vowelFinder() {
//     const sentence = prompt("Enter a sentence: ").toLocaleLowerCase();
//     // console.log(sentence)
//     const splitted = sentence.split("");
//     let unique = splitted.filter((item, i, ar) => ar.indexOf(item) === i);
//     const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
//     let vowelList = [];
//     for (i = 0; i < unique.length; i++) {
//         if (vowels.includes(unique[i])) {
//             vowelList.push(unique[i])
//         }
//     }
//     console.log(`The sentence you entered is: ${sentence}`)
//     console.log(`The vowels in the sentence are: ${vowelList}`);
//     console.log(`Total number of vowels: ${ vowelList.length}`);
// }
// vowelFinder();


// let  vowel_count = function(str)
// {
//   var vowel_list = 'aeiouıöü';
//   var vcount = 0;
//   var str1 = str.toLowerCase().trim().replace(" ","")

//   for(var i = 0; i < str1.length ; i++)
//   {
//     if (vowel_list.indexOf(str1[i]) !== -1)
//     {
//       vcount += 1;
//     }

//   }
//   let lng = `vowel length : ${vcount}, cons length: ${str1.length-vcount}`
//   return lng;

// }

// console.log(vowel_count("MERHABA BEN MURATTİ"))
// ;


// fahrenait-to celcius

// const heat = prompt("Please select CF OR FC").toLocaleLowerCase();
// const num = Number(prompt("Please enter to number for convert !"));
// if (heat === "cf"){
//     console.log(`${num} Celcius = `,  ((num * 9/5)+32).toFixed(2), `Fahrenhayt`);
// }else if (heat === "fc") {
//     console.log(`${num} Fahrenhayt = `, ((num-32)*5/9).toFixed(2), `Celcius`);
// }else{
//     console.log("please enter valid value !");
// }

// ODİN PROJECT JS FUNCTİON

// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeAString = myArray.join(' ');
// console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


// prob-1 fizz-buzz

// let answer = parseInt(prompt("enter a number: "));

// for (let i = 1; i <= answer; i++) {
//     if ((!(i % 3)) && (!(i % 5))) {
//         console.log("FIZZ BUZZ");
//     } else if (!(i % 5)) {
//         console.log("BUZZ");
//     } else if (!(i % 3)) {
//         console.log("FIZZ");
//     } else {
//         console.log(i);
//     }
// }