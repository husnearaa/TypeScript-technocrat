{


// spread operator
// rest operator
// destructuring




// spread operator

const book1: string[] = [ "english", 'bangla', "math"];

const book2: string[] = [ "science", 'statistics', "sociology"];

book1.push(...book2)




const mentors1 ={
    typesctipt: 'mezba',
    redux: 'mir',
    dbms: 'mizan'
}

const mentors2 ={
    prizma: 'firoz',
    next: 'tanmoy',
    cloud: 'nahid'
}

const mentorList ={
    ...mentors1,
    ...mentors2
}



// rest operator

const greetFriends = (...friends: string[]) => {
    // console.log(`hi $(friend1) $(friend2) $(friend3)`);
    friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
};

greetFriends("Abul", "kabul", "babul", "labul")


}