// Non -premptive 


   // Array  
   // we can put different type of data inside the same Array
   let arr =[1,2,3 ,"ashu", "sahu", 'a'] ;
   console.log(arr);
   console.log(typeof(arr));


   
   // OBJECT
   let obj={
    user_name:"Ashutosh",
    account_num:438565427484784,
    balance:88283982,
   }
   console.log(obj);
   console.log(typeof(obj));

   //function

   let fun=function(){
    console.log("hellw guys");
    return 10;
   }
   console.log(fun());


 
  // type conversion 
//    let num="1000";
//    let a=Number(num);
//    console.log(a);
//    console.log(typeof(num));
//    console.log(typeof(a));

    // boolena to Number 
    // let r=false;
    // console.log(Number(r));

    let x="100ES";
    let c=Number(x);
    console.log(c);
    // in above we get error Nan(not a number)because here we are try to convert strign 
    // and this string contain Character  which can't be converted into number

    // ull to number 
    let n=null;
    let m=Number(n);
    console.log(m);
    // here we get zero because numeric valuer of null is zero 

    // //  undefine to Number
    // let x1;
    // console.log(Number(x1));
    //  we get nan because a undefine variable can be store any thing 
    // it is impossible to find data type of an undefine variable so we 
    // get Nan(Not a number )

    // boolean to stringn 
    let ax=false;
    console.log(String (ax));
    console.log(typeof(ax))
    ax=String(ax);
    console.log(typeof(ax))






