console.log("hi")


//Global var
//holds the string once it has been turned into an array
var stringArray = [];



//ask if "input should only be letters" is just placeholder, or a function
function reversal() {
  var answer = "";
  for(var i = (stringArray.length-1); i >= 0; i--){
    answer += stringArray[i];
  }
  document.querySelector(".reversal").innerHTML = `<p>Reversal: ${answer}`;
}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);


var getString = function(e) {
  e.preventDefault();
  var userString = document.querySelector("input").value;
  stringArray = userString.split("");
  reversal();
}

//listener event for submit

document.querySelector(".submit").addEventListener("click", getString);
