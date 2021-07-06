let index_can;
let index_ada;

const kg_can = 60;
const kg_ada = 40;

const height_can=1.70;
const height_ada=1.70;

index_can = (kg_can) / (height_can**2);
index_ada = (kg_ada) / (height_ada**2);

console.log(index_can.toFixed(2));
console.log(index_ada.toFixed(3));

let ada_higher  = index_ada > index_can;
let can_higher  = index_can > index_ada  ;

console.log("adanın vki can'ın vki'sinden daha büyüktür "+ada_higher);
console.log("can'ın vki ada'nın vki'sinden daha büyüktür "+can_higher);

let ada_zayif = (index_ada>=0) && (index_ada<=18.4);
let ada_normal = (index_ada>=18.5) && (index_ada<=24.9);
let ada_fazla = (index_ada>=25) && (index_ada<=29.8);
let ada_obez = (index_ada>=29.9) && (index_ada<=35);

console.log("ada_zayif :"+ada_zayif);
console.log("ada_normal :"+ada_normal);
console.log("ada_fazla :"+ada_fazla);
console.log("ada_obez : "+ada_obez);




