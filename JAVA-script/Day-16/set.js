// const set1=new Set([2,3,7,8,5]);
// console.log(set1);


// const set2=new Set();

// adding new element 
// set2.add(2);
// set2.add(3);
// set2.add(5);

// console.log(set2);

//  delete element 
// set2.delete(3);
// console.log(set2);


// has: it is check whether the element is present or not 
// if present return true otherwise false


// let user_id=new Set(["ashutosh_22","anupriyasoni__","mohiot_12","rohit_negi9"]);
// let new_id="ashutosh_22";
// console.log(user_id.has(new_id));

// let id="ashu222";
// console.log(user_id.has(id));

// // clear
// user_id.clear();
// console.log(user_id);


// let arr=[10,20,10,40,30,50];


// // convert arr to set 
// console.log(arr);
// let set1= new Set(arr);
// console.log(set1);

// // cnvert set ro array 

// arr=[...set1];
// console.log(arr);



// union of two set 
let set1=new Set([20,40,10,50,60,30,20]);  
let set2=new Set([20,10,80,60,70,20]);  
let set3 =new  Set([...set1,...set2]);
// console.log(set3);


// Intersection 
let result =new Set([...set1].filter((num)=>set2.has(num)));
console.log(result);




