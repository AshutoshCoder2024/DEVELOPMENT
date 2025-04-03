// const form=document.querySelector("form");
// form.addEventListener("submit",()=>{
//    event.preventDefault();
//    const first= document.getElementById("first")
//    console.log(first.value);

//    const second=document.getElementById("second")
//    console.log(second.value);

//    const third = document.getElementById("third")
//    console.log(third.value);

//    const Result   = document.getElementById("Result");
//    Result.innerText=`${first.value} ${second.value} is a good boy`;

//    document.body.append(Result);
// })



// form Data object 

const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{

   event.preventDefault();
   const data=new FormData(form);


   // console.log(data);
   // it gives form data 

   // console.log(data.keys());
   
   
   // console.log(Array.from(data.keys()));
   // it gives all the key name as we use ion html form in input 
   
   // console.log(Array.from(data.values()));
   //  it gives the value that we fil in input box 
   
   // console.log(Array.from(data));

   // for(let key of data.keys())
   //    console.log(key); 
   //  it will print all the keys of the data


   

   // for(let value of data.values())
   //    console.log(value);
   // it will print all the value that we print 



   
   // for(let key of data.entries());
   // console.log(key);
   // it will print key and value
   ['first-Name', 'ashutosh']
   ['Last-Name', 'sxa w']
   ['Age', '34']

})
