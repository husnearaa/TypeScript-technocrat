{


// nullable types / unknown type

const searchName = (value: string | null) =>{
   if(value){
    console.log("Searching");
   } else{
    console.log("There is nothing searching");
   }
}

searchName(null);



const getSpeedMeterPerSecond = (value:unknown)=>{
    if(typeof value === 'number'){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`the speed is ${convertedSpeed} ms^-1`)
    }

    if(typeof value === "string"){
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`the speed is ${convertedSpeed} ms^-1`)
    }
    else{
        console.log("wring input");
    }
};

getSpeedMeterPerSecond(`1000 km^-1`);






// never

const  throwError=(msg: string):never =>{
throw new Error(msg);
};

throwError('muskil se error hogaya');







}