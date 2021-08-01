// OOP: örnekleyerek açıklarsak, gerçek hayatta gördüğümüz birçok nesnenin bilgisayar ortamına aktarılma şeklidir. Yani bir nesnenin rengi, durumu, ismi, üretim yılı gibi birçok özelliklerin bilgisayar ortamında gösterilmesi buna örnek olarak verilebilir.


// Soyutlama (Abstraction)
// Kapsülleme (Encapsulation)
// Miras Alma (Inheritance)
// Çok Biçimlilik (Polymorphism)

// Davranış ve özellikler soyutlanır ve saklanır. Kapsülleme ile hangi özellik ve davranışın dışarıdan kullanılacağını belirleyebiliriz. Örneğin: Kişinin bizi ilgilendirmeyen kısımlarını private ederek yani saklayarak gizleyebiliriz. Bu olaya kapsülleme adı verilir.
// Kapsülleme Public, Private ve Protected olarak 3 kısımda incelenir.
// Public: Herkesin kullanabildiği özellik ve davranışlara verilen isimdir.
// Private: Sadece kendi sınıfında kullanılan özellik ve davranışlara verilen isimdir.
// Protected: Sınıf ve Miras Alınan alt sınıflarda kullanılmaya açık olanlara verilen isimdir.


// Çok Biçimlilik: Alt sınıflar üst sınıfın gösterdiği davranışları göstermek zorunda değildir. Alt sınıfların farklı davranışları göstermesine Çok biçimlilik denilmektedir.
// Örneğin Gemi ve araba sınıflarını ele aldığımızda bunların hareket tipleri bulunmaktadır. Gemi su üzerinden giderken araba karada hareket etmektedir. Kısaca farklı nesnelerin (araba ve gemi gibi) aynı olaya (hareket tipine) farklı şekilde cevap vermesidir.

// farklı nesnelerin (kedi ve  balık gibi), aynı olaya (beslenme), farklı şekilde icra etmesi vermesidir.


// Javascript te primitive tipler haric diğer tiplerin tamamı objecttir. ancak primite tiplerin bile oblect karşılığı vardır.


let myName = "murat";
let myName1 = new String("murat");

console.log(myName.length);
console.log(myName1.length);

const a = function(){
    return "hello"
}

console.log(typeof a);
console.log(a.prototype);

const student = {
    x:5,
    y:6,
    while:42,
    "okul adi":"saint joseph",

}
// console.log(myObj);
console.log(student["okul adi"]);
console.log(student.x);
console.log(student.y);