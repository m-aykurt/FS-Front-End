// numbers

let val ;

val = Number("10")
val = Number("10.5")
val = parseInt("10.5")
val = parseFloat("10.5")
val = parseInt("a10.5a")
val = parseInt("10.5a")
val = isNaN("10.5a")
val = isNaN("10.5")

var num = 10.12345677

val = num.toPrecision(6)
val = num.toFixed(4)

// math

val = Math.PI.toFixed()
val = Math.round(2.677).toFixed(4)
val = Math.floor(2.7) // alta yuvarlama
val = Math.ceil(2.7) // üste yuvarlama
val = Math.sqrt(121) // karekök alma
val = Math.pow(2,4) // üs alma
val = Math.abs(-1500)
val = Math.max(Math.abs(562,1213,-125521,525,12,62,8,91,12))
val = Math.floor(Math.random()*100+1)

console.log(val);
console.log(typeof val);