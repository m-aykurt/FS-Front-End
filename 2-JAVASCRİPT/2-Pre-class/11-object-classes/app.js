// class Dog {
//     constructor(name, foot=4) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//   }
//   myDog = new Dog("Buldog",3) 
//   console.log(myDog);
//   console.log(myDog.foot);

//   class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     static hello(){
//        return "Hello";
//     }
//   }
//   myDog = new Dog("Buldog")
//   console.log(myDog.foot);
//   console.log(myDog);

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     current(){
//        return "I have a " + this.dogName;
//     }
//   }
  
//   class Specy extends Dog {
//     constructor(name, foot, char) {
//       super(name, foot);
//       this.character = char;
//     }
//     show() {
//       return this.current() + ', it is  ' + this.character;
//     }
//   }
  
//   myDog = new Specy("Buldog", 4, "curious");
//   console.log(myDog.foot);

// class Song {
//     constructor(genre) {
//       this.genre = genre;
//     }
//     get sgenre() {
//       return this.genre;
//     }
//     set sgenre(newgenre) {
//       this.genre = newgenre;
//     }
//   }

// mysong = new Song("Jazz");
// console.log(mysong);
// console.log(mysong.sgenre);
// console.log(mysong.newgenre);
// console.log(mysong.sgenre);
// console.log(mysong);


class Song {
    constructor(genre) {
      this.genre = genre;
    }
    get sgenre() {
      return this.genre;
    }
    set sgenre(newgenre) {
      this.genre = newgenre;
    }
  }

  mysong = new Song("Classical");
  mysong.sgenre = "Jazz";
  mysong.sgenre = "Rock"
  console.log(mysong.sgenre);