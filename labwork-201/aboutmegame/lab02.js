  //quizzing the user 
  
  let birthday = true;
        while (birthday)
        {
            let response = prompt("Is Kiara's birthday March 31?").toUpperCase(); //user should enter a 'n'
            if (response.toUpperCase() === 'n' || response.toUpperCase() === "NO")
            {
                birthday = false;
            }
        }

      

let movie = true;
        while (movie)
        {
            let response = prompt("Is Kiara's favorite movie Scary Movie 3?").toLowerCase(); //user should enter a 'y'
            if (response.toLowerCase() === 'y' || response.toLowerrCase() === "YES")
            {
                movie = false;
            }
        }


 let job = true;
        while (job)
        {
            let response = prompt("Have Kiara ever had a job?").toLowerCase(); //user should enter a 'n' 
            if (response.toLowerCase() === 'n'|| response.toLowerCase() === "NO")
            {
                job = false;
            }
        }

let color = true;
        while (color)
        {
            let response = prompt("Is Kiara's favorite color green?").toUpperCase();  //user should enter a 'n'
            if (response.toUpperCase === 'n'|| response.toUpperCase() === "NO")
            {
                color = false;
            }
        }   

let goal = true;
        while (goal)
        {
            let response = prompt("Is Kiara's goal is to finish school?").toLowerCase(); //user should enter a 'y' 
            if (response.toLowerCase() === 'y'|| response.toLowerCase() === "YES")
            {
                goal = false;
            }
        }
   
 console.log("The answer is " + response.toUpperCase() + response.toLowerCase());

 
//  let hello = prompt("What is your name?").toLowerCase(); //user should enter a 'name' 
//             if ("So your name is" + hello);
//             {
//                 console.log ("Welcome" + hello);
//             }
 