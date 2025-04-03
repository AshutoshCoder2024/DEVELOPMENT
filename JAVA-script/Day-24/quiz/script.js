// const form = document.getElementById("Quiz-form");
// form.addEventListener("submit",(event)=>{

//     event.preventDefault(); 
//     const data=new FormData(form);
//     const Answer=Array.from(data.values()); 
//     // it gives the value that we select and as a array store in answer 

//     const original = ["Sachin Tendulkar","West Indies","Muttiah Muralitharan" ,"264","Sachin Tendulkar"];
//     // correct answer of the quiz 

//     let result =0;
//     for(let i=0;i<Answer.length;i++)
//     {
//         if(Answer[i]===original[i]) /* use problem hoga ki ho v submit kiya uska order change ho sakt ahai q ki agar bas 3 ka submit karenge to 
//                                         wo 3no ka anser to data me save hoga par original answer k order/pattren se different hoga  */
//             result++;
//     }
//     console.log(result);

//     const output=document.getElementById("output");
//     output.innerHTML=`${result} out of 5 is correct `;

// })


const form = document.getElementById("Quiz-form");
form.addEventListener("submit", () => {
    event.preventDefault();
    const original_answer = {
        q1: "Sachin Tendulkar",
        q2: "West Indies",
        q3: "Muttiah Muralitharan",
        q4: "264",
        q5: "Sachin Tendulkar"
    }

    const data = new FormData(form );  /*  bye the help of formData object all the data that user submit it save in data */
    let result = 0;
    for (let [key, value] of data.entries()) {   /* esme jitna question ka submit hoga aur bas uska hi check hoga q ki data k  pass bas wahi jayega 
                                                     aur espe key aur value dono ayega data k pass */
        if (value === original_answer[key])
            result++;
    }

    const output=document.getElementById("output");
    output.innerHTML=`${result} out of 5 is correct `;
})