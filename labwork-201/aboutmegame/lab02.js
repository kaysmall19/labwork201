//quizzing the user
  //LAB 02

  let name = prompt("What is your name?");
  alert('Hello ' + name);

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
            if (response.toLowerCase() === 'y' || response.toLowerCase() === "YES")
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




//LAB03
// know the age we want guessed
let myAge = 21;
        let theyGotItCorrect = false;
        for (let attempt = 1; attempt <= 4; attempt++) 
        { // prompt the user and alert them if its too high, too low, or in/correct.
            let guessedAge = prompt("Guess my age!");
            if (guessedAge > myAge) {
                alert("Too High...Ohh try again!");
            }
            else if (guessedAge < myAge) {
                alert("Too low... Ohh try again!!!");
            }
        
            else if (!theyGotItRight)
             {
            alert('Ohh wish you could try again.');
            }
             else (guessedAge == myAge) {
            alert("You got it!!!!! My age is indeed " + myAge);
            theyGotItCorrect = false;
            }


// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.





// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.


//LAB04
