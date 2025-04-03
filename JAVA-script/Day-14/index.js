const obj={
    Name:"Ashutosh",
    Age:20,
    Gender:"Male"
};

// console.log(Object.keys(obj)) it will aslo give the keys in form of Array


for(let key in obj)
{
    // console.log(key); it wll print all the value of the object 
    // console.log(obj[key]); it will print all the value of the object using the key 
}

const obj2=Object.create(obj);
obj2.id="sd32x";
obj2.money=1000;
console.log(Object.keys(obj2)); 
//  from this  above line obj2 print only the keys of itself 
for(let key in obj2)
{
    console.log(key);
}
//  Using this above  loop obj2 print also the keys of object 1 and aslo the keys of it self 
console.log(Object.prototype);
// as we know when we create object then obj will inherit the propertyt of Object.prototype
// like  toString() valueOf()   obj but when we print keys of obj toi strionmg does't print because its 
// enumerable value is false so for print tostring as a key we have to change the enumerable into true 
Object.defineProperty(obj2,'tostring',{

    enumerable:true,
});
// in above code we chnage the enumerable value of tostring 
for(let key in obj2)
    {
        console.log(key);
    }

    