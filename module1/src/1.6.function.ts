{


// Learning function
// Normal function
// Arrow Function


// Normal function
function add(num1 : number, num2: number):number{
    return num1 + num2;
}

add(2, 2);



// Arrow Function
const addArrow = (num1: number, num2:number): number => num1+num2




// object --> function --> method

const poorUser ={
    name: 'Hosneara',
    balance: 0,
    addBalance(balance: number) :string {
        return `my new balance is : ${this.balance + balance}`;
    }
}



// callback function
const arr : number[] = [1, 4, 10];
const newArray : number[] = arr.map((element : number): number => element*element);


}