"use strict";
{
    // destructuring
    var user_1 = {
        id: 345,
        name: {
            firstName: 'Hosneara',
            middleName: 'parvin',
            lastName: 'Popy',
        },
        contactNo: "0170000000",
        address: "uganda",
    };
    var contactNo = user_1.contactNo, middleName = user_1.name.middleName;
    // array destructuring
    var myFriends = ["chandler", "joy", "ross", "rachel", "monica", "phoebe"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
