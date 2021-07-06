          // WHILE LOOPS

// let i =0, sum = 0;

// while (i<6){
//     sum = sum +i;
//     console.log(i);
//     i++;

// }
// console.log(`total is: ${sum}`);

            //do while 

// let i = 5;
// sum = 0;

// do{
//     sum+=1;
// } while (i<5);
// console.log(sum);

          //for loops 

// for (let i=0;i<8; i++){
//     console.log("i",i);
// }
// let counter = 0;
// for (let i=0;i<50; i++){
//     // console.log("i",i);
//     counter +=i
//     console.log(counter);
// }
// console.log(counter);

// let counter = 0;
// for(i=0;i<=50;i++){
//     if(i%10===0) {
//         counter+=i
//     }
// }
// console.log(counter);

// let brand = "Clarusway";
// console.log(brand.length);
// for (let i = 0; i < brand.length; i++) {
//   console.log(i, brand[i], brand.length - i, brand[brand.length - i - 1]);
// }

// for (i = brand.length; i>0; i--){
//     console.log(i,brand[i-1]);
// }

// let brand = "Clarusway"
// let text = ""
// for(let i = 0; i < brand.length; i++ ){
//     text = i + brand[i]
//     console.log(text)
// }


// let bests = ["clarusway","google","amazon","tesla"]

// for (let i = 0; i < bests.length; i++){
//     console.log(i+1,bests[i]);
// }

            // break

// let i = 0;
// while(i<10){
//     if (i===6){
//         break;
//     }
//     i++;
//     console.log(i);
// }
                // contunie
// let i = -1;
// while(i<10){
//     i++;
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }

// let i =0;
// for (i=0; i<7; i++){
//     if (!(i%2===1))
//     {
//         continue
//     }
//     console.log(i);
// }

// let brand ="clarusway"
// for (i = brand.length; i>=0; i--){
//     console.log(brand[i-1]);
// }

// let new_text = "";
// for (i=0; i<brand.length;i++){
//     console.log(brand[brand.length-(i+1)]);
//     new_text = new_text+ brand[brand.length-(i+1)];
// }
// console.log(new_text);


 // carpim tablosu
// for (let i=1; i<11; i++){
    
//     for (let j=1; j<11; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// } 


// const number = [13,34,24,67,23,90]
// toplam = 0
// for (i=0;i<number.length;i++){
//     toplam += number[i]
// }
// console.log(toplam);

// faktöriyel
// let numb = prompt("enter a number:")
// result = 1
// for (i=numb;i>0;i--){
//     result*=i
// }

// console.log(result);

//fizz-buzz

// for (i=1;i<100;i++){
//     if(i%3===0){
//         console.log("fizz");
//     } else if (i%5===0){
//         console.log("buzz");
//     } else if (i%15===0){
//         console.log("fizz-buzz");
//     } else{
//         console.log(i);
//     }
// }

for (let i=1; i<11; i++){
    for(let j=1; j<11; j++){
        console.log(`i x j =` , i*j);
    }
}