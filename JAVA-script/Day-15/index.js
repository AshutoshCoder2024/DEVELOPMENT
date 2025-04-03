// for of loop 


        // it can easily print value of arr 
          const arr=[1,22,90,56,424];
          for(let value of arr)
              console.log(value);

          

          // it also for String
          let str="My name is Ashutosh  Kumar Sahu ";
          for(let value of str)
          {
              console.log(value);
          }





        //    it not use with object because object is not iterable 

        // const detail={
        //     Name:"Ashutosh",
        //     Age:20,
        //     sex:"Male"
        // };
        // for (let value of detail);
        // {
        //     console.log(value);
        // }
        /*in above so  we got error TypeError: detail is not iterable
        becuse  object does't follow any sereies  agle key bare me koi information nhi 
        hoti hai uske location k bar me */

        const obj={
            4:"india",
            1:"AShu",
            3:"Ranchji",
            2:20,
        }
        console.log(obj)
        // it give output in  { '1': 'AShu', '2': 20, '3': 'Ranchji', '4': 'india' }  
        //  it does npot follow any order of initialization it print value in accending order 
        // so its is not iterable  

    
        //  we can print value of objj by for of loop by first convert the value of obj 
        // in form of array by the help of Object.value(obj)

        // for (let value of Object.values(obj))
        // {
        //     console.log(value);

        // }

        // form above code we get output 
        // AShu
        // 20
        // Ranchji
        // india


        // for (let value of Object.keys(obj))
        // {
        //     console.log(value, obj[value]);
        // }

        // 1 AShu
        // 2 20
        // 3 Ranchji
        // 4 india

