// Reference Type --> Object

const user: {
   // company: "AetherZen"; // type --> literal types
   readonly company: string; // type --> literal types
    firstName: string;
    middleName?: string;  // optional type
    lastName: string; 
    isEmployee: boolean;
} ={
    company: "AetherZen",
    firstName: 'Hosneara',
    lastName: 'Popy',
    isEmployee: true,
};



// user.company = 'AZ'