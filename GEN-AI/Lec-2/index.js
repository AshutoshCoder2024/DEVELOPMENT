// in below this is diff from LLM.js as in that i have to maintai  history manually but in below code i don't have to maintain history  LLM maintain it automatically 
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyC5naKJRDzxHMjlSPA3ZIre78IfZBPYCy4",
});


const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
});


async function main() {
  let userproblem;
  let response;

  if (chat.history.length == 0) {
    userproblem = readlineSync.question("Ask me anything!");
     response = await chat.sendMessage({
      message: userproblem,
    });
  } else {
    userproblem = readlineSync.question("");
     response = await chat.sendMessage({
      message: userproblem,
    });

  }
  // without if else we have to just write the below function 
  // userproblem = readlineSync.question("Ask me anything!");
  // const response = await chat.sendMessage({
  //   message: userproblem,
  // });

  console.log(response.text);
  main();
}
main();
