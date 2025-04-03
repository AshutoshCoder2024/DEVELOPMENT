// const map1 =new Map();
// map1.set( 3,9);
// map1.set("ROHIT",10);
// map1.set("AGE",30)
// map1.set("city","RANCHI");
// console.log(map1);



// // map1.set("Age",35); in thsi line age get updated
// console.log(map1); 



// // delete it delete from the key 
// map1.delete(10);
// console.log(map1); 




// // has it only for key for any other it return fasle  
// console.log(map1.has("AGE"));
// console.log(map1.has(30));
// console.log(map1.has("RANCHI"));
// console.log(map1.has("city"))



// // size 
// console.log(map1.size)

// // clear  it delete the entire map
// map1.clear();
// console.log(map1);


// second method to create map

const map1=new Map([
     ["fname","ashutosh"],
     [ 2,"Ranchi"],
     [3,5],
     ["name","raju"],
] )
// const map1=new Map([["fname","ashutosh"],[ 2,"Ranchi"],[3,5],["name","raju"]])
// console.log(map1);

// for (let value of map1)
//     console.log(value);


// // destructuing of arr
// for (let [key,value ] of map1)
//     console.log(key,value);

let result=map1.forEach((key,value)=>console.log(key,value));






