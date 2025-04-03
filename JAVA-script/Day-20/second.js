// const id = document.querySelector("#first");
// id.innerHTML="To kaise hai applog";

// const id2=document.querySelector(".header3");
// // console.log(id2);

// id2.style.backgroundColor="red";



const OBJ=document.getElementsByTagName("li");
OBJ.innerHTML="TO KAISE HO AAP LOG";




//    Accessing Using Relationships
//    i: Parent Node:
//    Method: element.parentNode or element.parentElement
//    Description: Access the immediate parent of an element.

// const list=document.querySelector('li');
// console.log(list); 
// console.log(list.parentElement); 
// console.log(list.parentNode); 


//    Child Nodes:
//    Method: element.childNodes (includes text nodes) or element.children 
//    (only element nodes)
//    Description: Access all child nodes of an element.

const par=document.querySelector('ul');
console.log(par)
console.log(par.childNodes);
console.log(par.children)

