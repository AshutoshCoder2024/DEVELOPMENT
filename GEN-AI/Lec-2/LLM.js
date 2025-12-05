// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey:"AIzaSyC5naKJRDzxHMjlSPA3ZIre78IfZBPYCy4"});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",

//     // contents: "what is  array in 10 points ",
//     // in above formate   LLM has only the current context  question that i ask , if a told my name and then ask it later  then  can't knew my name 


//     //  now BY using the  below synatx in which i also share teh previous data to LLM so i can answer  from pre data like name  but in this type i have to do all the things manually like  write role and text 
//     contents: [
//         {
//             role:"user",
//             parts:[{text:"Hii am Ashutosh "}]
//         },
//         {
//             role:"model",
//             parts:[{text:"Hi Ashutosh! Nice to meet you."}]
//         },
//         {
//             role:"user",
//             parts:[{text:"what is my name "}]
//         },
//         {
//             role:"user",
//             parts:[{text:"what is my age "}]
//         }
//     ]
//   });
//   console.log(response.text);
// }
// await main();





// After uisng var readlineSync = require('readline-sync');

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "AIzaSyC5naKJRDzxHMjlSPA3ZIre78IfZBPYCy4" });
const History = []; // we make a array to maintain history 


async function chating(userproblem) {
    History.push({  // here user mess save in the history array 
        role: 'user',
        parts:[{text:userproblem}]
    })

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: History // history is given as context that  that containn all the mes of user and ai  
    });
    History.push({  // here the response of the ai is store in history 
        role: "model",
        parts:[{text:response.text}]
    })
    console.log(response.text);
}

async function main() {
    let userproblem;  
    if(History.length==0){
         userproblem = readlineSync.question("Ask me anything!"); // this is use for first time chat  
    }
    else{
         userproblem = readlineSync.question(""); //user mes
    }

    await chating(userproblem);   // here we send the user mes to chating function that keep history of contenxt 
    main()

}
main();
