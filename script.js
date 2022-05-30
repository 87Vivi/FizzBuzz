console.log('External script implemented successfully'); // Just for debugging, delete later

function runFizzBuzz() {
    let htmlString = "";
  
    for (let i = 1; i < 101; i += 1) {
      htmlString += "<li>";
      if (i % 3 === 0 && i % 5 === 0) htmlString += "FizzBuzz";
      else if (i % 3 === 0) htmlString += "Fizz";
      else if (i % 5 === 0) htmlString += "Buzz";
      else htmlString += i;
      htmlString += "</li>";
    }
  
    return htmlString;
  }
  
  document.getElementById("fizzBuzzList").innerHTML = runFizzBuzz();