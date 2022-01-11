console.log("This is First Live lecture of NeoGcamp. ES6+")


//Arrow function
//Version1
const Add22andReturn=(num)=>{
let sum=0;
sum=num+22;
return sum;
}

//version2

const Add22andReturn=num=>{
let sum=0;
sum=num+22;
return sum;
}

//version 3

const Add22andReturn=num=>{

return num+22;


}


//Version 4
const Add22andReturn=num=>num+22;