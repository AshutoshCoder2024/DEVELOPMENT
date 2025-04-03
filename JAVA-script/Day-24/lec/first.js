





const form = document.querySelector("form");


// form.addEventListener("click",()=>{
//     console.log(event);
// })
// it give a pointer when we click any child of the form 



// form.addEventListener("click",()=>{
//     console.log(event.target)
// })
// it give the that tag or whole detail when we click any child of the form  



// form.addEventListener("click",()=>{
//     console.log(event.target.value)
// })
// it will give the  value that we fill  when we click onm box 


//             input 
// form.addEventListener("input",()=>{
//     console.log(event.target.value)
// })
// it will give the value as we put  like below 
// a
// as
// ash
// ashu
// ashut
// ashuto
// ashutos
// ashutosh




//           change
// form.addEventListener("change",()=>{
//     console.log(event.target.value)
// })
// in change we fil value anbd when to click on any other or change from the that input then the 
// data is print in console




   

//            focus 
// form.addEventListener('focus',(event)=>{
//     console.log(event.target.value);
// })
// when we click on the input then the value is send to the console but focus is not supporting bubbling


//             focus in 
// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })
// it is same as focus but it suppor event bubbling




// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })
// in focus out when we fil value and go to another box then the value is send to the console



// form.addEventListener('dbclick  ',(event)=>{
//     console.log(event.target.value);
// })




// submit
// form.addEventListener('submit',()=>{
//     console.log("form submited")
// })
// it is like default when we submit form then it will referece the page 


//  reset 
form.addEventListener('reset',(event)=>{
    console.log("form reset")
})
// it clear the data that we fill 
 