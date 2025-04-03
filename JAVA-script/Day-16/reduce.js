// const arr=[2,4,9,6,4];
// let result =arr.reduce(( acc,curr)=>{
// console.log(acc,curr);
// acc+=curr;
// return acc;
// } ,0) 0 is the initilize value for acc
// let result =arr.reduce((acc,curr)=> acc+curr ,0);
// console.log(result);

/*  in reduce there are two parameter accumulator acc which is assign by the return value 
and current curr which is assign by all the value of array and a 
initialize valu */

const  arr=[ "apple","orange", "apple", "banana", "apple","orange" ,"banana", "orange"];
// let result =arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else 
//     acc[curr]=1;

//     return acc;
// } ,{} );
// console.log(result);

let result=arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
    acc[curr]=1;

     return acc;
},{});
console.log(result);