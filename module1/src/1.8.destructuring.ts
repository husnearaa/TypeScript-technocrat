{




// destructuring


const user ={
    id: 345,
    name:{
        firstName: 'Hosneara',
        middleName: 'parvin',
         lastName: 'Popy',
    },
    contactNo: "0170000000",
    address: "uganda",

};



const{
    contactNo,
    name: {middleName},
} = user;





// array destructuring

const myFriends =["chandler", "joy", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;










}