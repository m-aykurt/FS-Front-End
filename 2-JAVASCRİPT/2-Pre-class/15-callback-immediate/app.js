// CALLBACK FUNC

let val;

function Multi(a,b,c,callback){
    let arr = [];
    
    if(callback && typeof callback==="function" ){

        
        for (let i=0; i<3; i++){
            arr[i] = callback(arguments[i]*2)
        }
        return arr
    }
}

function addOne(a){
    return a+1
}
function addTwo(a){
    return a+2
}
function addThree(a){
    return a*3
}
let add4 ;

val = Multi(5,10,100,add4)

console.log(val)


// immediate func

function welcome(){
    var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    var today = new Date();
    var msg = "welcome. today is "+days[today.getDay()];
    return msg

}

// immediate func sadece bir defa acılınca calısır

(function(name){
    var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    var today = new Date();
    var msg = "welcome "+name+" today is "+days[today.getDay()];
    console.log(msg)
}("murat"))