// function name(fun){
//     console.log("What  is my name ");
//     fun();
// }
 

// function greet(){
//     console.log("MY name is Ashutosh")
// }
// name(greet); here greet finctionm is passes as a argumnet 
// by the name function and reference of greet function is copy in fun 



//  foreach function 
// let arr=[33,42,45 ,66,78,50];
// arr.forEach(function(num){
//     console.log(num);
// })


// the above function can also by arrow function 
// arr.forEach((num) =>{
//     console.log(num);
// })
 

// above code can also writen as 
// arr.forEach((num) => console.log(num));


// arr.forEach(num => console.log(num)); here we have pass only one value so we use without bracket 


// we canm also pass index  and arrr 
// arr.forEach((num,index ) => console.log(num,index));


// arr.forEach((num,index,a) =>{
//     a[index]=num*2;
//     console.log(num,index);
// })


// console.log(arr); 


//  filter 


// let result=arr.filter((num)=>{return num%2==0;
// })
// console.log(result);


// let Students=[
//     {Name:"Ashutosh" ,Age:20,class:12,Marks:89},
//     {Name:"rohit" ,Age:25,class:12,Marks:99},
//     {Name:"mohit" ,Age:23,class:12,Marks:34},
//     {Name:"anshu" ,Age:20,class:12,Marks:98},
//     {Name:"akash" ,Age:30,class:12,Marks:50},
//     {Name:"atul" ,Age:20,class:12,Marks:56},
// ];
// let result = Students.filter((value) =>{
//     return value.Marks>70;
// });
// let result = Students.filter((value) =>value.Marks>70); we can also write the above 4 line code

// let result =Students.filter(({Marks})=> Marks>70)
// console.log(result);

let arr=[2,3,5,12,15,8,4];

// let even =arr.filter((num)=>num%2==0); collect even number 
// console.log(even);
// let result =even.map((num)=> num*num) squareing even number 
// console.log(result);

  
// let result =arr.filter((num)=>num%2==0).map((num)=>num*num);
// console.log(result)

  
let result =arr.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(result)
