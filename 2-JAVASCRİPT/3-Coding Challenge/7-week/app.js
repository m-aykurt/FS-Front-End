class Triangle{
    constructor(first,second,third){
        this.first = first;
        this.second = second;
        this.third = third
    }
        

    validation(){
        let arr = [this.first, this.second , this.third]
        if (this.first>0 && this.second>0 && this.third>0){
            if(this.first + this.second > this.second && this.second +this.third  > this.first && this.third + this.first > this.second){
                console.log("This is proper Triangle");
            }
            
        }
    }
}

class Equilateral extends Triangle{
    constructor(first, second, third){
       super(first, second, third)
       if (first===second && second===third && third === first){
           console.log("This is Equilateral triangle. ");
       }
    }
}

const tri1 = new Equilateral(60,60,60)

class Isosceles extends Triangle{
    constructor(first, second, third){
        super(first, second, third)
        if (first===second || second===third || third === first){
            console.log("This is Isosceles triangle. ");
        }
     }
}
const tri2 = new Isosceles(50,50,80)

class Scalene extends Triangle{
    constructor(first, second, third){
        super(first, second, third)
        if (!(first===second || second===third || third === first)){
            console.log("This is Scalene triangle. ");
        }
     }
}
const tri3 = new Scalene(70,30,80)

tri3.validation()