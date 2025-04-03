//Different method for declare string 


let str1="hello everyone my name is ashutosh ";
let str2='hello everyone my name is ashutosh ';
let str3=`hello everyone my  name is ashutosh `;
console.log(str1);
console.log(str2);
console.log(str3);
let price =200;
console.log(`price of ball is ${price} for today only `);
console.log("price of ball is " ,price ," for today only ")


// String Concatenation
let s1="Ashutosh ";
let s2="Sahu";
console.log(s1+s2);



// for length 
console.log(s1.length);


//"' Hello everyone '"
console.log("'hello everyone'");


// ' " Hello everyone"'
console.log('"Hello everyone"');


// for new line 
console.log(" To kaise hai app log.  \n sab thik to " )

// for print \n
console.log("To kasie hai applog \\n sab thik to");


// for print a specific alphabet of string  

let special="Ashutosh";
console.log(special[3]);
console.log(special[5]);
console.log(special.charAt(3));
console.log(special.charAt(5));


// Lower case and upper case 
console.log(special.toLowerCase());
console.log(special.toUpperCase())



let s="ASHUTOSH KUMAR SAHU ";

// iNDEX OF 
console.log(s.indexOf("KUMAR"));
console.log(s.indexOf("A"));

// Last index of 
console.log(s.lastIndexOf("KUMAR"))
console.log(s.lastIndexOf("U"))

// include it return true or false 
console.log(s.includes("K"));
console.log(s.includes("Kumar"));
console.log(s.includes("KUMAR"));

// slice  in this funcion end limit is not included 
console.log(s.slice(2,5));
console.log(s.slice(-5,19))



// substr z
console.log("bauh");
console.log(s.substr(3,15));



// Replacing content 
str10="TO KAISE HAI AAP LOG ";
console.log(str10.replace("HAI","HO"));


//split
// it split the string into a array
str0="money! honey! boney! ";
console.log(str0.split("! "));

str0="money!honey!boney!";
console.log(str0.split("!"));

str0="money*honey*boney*";
console.log(str0.split("*"));



// trim : it remove the staring and end space 
strf=  "  ASHUTOSH KUMAR SAHU  ";

console.log(strf)
console.log(strf.trim());

    

