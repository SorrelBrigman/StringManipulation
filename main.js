console.log("hi")


//Global var
//holds the string once it has been turned into an array
var stringArray = [];
var reversedString = "";



//ask if "input should only be letters" is just placeholder, or a function
function reversal() {
  var answer = "";
  for(var i = (stringArray.length-1); i >= 0; i--){
    answer += stringArray[i];
  }
  document.querySelector(".reversal").innerHTML = `<p>Reversal: ${answer}`;
  reversedString = answer;
}

function alphabits() {
  var alphaArray = stringArray.sort();
  var answer = "";
  for(var i = 0; i < alphaArray.length; i++){
    answer += alphaArray[i];
  }
  document.querySelector(".alphabits").innerHTML = `<p>Alphabits: ${answer}`;

}

function palindrome() {
  if (reversedString === document.querySelector("input").value) {
    document.querySelector(".palindrome").innerHTML = `<p>Your string is a palindrome!</p>`
  } else {
    document.querySelector(".palindrome").innerHTML = "";
      }

}

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);


var getString = function(e) {
  e.preventDefault();
  var userString = document.querySelector("input").value;
  stringArray = userString.split("");
  reversal();
  alphabits();
  palindrome();
}

//listener event for submit

document.querySelector(".submit").addEventListener("click", getString);
