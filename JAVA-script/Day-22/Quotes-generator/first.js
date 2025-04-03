
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Life is what happens when you’re busy making other plans. – John Lennon",
  "Happiness is not by chance, but by choice. – Jim Rohn",
  "Do more of what makes you happy.",
  "Live life to the fullest, and focus on the positive.",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Believe you can, and you’re halfway there. – Theodore Roosevelt",
  "Push yourself because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Your limitation—it’s only your imagination.",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don’t belong.",
  "Change the way you look at things, and the things you look at change.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "Don’t fear failure. Fear being in the exact same place next year.",
  "An investment in knowledge pays the best interest. – Benjamin Franklin",
  "Education is the most powerful weapon you can use to change the world. – Nelson Mandela",
  "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
  "Knowledge is power, but wisdom is its application.",
  "Learn as if you will live forever; live like you will die tomorrow. – Mahatma Gandhi",
  "Love is not about how much you say ‘I love you,’ but how much you prove that it’s true.",
  "The best thing to hold onto in life is each other. – Audrey Hepburn",
  "In the end, we only regret the chances we didn’t take with the people we love.",
  "True love begins when nothing is looked for in return. – Antoine de Saint-Exupéry",
  "Where there is love, there is life. – Mahatma Gandhi",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "Gratitude turns what we have into enough.",
  "Positive thinking will let you do everything better than negative thinking will. – Zig Ziglar",
  "A thankful heart is a magnet for miracles.",
  "What you focus on expands, so focus on what you want.",
  "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another. – John C. Maxwell",
  "Great leaders don’t set out to be a leader. They set out to make a difference.",
  "Leadership is unlocking people’s potential to become better. – Bill Bradley",
  "Fall seven times, stand up eight. – Japanese Proverb",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "The struggle you’re in today is developing the strength you need for tomorrow.",
  "Tough times never last, but tough people do. – Robert H. Schuller",
  "Your greatest struggle is your greatest strength.",
  "Creativity is intelligence having fun. – Albert Einstein",
  "The world is but a canvas to our imagination. – Henry David Thoreau",
  "Think left and think right and think low and think high. Oh, the things you can think up if only you try! – Dr. Seuss",
  "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world. – Albert Einstein",
  "Don’t wait for inspiration. It comes while working."
];

function random_quote_generator()
{
    const quote=document.querySelector("p");
    // const number=Math.floor(Math.random()*(49-0+1)+0);
    const number=Math.floor(Math.random()*21);
    quote.innerHTML=quotes[number]; 
}

random_quote_generator();
//  it is for initial time

// //*************************************** */ event 



// button 

// const button = document.querySelector("button");
// button.addEventListener("click",()=>{
//   random_quote_generator();

// })





// keydown

// document.addEventListener("keydown",()=>{
//   random_quote_generator();
// })



//  keyup

// document.addEventListener("keyup" ,()=>{
//   random_quote_generator();
// })

// keypress
// document.addEventListener("keypress",()=>{
//   random_quote_generator();
// })



// only when enter key is press  
// document.addEventListener('keydown',(event)=>{ 
//   /* event is the object that store all the informtion about which key user press  */
//  console.log(event.key)
//   // we can see which key we press in kwyboard  in console 
//   if(event.key=="Enter")
//     /* quotes generate only  when we press enter key  */
//   {
//     random_quote_generator();
//   }

// })


// all about event object 
 document.addEventListener("keydown",(eveent)=>{
  console.log(event);
  console.log(event.key);
  console.log(event.target);
  console.log(event.type);
 })

 document.addEventListener("click",(event)=>{
  console.log(event.clientX);
  console.log(event.clientY);
 })
