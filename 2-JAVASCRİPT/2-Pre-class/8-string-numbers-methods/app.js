// //          // length

// // let a = "murat "
// // let b = "selin aykurt"
// // console.log(a.length);
// // console.log(b.length);
// // console.log(b[4]);

// //             // concat() + opr.

// // let c = a+b
// // console.log(c);
// // let d = a.concat(b)
// // console.log(d);

// // // let e = 5
// // // let f = 6
// // // let g = e.concat(f)
// // // console.log(g); ---- sadece string de kullanılıyor

// //         // charAt() -- o indekste  olan harfi veirr

// // var x = "clarusway";
// // console.log(x.charAt(0));
// // // console.log(x.charAt(99)); 
// // console.log(x.charAt(x.length-1));



// //         // includes() o içeriğin bulunuo bulunmadığını veirr. True false döner

// // var s = "Hello JOHN, welcome to Clarusway.";
// // // var n = s.includes("john".toLocaleUpperCase());
// // let n  = s.indexOf("e",14) // 14'ncü indexten sonraki e yi bulmak için
// // let n  = s.indexOf("e",20) //2'nci parametre olan indeksten sıralayıp bakarsak ve bulamazsak iptal -1 verir 

// // console.log (n);


//             // replace methodu ilk değeri 2.ile değiştirir.

// var s = "Hello JOHN, welcome to Clarusway.";
// var rep = s.replace(/clarusway/i,"course"); // /i tag i ile insensitive olur
// console.log(rep);
// console.log(s);



//             // search() methodu

// var s = "Hello John, welcome to Clarusway.";
// console.log (s.search("Clarusway"));
// console.log (s.search("C"));


//             //slice() metodu

// var s = "Hello John, welcome to Clarusway.";
// console.log(s.slice(0,8));
// console.log(s.slice(8,10));
// console.log(s.slice(0,15));
// console.log(s.slice(0,12));
// console.log(s.slice(12));
// console.log(s.slice(12,-10));

//                     //split() metodu

// var s = "Hello John, welcome to Clarusway.";

// var arr = s.split(" ");
// // var arr = s.split(""); // tek harf-karakter şeklinde ayrılıyor
// console.log(arr);

//             // substr()

// var s = "Hello John, welcome to Clarusway."

// console.log (s.substr(23,2)); // 23 uncu ındexten sonraki 2 harf

//             // substring() method 

// var s = "Welcome to Clarusway."

// console.log (s.substring(5, 1)); // 5 ile 10 uncu index arası
// var s = "Welcome to Clarusway"

// console.log(s.toUpperCase());

// var s = "                 Welcome to Clarusway                 "

// console.log (s);
// console.log (s. trim());

// TEMPLATE

// const message = "this is \nmy first message"

// const another = `this is 
// my "second" message`


// function kdv(v, ...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//          sum += args[i];    
//     }
// return sum + ((sum*v)/100);  
// }
// console.log(kdv(18,100,200,300))


// var a = ['dog','cat','hen'];
// a[100] = 'fox';
// console.log(a.length);
// console.log(a[96]);
// console.log(a[1]);

// var test = 3;
// test |= 2;
// console.log(test)

// const res = prompt('kelime giriniz:');
// function reverse(res){
//     return res.split("").reverse().join("");
// }
// console.log(reverse(res));

// var sentence = "   Template Literals or template strings is have multi-line strings without any funny business.   ";

// var url = "http://sadikturan.com/modern javascript kursu sıfırdan ileri seviye"

// console.log(sentence.length);
// console.log(sentence.trim().split(" ").length);
// console.log(sentence.toLowerCase());
// console.log(sentence.trim());
// console.log(sentence.replace("-",""));

// var str = "http://"
// console.log(url.replace(str,""));
// console.log(url.substr(str.length));
// console.log(url.slice(str.length));

// console.log(url.startsWith("https"));
// console.log(url.startsWith("http"));
// console.log(url.search("https"));
// console.log(url.search(".com"));
// console.log(url.indexOf(".com"));
// console.log(url.toLowerCase().replace(/ /g,"-"));
// console.log(url.toLowerCase().replace(/ı/g,"i"));
// console.log(url.toLowerCase().replace("i","ı"));
