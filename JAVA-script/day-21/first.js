//*******************************/ create element ********************************************


// const element= document.createElement("li");
// element.innerHTML="ashu";

// const parent = document.getElementById("root");
// parent.append(element);


// make a function for above code


// function attach(content)
// {
//     const element = document.createElement("li");
//     element.innerHTML=content;

//     const parent = document.getElementById("root");
//     parent.append(element);

// }
// attach("Ashutosh");
// attach("ATUL");
// attach("fdsg");



// function append(content){
//     const element=document.createElement('li');
//     element.innerHTML=content;
    
//     const element2=document.createElement('li');
//     element2.innerHTML=content+"V2.0";
    
//     const parent=document.getElementById("root");
//     // parent.appendChild(element); at a time only one element can append 
//     parent.append(element,element2);
// }
// append("TS");
// append("react");
// append("GIT-GITHUB");


//  *************************adding a text node ********************************************** 


// const element=document.createTextNode("Hello coder army ");

// const parent=document.getElementById("root");
// parent.append(element);




//  *************************adding a attribute  ********************************************** 
  


//  access to first list 

// const element=document.createAttribute("id");
// element.value="first";
// const curr_list=document.querySelector('li');
// curr_list.setAttributeNode(element);




// access to second list 
// const element=document.createAttribute("id");
// element.value="Second";
// const parent=document.getElementById("root");
// parent.children[1].setAttributeNode(element);


 
// access attribute of a element  esme kisse element ka ek attribute ka access le late 
//  then us element k baki attribute ko v access kar sakte hai uspe new attribute create kar 
//  kar sakte hai attribute delete kar sakte hai 

// const element =document.getElementById("root");
// // console.log(element.getAttribute("class"));  

// element.setAttribute("price","2000");
// element.setAttribute("nu","4");
// element.removeAttribute("class")  class attribute remove 





//**************************************** */ Add nodes to the************************************************* 
// const parent=document.getElementById("root");  
// const element=document.createElement('li');
// element.innerHTML="TS";
// parent.prepend(element); it add new element at the first position 
// parent.append(element) it add new element at the end position 

 


// const child2=parent.children[1];
// parent.insertBefore(element,child2); // here child2 is inserted before   element 


// parent.replaceChild(element,child2);



// parent.innerHTML="TS";
// parent.innerHTML+="<li>TS</li>";





// const parent=document.getElementById("root");  
// const element=document.createElement('div');
// element.innerHTML="Hello everyone"
// parent.insertAdjacentElement("beforebegin",element);     new div is inserted brfore the parent 
// parent.insertAdjacentElement("AfterEnd",element);        new div is inserted after the parent 
// parent.insertAdjacentElement("Afterbegin",element);
// parent.insertAdjacentElement("Afterend",element);




// delete node or element 
// document.querySelector('li').remove();  it remove the first child 







