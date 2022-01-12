console.log("Section 3 Default parameters")

/*

example 11:
Topic: default parameters
const defaultExample = (a, b) => a + b
console.log(defaultExample(2))  //NaN

///Lets add a default value to b.
const defaultExample = (a, b=0) => a + b
console.log(defaultExample(2)) //2


--> 1st way

function defaultExample(a,b=0){
return a+b;

}

console.log(defaultExample(5))

--> 2nd way
function defaultExample(a,b){
if(b===undefined){
b=0;
}
return a+b;
}

--> 3rd way
function defaultExample(a,b){
b=b || 2;  //old days, this was default value work.
return a+b;
}


--> 4th way
//using nullish coalescing

function defaultExample(a,b){
b=b ?? 2; // 2019 recommended way
return a+b;
}



Will this work?

const defaultExample = (a, b) => {
  if (b === undefined) {
    b = 5
  }
  return a + b
}

console.log(defaultExample(2, 4))

//Yes output will be 6.

// Instead
const defaultExample2 = (a, b = 5) => a + b

console.log(defaultExample2(3))

//Yes output will be 8.


What will be the output?
Will we get an error?

const defaultExample3 = (a, b=5, c) => a + b + c

console.log(defaultExample3(1, 2, 3)); //6 
console.log(defaultExample3(1, , 3));  // we cannot skip middle variable like this. default parameter can happen only from the right most side. So correct way is that we need to assign a default value to c as well. and we need to call as console.log(defaultExample3(1));

*/
