
//Test 1
//Use a switch statement to log the following string for the given language:
//chinese or mandarin: MOST number of native speakers!
//spanish:2nd place in number of native speakers
//english: 3rd place
//hindi: Number 4
//arabic: 5th most spoken language, for all other simply log Great language too

function logLanguage(language) {
switch (language) {
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!');
      break;
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
    case 'english':
      console.log('3rd place');
      break;
    case 'hindi':
      console.log('Number 4');
      break;
    case 'arabic':
      console.log('5th most spoken language');
      break;
    default:
      console.log('Great language too');
      break;
  }
}

//Test 2

//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!
//Your tasks:
//1. Calculate the average score for each team, using the test data below
//2. Compare the teams average scores to determine the winner of the competition,
//and print it to the console. Dont forget that there can be a draw, so test for that as
//well (draw means they have the same average score)
//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
//team only wins if it has a higher score than the other team, and the same time a
//score of at least 100 points. Hint: Use a logical operator to test for minimum score,
//as well as multiple else-if blocks
//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
//both teams have the same score and both have a score greater or equal 100 points.
//Otherwise, no team wins the trophy
//Test data:
//Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Data 1
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Function to calculate average score
const calculateAverageScore = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

// Calculate average scores for both teams
const dolphinsAverage = calculateAverageScore(dolphinsScores);
const koalasAverage = calculateAverageScore(koalasScores);

// Compare average scores and determine the winner
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy.");
}

// Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calculateAverageScore(dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverageScore(koalasScoresBonus1);

if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy.");
}

// Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calculateAverageScore(dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverageScore(koalasScoresBonus2);

if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy.");
}


//Test 3
//Steven wants to build a very simple tip calculator for whenever he goes eating in a
//restaurant. In his country, its usual to tip 15% if the bill value is between 50 and
//300. If the value is different, the tip is 20%.
//Your tasks:
//1. Calculate the tip, depending on the bill value. Create a variable called tip for
//this. Its not allowed to use an if/else statement (If its easier for you, you can start
//with an if/else statement, and then try to convert it to a ternary operator!)
//2. Print a string to the console containing the bill value, the tip, and the final value
//(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
//316.25”
//Test data:
//Data 1: Test for bill values 275, 40 and 430
//Hints:
//To calculate 20% of a value, simply multiply it by 20/100 = 0.2 Value X is
//between 50 and 300, if its >= 50 && <= 300


// Data 1
const billValues = [275, 40, 430];

billValues.forEach(bill => {
  // Calculate the tip using a ternary operator
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // Calculate the total value
  const totalValue = bill + tip;

  // Print the result
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
});

//Test 4
//Write a function called describeCountry which takes three parameters: country,
//population and capitalCity. Based on this input, the function returns a string with
//this format: Finland has 6 million people and its capital city is Helsinki
//2. Call this function 3 times, with input data for 3 different countries. Store the
//returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  // Calling the function and storing the returned values in variables
  const description1 = describeCountry('Finland', 6, 'Helsinki');
  const description2 = describeCountry('United States', 331, 'Washington, D.C.');
  const description3 = describeCountry('Australia', 25, 'Canberra');
  
  // Logging the descriptions to the console
  console.log(description1);
  console.log(description2);
  console.log(description3);

  //Test 5
  //1. The world population is 7900 million people. Create a function declaration
//called percentageOfWorld1 which receives a population value, and returns the
//percentage of the world population that the given population represents. For

//example, China has 1441 million people, so its about 18.2% of the world
//population
//2. To calculate the percentage, divide the given &#39;population&#39; value by 7900 and then
//multiply by 100
//3. Call percentageOfWorld1 for 3 populations of countries of your choice, store
//the results into variables, and log them to the console
//4. Create a function expression which does the exact same thing, called
//percentageOfWorld2, and also call it with 3 country populations (can be the same
//populations)
//Bonus: Recreate the last assignment, but this time create an arrow function called
//percentageOfWorld3


 // Function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
  }
  
  // Function expression
  const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
  };
  
  // Arrow function
  const percentageOfWorld3 = population => (population / 7900) * 100;
  
  // Call the functions and store the results in variables
  const percentage1 = percentageOfWorld1(1441);
  const percentage2 = percentageOfWorld2(200);
  const percentage3 = percentageOfWorld3(400);
  
  // Log the results to the console
  console.log(percentage1);
  console.log(percentage2);
  console.log(percentage3);
  

  //Test 6
  //1. Create an array containing 4 population values of 4 countries of your choice.
//You may use the values you have been using previously. Store this array into a
//variable called populations
//2. Log to the console whether the array has 4 elements or not (true or false)
//3. Create an array called percentages containing the percentages of the world
//population for these 4 population values. Use the function percentageOfWorld1
//that you created earlier to compute the 4 percentage values.

// Function declaration for calculating the percentage
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
  }
  
  // Create an array containing 4 population values
  const populations = [1441, 331, 25, 6];
  
  // Check if the array has 4 elements
  const hasFourElements = populations.length === 4;
  console.log(hasFourElements);
  
  // Create an array containing the percentages of the world population
  const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
  ];
  
  console.log(percentages);
  


  
