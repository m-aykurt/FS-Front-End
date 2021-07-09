        // fibonacci numbers

        // num = prompt("give me a number")
        // let F = (function fib(num) {
        //     if (num === 0 || num === 1) return 1;
        //     return fib(num - 1) + fib(num - 2);
        // })(num)
        // console.log(`fib(${num}):`, F);

        // diğer çözüm 

        // var a =0, b =1, c =0;
        // while(a<500){
        //         console.log(c);
        //         c=a+b
        //         a=b;
        //         b=c;
        // }


        // reverse number
        let rev = function (text) {
            let newString = "";
            for (let i = text.length - 1; i >= 0; i--) {
                newString += text[i]
            }
            return newString
        }
        console.log(rev("hello"));

        // function reverseString(str) {
        //     return str.split("").reverse().join("");
        // }
        // console.log(reverseString("hello"))