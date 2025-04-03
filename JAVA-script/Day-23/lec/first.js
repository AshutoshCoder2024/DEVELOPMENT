// // taking access of all the button
// const red=document.getElementById('red');
// const green=document.getElementById('green');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('orange');
// const pirple=document.getElementById('purple');

// const body=document.body;
// // const body =document.querySelector('body') we can  also use this for taking acces of body 
// red.addEventListener("click" ,()=>{
//     body.style.backgroundColor="red";
// })
// green.addEventListener("click" ,()=>{
//     body.style.backgroundColor="green";
// })
// orange.addEventListener("click" ,()=>{
//     body.style.backgroundColor="orange";
// })
// blue.addEventListener("click" ,()=>{
//     body.style.backgroundColor="blue";
// })
// purple.addEventListener("click" ,()=>{
//     body.style.backgroundColor="purple";
// })






// const buttons=document.querySelectorAll('button');
// const body=document.body;

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor=button.id;
//     })
// })

/* the above  7 line write the  event listener for all five color jaise red aye to red k 
red.addEventListener("click" ,()=>{
    body.style.backgroundColor="red";
}) event listener fir   blue aya to blue  k liye 
blue.addEventListener("click" ,()=>{
    body.style.backgroundColor="blue";
}) */




    // ********************************* event bublign 

       /* event bubblimg me ebent .targrt k help se hamlog ko pta chL Jyega kon se child ke karan
          root wala triger hua aur event.target.id se wo color v mil jayega then hamlog body ka background 
        ka color change kar  sakte hai jaise child  parent aur grandparent wale me jab click click karte the 
        to parent aur grand parent dono triger hota hai aur event.target se pta chal jata tha kon triger kiya hai  */


    // const root =document.getElementById("root");
    // root.addEventListener('mousemove',(event)=>{
    //     // console.log(event.target); /* ye button dega jisko click kiye hai  */
    //     // console.log(event.target.id); /* ye color dega kon sa color click kiye hai  */
    //     console.log(event.target.tagName);
    //     //  jo v click hoga uska taganme ntayega like button h1 
    //     if(event.target.tagName==='BUTTON')  /* ye condition es liye q ki buuton ka alawan like h1 tag pe tap karne pe  */
    //     document.body.style.backgroundColor=event.target.id;
    // });


    // Event Deligation 

    
    const root = document.getElementById("root");
    root.addEventListener("click",(event)=>{
        if(event.target.tagName==="BUTTON")
        document.body.style.backgroundColor=event.target.id;
    })




