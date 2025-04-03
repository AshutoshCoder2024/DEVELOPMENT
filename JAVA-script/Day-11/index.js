// Object seal
// const obj={
//     Name:"Ashutosh",
//     Age:20
// }
// Object.freeze(obj);
// //  obj.Name="Ashu";  this line not working because we freez our object obj 
// console.log(obj.Name);



// object seal
// const object1 = {
//     property1: 42,
//   };
  
//   Object.seal(object1);
//   object1.property1 = 33;
//   console.log(object1.property1);
  // Expected output: 33
  
//   delete object1.property1; // Cannot delete when sealed
//   console.log(object1.property1);
  // Expected output: 33





//   Destructrucing 


//  for object 

// const obj={
//     Name:"Ashutosh",
//     Age:20,
//     Class:12,
//     address:{
//         city:"Ranchi",
//         pincode:834001,
//         state:"Jharkhand",
//     }
// };

// const {Name,Age}=obj;
// console.log(Name);


// const {address}=obj;
// console.log(address);


// const {Name:full_name,Age:Ummer }= obj;
// console.log( full_name,Ummer);

// const {Name,Age,...obj2}=obj; Name aue Age ko chor k baki jo v key hai wo Obj2 me jayeag (like class and object address)
// console.log(obj2);

// const {address:{city,state}}=obj;
// console.log(city);
// console.log(state)





//  for array

// const arr=[2,6,4,11,444,2213];

// const [first,second,]=arr;
// console.log(first);
// console.log(second);

// const [first,second,...arr2]=arr; 2 First me 6 first me rest element in arr2 
// console.log(arr2);


// const people={
//     id:85585,
//     typeof:"ab",
//     arr:[1,2,3,]
// }
// console.log(people);

// const {arr:arr2}=people;
// console.log(arr2);

// const {arr:[first,second]}=people;
// console.log(first,second);

const user={
    Name:"Ashutosh",
    Age:20,
    work:function(){
        console.log("Helle Everyone");
    }
};
const {work}=user;
work();







  