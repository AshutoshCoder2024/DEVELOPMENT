const Grandparent=document.getElementById('gparent');
const Parent=document.getElementById('parent');
const Child =document.getElementById('child');
 
// addEventListener(event.call-back,use capture) 
/* in event : click mousemove etc 
   in call -back : any function etc
   in captute : true amd false  by default it is false and event is bubbling event
   buit when capture is true then it is capturing event  */

// ************** for bubbling event  *************** ander se bahr 

/* if i click child the first child clicked then parent and last grandparet*/

//    Child.addEventListener('click' ,()=>{
//     console.log("child  clicked");
// },false)

// Parent.addEventListener('click' ,()=>{
//     console.log("parent clicked");
// },false)

// Grandparent.addEventListener('click' ,()=>{
//     console.log("grandparent clicked");
// },false)

  
// ****************** for capturing event***************** bahar se ander 


/* if i clicked chld then first grandParent clicked then parent clicked and last child clicked  */

// Child.addEventListener('click' ,(event)=>{
//     // console.log("child  clicked");
//     // console.log(event.target);
//     // console.log(event.currentTarget);
// },false)

// Parent.addEventListener('click' ,(event)=>{
//     // console.log("parent clicked");
//     // console.log(event.target);
//     // console.log(event.currentTarget);
// },false)

// Grandparent.addEventListener('click' ,(event)=>{
//     // console.log("grandparent clicked");
//     // console.log(event.target);
//     console.log(event.currentTarget);
// },false)


// ****************************** event stop  propagation 



   Child.addEventListener('click' ,()=>{
    console.log("child  clicked");
    // event.stopPropagation();
},false)

Parent.addEventListener('click' ,()=>{
    console.log("parent clicked");
    event.stopPropagation();
},false)

Grandparent.addEventListener('click' ,()=>{
    console.log("grandparent clicked");
},false)
