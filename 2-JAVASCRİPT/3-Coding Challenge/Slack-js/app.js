

// vowel problem

function vowelFinder() {
    const sentence = prompt("Enter a sentence: ").toLocaleLowerCase();
    // console.log(sentence)
    const splitted = sentence.split("");
    let unique = splitted.filter((item, i, ar) => ar.indexOf(item) === i);
    const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
    let vowelList = [];
    for (i = 0; i < unique.length; i++) {
        if (vowels.includes(unique[i])) {
            vowelList.push(unique[i])
        }
    }
    console.log(`The sentence you entered is: ${sentence}`)
    console.log(`The vowels in the sentence are: ${vowelList}`);
    console.log(`Total number of vowels: ${ vowelList.length}`);
}
vowelFinder();


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
